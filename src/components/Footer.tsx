import { AtSign, Mail, MapPin, Share2 } from "lucide-react";
import { footer, navLinks } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-black px-6 pb-10 pt-20 text-zinc-400">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 border-b border-zinc-800 pb-12 md:grid-cols-2">
          <div>
            <span className="text-xl font-semibold tracking-tight text-white">
              DFG
            </span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              {pick(lang, footer.blurb)}
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:hello@datafineandgood.com"
                className="flex items-center gap-2.5 text-zinc-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                hello@datafineandgood.com
              </a>
              <div className="flex items-center gap-2.5 text-zinc-500">
                <MapPin className="h-4 w-4" strokeWidth={1.5} />
                {pick(lang, footer.location)}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                <Share2 className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href="#"
                aria-label="X (Twitter)"
                className="text-zinc-500 transition-colors hover:text-white"
              >
                <AtSign className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:justify-items-end">
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                {pick(lang, footer.navigateHeading)}
              </h4>
              <ul className="space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {pick(lang, link.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
                {pick(lang, footer.companyHeading)}
              </h4>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#top"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {pick(lang, footer.about)}
                  </a>
                </li>
                <li>
                  <a
                    href="#engagement"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {pick(lang, footer.pricing)}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {pick(lang, footer.contact)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            &copy; {year} DFG (Data Fine &amp; Good). {pick(lang, footer.rights)}
          </p>
          <p className="text-xs text-zinc-600">Fine in detail, Good in use.</p>
        </div>
      </div>
    </footer>
  );
}
