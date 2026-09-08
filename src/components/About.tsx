import { motion } from "framer-motion";
import { about } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";

const easeApple = [0.16, 1, 0.3, 1] as const;

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="bg-white px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -32, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: easeApple }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
              {pick(lang, about.eyebrow)}
            </span>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              {pick(lang, about.heading)}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-500">
              {pick(lang, about.description)}
            </p>

            {/* Stats row */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-100 pt-8">
              {[about.stat1, about.stat2, about.stat3].map((stat) => (
                <div key={stat.value}>
                  <p className="text-3xl font-semibold tracking-tight text-zinc-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-zinc-500">
                    {pick(lang, stat.label)}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: about image */}
          <motion.div
            initial={{ opacity: 0, x: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.85, ease: easeApple, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.10)]">
              <img
                src={about.image}
                alt="DFG team at work"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
            </div>
            {/* Decorative accent blob */}
            <div
              aria-hidden
              className="absolute -bottom-8 -right-8 -z-10 h-64 w-64 rounded-full bg-accent-100/60 blur-3xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
