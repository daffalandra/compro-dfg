import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const easeApple = [0.16, 1, 0.3, 1] as const;

const headlineWords = ["Fine", "in", "detail."];
const headlineWords2 = ["Good", "in", "use."];

function AnimatedHeadline() {
  let delay = 0;
  return (
    <h1 className="text-6xl font-semibold tracking-tighter text-zinc-900 sm:text-7xl md:text-8xl">
      <span className="block">
        {headlineWords.map((word) => {
          const d = delay;
          delay += 0.08;
          return (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: d, ease: easeApple }}
              className="mr-4 inline-block last:mr-0"
            >
              {word}
            </motion.span>
          );
        })}
      </span>
      <span className="block">
        {headlineWords2.map((word, i) => {
          const d = delay;
          delay += 0.08;
          const isAccent = i === 0;
          return (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: d, ease: easeApple }}
              className={`mr-4 inline-block last:mr-0 ${
                isAccent ? "text-accent-600" : ""
              }`}
            >
              {word}
            </motion.span>
          );
        })}
      </span>
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-16"
    >
      {/* subtle radial mesh behind headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent-100/60 via-transparent to-transparent blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeApple }}
        className="relative z-10 mb-8 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-xs text-zinc-500"
      >
        AI Data Operations · Southeast Asia
      </motion.div>

      <div className="relative z-10 max-w-4xl text-center">
        <AnimatedHeadline />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: easeApple }}
          className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-500"
        >
          DFG engineers the human judgment and delivery infrastructure that
          turns raw, inconsistent data into production-ready assets for AI
          systems across Southeast Asia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: easeApple }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white transition-transform duration-200 hover:scale-[1.02] hover:bg-zinc-800"
          >
            Request Pilot Sprint
          </a>
          <a
            href="#capabilities"
            className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
          >
            Explore Capabilities
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-10 z-10"
        aria-hidden
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-zinc-300" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
