"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const navLinks = [
  { href: "#cacn", label: "Citics Agent" },
  { href: "#roles", label: "Vai trò" },
  { href: "#policies", label: "Chính sách" },
  { href: "#events", label: "Sự kiện" },
  { href: "#news", label: "Tin tức" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Trap focus inside mobile menu
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!menuOpen || !menuRef.current) return;
    if (e.key === "Escape") { setMenuOpen(false); return; }
    if (e.key !== "Tab") return;
    const focusable = menuRef.current.querySelectorAll<HTMLElement>("a, button");
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }, [menuOpen]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-blue/95 backdrop-blur-[16px] shadow-[0_2px_24px_rgba(0,0,0,0.15)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-[50px] flex items-center justify-between h-[72px] lg:h-[72px]">
          <Image
            src="/assets/Logo_citics_main_w.png"
            alt="Citics"
            width={100}
            height={32}
            className="h-8 w-auto"
          />
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#form1"
              className="bg-amber text-blue font-bold text-sm px-7 py-3 rounded-[50px] hover:bg-amber-hover hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,191,1,0.4)] active:bg-amber-active active:translate-y-0 transition-all"
            >
              Nhận tư vấn
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu điều hướng"
        className={`fixed inset-0 z-40 bg-blue/[0.97] backdrop-blur-[12px] flex flex-col items-center justify-center gap-6 lg:hidden transition-transform duration-[350ms] ease-out ${
          menuOpen ? "translate-y-0" : "-translate-y-full pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-white text-xl font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#form1"
          className="bg-amber text-blue font-bold px-8 py-3 rounded-[50px] mt-4 hover:bg-amber-hover transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          Nhận tư vấn
        </a>
      </div>
    </>
  );
}
