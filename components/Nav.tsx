"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/ai-audit", label: "AI Audit", highlight: true },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <nav
      id="nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 font-headline ${
        scrolled
          ? "bg-[#060e20] border-b border-outline-variant/40"
          : "bg-[#060e20]/60 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-reversed.png"
              alt="Applied AI Works"
              width={200}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    isActive(link.href)
                      ? "text-brand-orange font-semibold"
                      : link.highlight
                      ? "text-on-surface-variant hover:text-brand-orange transition-colors"
                      : "text-on-surface-variant hover:text-on-surface transition-colors"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 kinetic-gradient text-white text-sm font-bold px-5 py-2 rounded-xl neural-glow hover:scale-[1.02] active:scale-95 transition-transform"
            >
              Book a Free Call
            </Link>
            <button
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex flex-col justify-center p-1"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span
                className="block w-[22px] h-[2px] bg-on-surface transition-all duration-300 my-[4px]"
                style={menuOpen ? { transform: "translateY(6px) rotate(45deg)" } : undefined}
              />
              <span
                className="block w-[22px] h-[2px] bg-on-surface transition-all duration-300 my-[4px]"
                style={menuOpen ? { opacity: 0 } : undefined}
              />
              <span
                className="block w-[22px] h-[2px] bg-on-surface transition-all duration-300 my-[4px]"
                style={menuOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined}
              />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden bg-surface-container-low border-t border-outline-variant/20 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          <Link
            href="/#how-it-works"
            onClick={closeMenu}
            className="py-3 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 text-sm font-medium"
          >
            How It Works
          </Link>
          <Link
            href="/ai-audit"
            onClick={closeMenu}
            className="py-3 text-on-surface-variant hover:text-brand-orange border-b border-outline-variant/10 text-sm font-medium"
          >
            AI Audit &mdash; $1,500
          </Link>
          <Link
            href="/services"
            onClick={closeMenu}
            className="py-3 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="py-3 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 text-sm font-medium"
          >
            About
          </Link>
          <Link
            href="/faq"
            onClick={closeMenu}
            className="py-3 text-on-surface-variant hover:text-on-surface border-b border-outline-variant/10 text-sm font-medium"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="mt-3 kinetic-gradient text-white text-sm font-bold px-5 py-3 rounded-xl text-center"
          >
            Book a Free Call
          </Link>
        </div>
      </div>
    </nav>
  );
}
