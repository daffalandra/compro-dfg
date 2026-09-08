import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaBanner } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";

const easeApple = [0.16, 1, 0.3, 1] as const;

export default function CtaBanner() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden px-6 py-32 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={ctaBanner.image}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: easeApple }}
        >
          <span className="inline-block rounded-full border border-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/70">
            {pick(lang, ctaBanner.eyebrow)}
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
            {pick(lang, ctaBanner.heading)}
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            {pick(lang, ctaBanner.subhead)}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: easeApple }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 shadow-lg hover:bg-zinc-100"
            >
              {pick(lang, ctaBanner.cta)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
