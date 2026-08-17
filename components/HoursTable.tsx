"use client";

import { useEffect, useRef, useState } from "react";
import { Row, RATE, sumRows, money } from "@/lib/hours";

export default function HoursTable({ rows }: { rows: Row[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const ref = useRef<HTMLTableElement>(null);
  const total = sumRows(rows);

  // A tap pins the tooltip open, so close it on any tap elsewhere or on Escape.
  // Hover-only tooltips would be unreachable on a phone, and Mark may well read
  // this on one.
  useEffect(() => {
    if (pinned === null) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPinned(null);
        setOpen(null);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setPinned(null);
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [pinned]);

  return (
    <table ref={ref} className="w-full text-sm">
      <thead>
        <tr className="border-b border-outline-variant/30">
          <th className="text-left py-3 pr-3 font-medium text-on-surface-variant">Work</th>
          <th className="text-right py-3 px-2 font-medium text-on-surface-variant w-14">Low</th>
          <th className="text-right py-3 pl-2 font-medium text-on-surface-variant w-14">High</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => {
          // A pinned row wins outright, so hovering a second row can't leave two
          // tooltips on screen at once.
          const isOpen = pinned !== null ? pinned === i : open === i;
          return (
            <tr key={r.task} className="border-b border-outline-variant/10 align-top">
              <td className="py-3 pr-3 relative">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onMouseEnter={() => setOpen(i)}
                  onMouseLeave={() => setOpen(null)}
                  onFocus={() => setOpen(i)}
                  onBlur={() => setOpen(null)}
                  onClick={() => setPinned(pinned === i ? null : i)}
                  className="text-left text-on-surface-variant leading-relaxed inline-flex items-start gap-1.5 hover:text-on-surface transition-colors cursor-help group"
                >
                  <span>{r.task}</span>
                  <span
                    className="material-symbols-outlined text-outline group-hover:text-brand-orange transition-colors shrink-0 mt-0.5"
                    style={{ fontSize: "15px" }}
                    aria-hidden="true"
                  >
                    info
                  </span>
                </button>

                {isOpen && (
                  <div
                    role="tooltip"
                    className="absolute left-0 top-full z-20 mt-1 w-[min(22rem,calc(100vw-3rem))] bg-surface-container-high border border-outline-variant/40 rounded-xl p-4 shadow-2xl"
                  >
                    <p className="text-on-surface-variant text-xs leading-relaxed">{r.detail}</p>
                  </div>
                )}
              </td>
              <td className="py-3 px-2 text-right text-on-surface tabular-nums">{r.low}</td>
              <td className="py-3 pl-2 text-right text-on-surface tabular-nums">{r.high}</td>
            </tr>
          );
        })}
        <tr className="border-t-2 border-brand-orange/40">
          <td className="py-4 pr-3 font-headline font-bold text-on-surface">Total hours</td>
          <td className="py-4 px-2 text-right font-headline font-bold text-brand-orange tabular-nums text-lg">
            {total.low}
          </td>
          <td className="py-4 pl-2 text-right font-headline font-bold text-brand-orange tabular-nums text-lg">
            {total.high}
          </td>
        </tr>
        <tr>
          <td className="py-2 pr-3 text-on-surface-variant">At ${RATE}/hour</td>
          <td className="py-2 px-2 text-right text-on-surface tabular-nums whitespace-nowrap">
            {money(total.low)}
          </td>
          <td className="py-2 pl-2 text-right text-on-surface tabular-nums whitespace-nowrap">
            {money(total.high)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
