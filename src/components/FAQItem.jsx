import { useState } from "react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="border rounded-xl p-4 cursor-pointer transition hover:bg-gray-50"
      onClick={() => setOpen(!open)}
    >
      <h4 className="font-semibold">{question}</h4>
      {open && <p className="mt-2 text-gray-600 text-sm">{answer}</p>}
    </div>
  );
}
