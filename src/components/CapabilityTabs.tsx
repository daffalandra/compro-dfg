import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useRef, useState, type KeyboardEvent } from "react";
import { capabilitiesHeader, capabilityTabs } from "../data/content";
import { pick, useLanguage } from "../i18n/LanguageContext";
import { easeApple, headerVariants, viewportOnce } from "../lib/motion";

export default function CapabilityTabs() {
  const { lang } = useLanguage();
  const [activeId, setActiveId] = useState(capabilityTabs[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeIndex = capabilityTabs.findIndex((tab) => tab.id === activeId);
  const activeTab = capabilityTabs[activeIndex] ?? capabilityTabs[0];

  const focusTab = (index: number) => {
    const tab = capabilityTabs[index];
    if (!tab) return;
    setActiveId(tab.id);
    tabRefs.current[tab.id]?.focus();
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    const lastIndex = capabilityTabs.length - 1;
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTab(index === lastIndex ? 0 : index + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTab(index === 0 ? lastIndex : index - 1);
        break;
      case "Home":
        event.preventDefault();
        focusTab(0);
        break;
      case "End":
        event.preventDefault();
        focusTab(lastIndex);
        break;
      default:
        break;
    }
  };

  return (
    <section
      id="capabilities"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            {pick(lang, capabilitiesHeader.eyebrow)}
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            {pick(lang, capabilitiesHeader.heading)}
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div
          role="tablist"
          aria-label={pick(lang, capabilitiesHeader.eyebrow)}
          className="mb-12 flex flex-wrap gap-2 border-b border-zinc-800 pb-1"
        >
          {capabilityTabs.map((tab, index) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                ref={(el) => {
                  tabRefs.current[tab.id] = el;
                }}
                type="button"
                role="tab"
                id={`capability-tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="capability-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`relative cursor-pointer rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-capability-pill"
                    className="absolute inset-0 rounded-full bg-zinc-800 ring-1 ring-inset ring-white/10"
                    transition={{ duration: 0.35, ease: easeApple }}
                  />
                )}
                <span className="relative z-10">{pick(lang, tab.label)}</span>
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          role="tabpanel"
          id="capability-panel"
          aria-labelledby={`capability-tab-${activeTab.id}`}
          tabIndex={0}
          className="grid grid-cols-1 gap-10 focus:outline-none md:grid-cols-2 md:gap-16"
        >
          {/* Left: feature list */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab.id}-${lang}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: easeApple }}
            >
              <h3 className="mb-6 text-2xl font-semibold tracking-tight text-white">
                {pick(lang, activeTab.heading)}
              </h3>
              <ul className="space-y-4">
                {activeTab.items.map((item) => (
                  <li key={pick(lang, item)} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm leading-relaxed text-zinc-300">
                      {pick(lang, item)}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          {/* Right: real capability image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab.id}-visual`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35, ease: easeApple }}
              className="overflow-hidden rounded-3xl border border-zinc-800"
            >
              <img
                src={activeTab.image}
                alt={pick(lang, activeTab.label)}
                width={1600}
                height={1200}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
