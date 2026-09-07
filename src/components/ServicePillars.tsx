import { motion } from "framer-motion";
import { servicePillars } from "../data/content";

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

export default function ServicePillars() {
  return (
    <section id="services" className="bg-zinc-50 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeApple }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            What We Do
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            Five pillars of data operations.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-zinc-500">
            One accountable partner spanning the full lifecycle — from raw
            data to AI-ready, governed output.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 transition-colors duration-300 group-hover:bg-accent-50">
                  <Icon
                    className="h-5 w-5 text-zinc-700 transition-colors duration-300 group-hover:text-accent-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
