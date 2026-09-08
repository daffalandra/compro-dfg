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
    <h1 className="text-5xl font-semibold tracking-tighter text-zinc-900 sm:text-6xl md:text-7xl lg:text-8xl">
      <span className="block">
        {line1.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: wordDelay(i), ease: easeApple }}
            className="mr-3 inline-block last:mr-0 md:mr-4"
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
              className={`mr-3 inline-block last:mr-0 md:mr-4 ${
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

  /* Parallax layers */
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const meshY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-screen overflow-hidden bg-white pt-16"
    >
      {/* Background mesh gradient */}
      <motion.div
        aria-hidden
        style={{ y: meshY }}
        className="pointer-events-none absolute -top-20 left-0 h-[50rem] w-[50rem] rounded-full bg-gradient-to-br from-accent-100/50 via-transparent to-transparent blur-3xl"
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col items-center px-6 lg:flex-row lg:gap-12 lg:py-20">

        {/* ── Left: copy ── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 flex flex-1 flex-col items-center pt-20 text-center lg:items-start lg:pt-0 lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeApple }}
            className="mb-6 inline-flex items-center rounded-full border border-zinc-200 px-4 py-1 text-xs text-zinc-500"
          >
            {pick(lang, hero.badge)}
          </motion.div>

          <AnimatedHeadline
            line1={hero.headlineLine1[lang]}
            line2={hero.headlineLine2[lang]}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: easeApple }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-500"
          >
            {pick(lang, hero.subhead)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: easeApple }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
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
        </motion.div>

        {/* ── Right: hero image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: easeApple }}
          style={{ y: imageY }}
          className="relative z-10 mt-12 w-full flex-1 lg:mt-0"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
            <img
              src={hero.image}
              alt="DFG data operations team at work"
              loading="eager"
              className="h-full w-full object-cover"
            />
            {/* subtle vignette overlay */}
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
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
