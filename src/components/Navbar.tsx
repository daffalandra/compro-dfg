import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { footer, navLinks } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { easeApple } from "../lib/motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { scrollY } = useScroll();
  const rawOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useSpring(rawOpacity, { stiffness: 300, damping: 40 });

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        menuRef.current?.contains(target) ||
        buttonRef.current?.contains(target)
      ) {
        return;
      }
      setMobileOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.div
        aria-hidden
        style={{ opacity: bgOpacity }}
        className="absolute inset-0 border-b border-zinc-200/60 bg-white/75 backdrop-blur-xl"
      />

      <nav
        aria-label="Primary"
        className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* Logo */}
        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: easeApple }}
          className="flex items-center gap-2.5"
        >
          <img
            src={footer.logo}
            alt="DFG logo"
            width={1254}
            height={1254}
            className="h-16 w-16 object-contain"
          />
        </motion.a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {pick(lang, link.label)}
            </a>
          ))}
        </div>

        {/* Desktop right controls */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle layoutId="active-lang-pill-desktop" />
        </div>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="text-zinc-700 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" strokeWidth={1.5} />
          ) : (
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeApple }}
            className="relative overflow-hidden border-t border-zinc-200/60 bg-white/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm text-zinc-700 hover:bg-zinc-50"
                >
                  {pick(lang, link.label)}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between px-2">
                <span className="text-xs uppercase tracking-widest text-zinc-400">
                  Language
                </span>
                <LanguageToggle layoutId="active-lang-pill-mobile" />
              </div>
              {/* <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-zinc-900 px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {pick(lang, navCta)}
              </a> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
