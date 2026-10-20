import { motion } from "framer-motion";
import { regionalOpsHeader, regionalOpsImages } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import {
  containerVariants,
  headerVariants,
  itemVariants,
  viewportOnce,
} from "../lib/motion";

export default function RegionalOperations() {
  const { lang } = useLanguage();

  return (
    <section id="regional-operations" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {pick(lang, regionalOpsHeader.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            {pick(lang, regionalOpsHeader.heading)}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            {pick(lang, regionalOpsHeader.description)}
          </p>
        </motion.div>

        {/* 2×2 image grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {regionalOpsImages.map((img) => (
            <motion.div
              key={img.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="group relative overflow-hidden rounded-3xl bg-zinc-200 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={pick(lang, img.caption)}
                  width={1448}
                  height={1086}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                <p className="text-sm font-medium text-white">
                  {pick(lang, img.caption)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
