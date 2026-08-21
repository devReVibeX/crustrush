import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+91 xxxxx xxxxx"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CRUSTRUSH on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
    </a>
  );
}
