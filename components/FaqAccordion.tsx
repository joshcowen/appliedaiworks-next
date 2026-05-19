"use client";

import { useState } from "react";

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="faq-item bg-surface-container-low border border-outline-variant/10 rounded-2xl overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-headline font-semibold text-on-surface text-base">
                {item.question}
              </span>
              <span
                className="material-symbols-outlined text-on-surface-variant shrink-0 transition-transform duration-300"
                style={isOpen ? { transform: "rotate(180deg)" } : undefined}
              >
                expand_more
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-300"
              style={{ maxHeight: isOpen ? "500px" : "0" }}
            >
              <p
                className="px-6 pb-5 text-on-surface-variant leading-relaxed text-sm"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
