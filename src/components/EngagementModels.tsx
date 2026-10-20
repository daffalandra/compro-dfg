import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { engagementHeader, engagementModels } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import {
  containerVariants,
  headerVariants,
  itemVariants,
  viewportOnce,
} from "../lib/motion";

export default function EngagementModels() {
  const { lang } = useLanguage();

  return (
    <section id="engagement" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {pick(lang, engagementHeader.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            {pick(lang, engagementHeader.heading)}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {engagementModels.map((model) => (
            <motion.div
              key={model.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`flex flex-col rounded-2xl border p-8 transition-[border-color,box-shadow] duration-300 ${
                model.emphasized
                  ? "border-zinc-900 bg-zinc-900 text-white shadow-lg"
                  : "border-zinc-200 bg-white shadow-sm hover:border-zinc-300 hover:shadow-md"
              }`}
            >
              {model.tag && (
                <span
                  className={`mb-4 inline-block w-fit rounded-full px-3 py-1 text-xs font-medium ${
                    model.emphasized
                      ? "bg-white/10 text-white"
                      : "bg-accent-50 text-accent-600"
                  }`}
                >
                  {pick(lang, model.tag)}
                </span>
              )}
              <h3
                className={`text-lg font-semibold ${
                  model.emphasized ? "text-white" : "text-zinc-900"
                }`}
              >
                {pick(lang, model.title)}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                {pick(lang, model.volume)}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  model.emphasized ? "text-zinc-300" : "text-zinc-500"
                }`}
              >
                {pick(lang, model.description)}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {model.features.map((feature) => (
                  <li
                    key={pick(lang, feature)}
                    className="flex items-start gap-2.5"
                  >
                    <Check
                      className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                        model.emphasized ? "text-zinc-500" : "text-zinc-400"
                      }`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`text-sm leading-relaxed ${
                        model.emphasized ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {pick(lang, feature)}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`group mt-8 inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium ${
                  model.emphasized ? "text-white" : "text-zinc-900"
                }`}
              >
                {pick(lang, engagementHeader.learnMore)}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
