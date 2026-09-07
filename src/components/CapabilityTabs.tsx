import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { capabilityTabs } from "../data/content";

const easeApple = [0.16, 1, 0.3, 1] as const;

export default function CapabilityTabs() {
  const [activeId, setActiveId] = useState(capabilityTabs[0].id);
  const activeTab =
    capabilityTabs.find((tab) => tab.id === activeId) ?? capabilityTabs[0];

  return (
    <section
      id="capabilities"
      className="bg-black px-6 py-32 text-white md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: easeApple }}
          className="mb-16 max-w-2xl"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-400">
            Capabilities
          </span>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
            Full-spectrum multimodal coverage.
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="mb-12 flex flex-wrap gap-2 border-b border-zinc-800 pb-1">
          {capabilityTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveId(tab.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-capability-pill"
                    className="absolute inset-0 rounded-full bg-zinc-800"
                    transition={{ duration: 0.35, ease: easeApple }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: easeApple }}
            >
              <h3 className="mb-6 text-2xl font-semibold tracking-tight text-white">
                {activeTab.heading}
              </h3>
              <ul className="space-y-4">
                {activeTab.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-400"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm leading-relaxed text-zinc-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeTab.id}-visual`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: easeApple }}
              className="flex aspect-[4/3] items-center justify-center rounded-3xl border border-zinc-800 bg-zinc-900"
              aria-hidden
            >
              <span className="text-xs uppercase tracking-widest text-zinc-600">
                {activeTab.label}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
