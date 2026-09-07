import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useRef } from "react";
import { hero } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";

const easeApple = [0.16, 1, 0.3, 1] as const;

function AnimatedHeadline({
  line1,
  line2,
}: {
  line1: string[];
  line2: string[];
}) {
  const wordDelay = (index: number) => index * 0.08;
  const line2Offset = line1.length;

  return (
    <h1 className="text-6xl font-semibold tracking-tighter text-zinc-900 sm:text-7xl md:text-8xl">
      <span className="block">
        {line1.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: wordDelay(i), ease: easeApple }}
            className="mr-4 inline-block last:mr-0"
          >
            {word}
          </motion.span>
        ))}
      </span>
      <span className="block">
        {line2.map((word, i) => {
          const isAccent = i === 0;
          return (
            <motion.span
              key={`${word}-${i}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: wordDelay(line2Offset + i),
                ease: easeApple,
              }}
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
  const { lang } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Background mesh drifts slower than content (parallax depth)
  const meshY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const meshScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-white px-6 pt-16"
    >
      {/* subtle radial mesh behind headline, parallax-driven */}
      <motion.div
        aria-hidden
        style={{ y: meshY, scale: meshScale }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-accent-100/60 via-transparent to-transparent blur-3xl" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 flex w-full flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeApple }}
          className="mb-8 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-xs text-zinc-500"
        >
          {pick(lang, hero.badge)}
        </motion.div>

        <div className="max-w-4xl text-center">
          <AnimatedHeadline
            line1={hero.headlineLine1[lang]}
            line2={hero.headlineLine2[lang]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeApple }}
            className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-zinc-500"
          >
            {pick(lang, hero.subhead)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: easeApple }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="rounded-full bg-zinc-900 px-7 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              {pick(lang, hero.ctaPrimary)}
            </motion.a>
            <a
              href="#capabilities"
              className="group inline-flex items-center gap-1.5 px-2 py-3 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {pick(lang, hero.ctaSecondary)}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </motion.div>
        </div>
      </motion.div>

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
