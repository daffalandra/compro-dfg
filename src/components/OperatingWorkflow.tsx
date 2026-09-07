import { motion } from "framer-motion";
import { workflowSteps } from "../data/content";

const easeApple = [0.16, 1, 0.3, 1] as const;

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeApple },
  },
};

export default function OperatingWorkflow() {
  return (
    <section id="workflow" className="bg-white px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeApple }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-600">
            How We Operate
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
            A disciplined six-step workflow.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6"
        >
          {/* connecting line - desktop only */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 hidden h-px w-full bg-zinc-200 lg:block"
          />

          {workflowSteps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white text-sm font-semibold text-zinc-400">
                {step.number}
              </div>
              <h3 className="text-base font-semibold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
