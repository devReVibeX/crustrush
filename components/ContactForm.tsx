"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (!/^[\d+\-\s]{7,15}$/.test(form.phone.trim())) next.phone = "Enter a valid phone number.";
    if (form.subject.trim().length < 3) next.subject = "Please enter a subject.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  if (sent) {
    return (
      <div className="flex flex-col items-center rounded-xl2 border border-black/10 bg-white p-10 text-center shadow-card">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-crust-olive/10">
          <CheckCircle2 className="h-9 w-9 text-crust-olive" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">Message Sent!</h3>
        <p className="mt-3 max-w-sm text-sm text-crust-black/65">
          Thanks {form.name.split(" ")[0]}, our team will get back to you at {form.email} shortly.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSent(false);
          }}
          className="btn-secondary mt-8"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl2 border border-black/10 bg-white p-6 shadow-card sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input value={form.name} onChange={(e) => update("name", e.target.value)} type="text" placeholder="Your name" className="field-input" />
        </Field>
        <Field label="Email" error={errors.email}>
          <input value={form.email} onChange={(e) => update("email", e.target.value)} type="email" placeholder="you@example.com" className="field-input" />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input value={form.phone} onChange={(e) => update("phone", e.target.value)} type="tel" placeholder="+91 xxxxx xxxxx" className="field-input" />
        </Field>
        <Field label="Subject" error={errors.subject}>
          <input value={form.subject} onChange={(e) => update("subject", e.target.value)} type="text" placeholder="How can we help?" className="field-input" />
        </Field>
        <Field label="Message" error={errors.message} full>
          <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={5} placeholder="Tell us more..." className="field-input resize-none" />
        </Field>
      </div>
      <button type="submit" className="btn-primary mt-8 w-full sm:w-auto">
        <Send className="h-4 w-4" /> Send Message
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
