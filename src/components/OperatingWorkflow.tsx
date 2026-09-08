import { motion } from "framer-motion";
import { workflowBg, workflowHeader, workflowSteps } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";

const easeApple = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeApple },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1.1, ease: easeApple, delay: 0.1 },
  },
};

export default function OperatingWorkflow() {
  const { lang } = useLanguage();

  return (
    <section id="workflow" className="relative overflow-hidden px-6 py-32 md:py-40">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={workflowBg}
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {/* Overlay: strong white wash to keep text crisp */}
        <div className="absolute inset-0 bg-white/88" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: easeApple }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            {pick(lang, workflowHeader.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            {pick(lang, workflowHeader.heading)}
          </h2>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6"
        >
          {/* Animated connecting line — desktop only */}
          <motion.div
            variants={lineVariants}
            style={{ transformOrigin: "left" }}
            aria-hidden
            className="pointer-events-none absolute top-6 hidden h-px w-full bg-zinc-300 lg:block"
          />

          {workflowSteps.map((step) => (
            <motion.div
              key={pick(lang, step.title)}
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white/90 text-sm font-semibold text-zinc-400 shadow-sm backdrop-blur-sm">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-zinc-900">
                {pick(lang, step.title)}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">
                {pick(lang, step.description)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
