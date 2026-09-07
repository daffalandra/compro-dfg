import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { engagementModels } from "../data/content";

const easeApple = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeApple },
  },
};

export default function EngagementModels() {
  return (
    <section id="engagement" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeApple }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            Engagement
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Structured to match your scale.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {engagementModels.map((model) => (
            <motion.div
              key={model.title}
              variants={itemVariants}
              className={`flex flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] ${
                model.emphasized
                  ? "border-zinc-900"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              {model.tag && (
                <span className="mb-4 inline-block w-fit rounded-full bg-accent-50 px-3 py-1 text-xs font-medium text-accent-600">
                  {model.tag}
                </span>
              )}
              <h3 className="text-lg font-semibold text-zinc-900">
                {model.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-zinc-400">
                {model.volume}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-500">
                {model.description}
              </p>

              <ul className="mt-6 flex-1 space-y-3">
                {model.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-zinc-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm leading-relaxed text-zinc-600">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900"
              >
                Learn more
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
