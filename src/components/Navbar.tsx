import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { footer, navCta, navLinks } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const easeApple = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang } = useLanguage();

  const { scrollY } = useScroll();
  const rawOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const bgOpacity = useSpring(rawOpacity, { stiffness: 300, damping: 40 });
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

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
            className="h-8 w-8 object-contain"
          />
          <span
            className={`text-lg font-semibold tracking-tight transition-colors duration-300 ${
              scrolled ? "text-zinc-900" : "text-zinc-900"
            }`}
          >
            DFG
          </span>
          <span className="hidden text-xs text-zinc-400 sm:inline">
            Data Fine &amp; Good
          </span>
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
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            {pick(lang, navCta)}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-zinc-900 px-5 py-2.5 text-center text-sm font-medium text-white"
              >
                {pick(lang, navCta)}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
