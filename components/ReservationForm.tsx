"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, CheckCircle2, Users } from "lucide-react";
import { branches } from "@/lib/data";

interface FormState {
  name: string;
  phone: string;
  email: string;
  branch: string;
  date: string;
  time: string;
  guests: string;
  request: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  branch: branches[0].name,
  date: "",
  time: "",
  guests: "2",
  request: "",
};

export default function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^[\d+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!form.date) next.date = "Please choose a date.";
    if (!form.time) next.time = "Please choose a time.";
    if (!form.guests || Number(form.guests) < 1) next.guests = "At least 1 guest is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-xl2 border border-black/10 bg-white p-10 text-center shadow-card">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crust-olive/10">
          <CheckCircle2 className="h-9 w-9 text-crust-olive" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">Table Reserved!</h3>
        <p className="mt-3 max-w-sm text-sm text-crust-black/65">
          Thanks {form.name.split(" ")[0]}, your table for {form.guests} at {form.branch} is booked for{" "}
          {form.date} at {form.time}. A confirmation has been sent to {form.email}.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="btn-secondary mt-8"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl2 border border-black/10 bg-white p-6 shadow-card sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.name}>
          <input
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            type="text"
            placeholder="Your name"
            className="field-input"
          />
        </Field>
        <Field label="Phone Number" error={errors.phone}>
          <input
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            type="tel"
            placeholder="+91 xxxxx xxxxx"
            className="field-input"
          />
        </Field>
        <Field label="Email" error={errors.email} full>
          <input
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            type="email"
            placeholder="you@example.com"
            className="field-input"
          />
        </Field>
        <Field label="Branch">
          <select value={form.branch} onChange={(e) => update("branch", e.target.value)} className="field-input">
            {branches.map((b) => (
              <option key={b.id} value={b.name}>
                {b.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Number of Guests" error={errors.guests}>
          <div className="relative">
            <Users className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-crust-black/40" />
            <input
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              type="number"
              min={1}
              max={20}
              className="field-input pl-11"
            />
          </div>
        </Field>
        <Field label="Date" error={errors.date}>
          <input value={form.date} onChange={(e) => update("date", e.target.value)} type="date" className="field-input" />
        </Field>
        <Field label="Time" error={errors.time}>
          <input value={form.time} onChange={(e) => update("time", e.target.value)} type="time" className="field-input" />
        </Field>
        <Field label="Special Request" full>
          <textarea
            value={form.request}
            onChange={(e) => update("request", e.target.value)}
            rows={4}
            placeholder="Birthday setup, window seating, allergies..."
            className="field-input resize-none"
          />
        </Field>
      </div>

      <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
        <CalendarCheck className="h-4 w-4" /> Reserve Table
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-crust-black/60">{label}</label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-crust-ember">{error}</p>}
    </div>
  );
}
