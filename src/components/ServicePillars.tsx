import { motion } from "framer-motion";
import { servicePillars, servicePillarsHeader } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import {
  containerVariants,
  headerVariants,
  itemVariants,
  viewportOnce,
} from "../lib/motion";

export default function ServicePillars() {
  const { lang } = useLanguage();

  return (
    <section id="services" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {pick(lang, servicePillarsHeader.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            {pick(lang, servicePillarsHeader.heading)}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            {pick(lang, servicePillarsHeader.description)}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition-[border-color,box-shadow] duration-300 hover:border-zinc-300 hover:shadow-md"
              >
                {/* Image — only for pillars that have one */}
                {pillar.image ? (
                  <div className="aspect-video overflow-hidden bg-zinc-100">
                    <img
                      src={pillar.image}
                      alt={pick(lang, pillar.title)}
                      width={1600}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : (
                  /* Pillar 5: no image — use a subtle gradient placeholder */
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-50 flex items-center justify-center">
                    <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                      <Icon className="h-8 w-8 text-accent-500" strokeWidth={1.5} />
                    </div>
                  </div>
                )}

                {/* Card body */}
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 transition-colors duration-300 group-hover:bg-accent-50">
                    <Icon
                      className="h-4 w-4 text-zinc-700 transition-colors duration-300 group-hover:text-accent-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {pick(lang, pillar.title)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">
                    {pick(lang, pillar.description)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
