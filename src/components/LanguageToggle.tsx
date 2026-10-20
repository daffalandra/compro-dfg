import { motion } from "framer-motion";
import { useLanguage, type Lang } from "../i18n/LanguageContext";
import { easeApple } from "../lib/motion";

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
];

interface LanguageToggleProps {
  layoutId?: string;
}

export default function LanguageToggle({
  layoutId = "active-lang-pill",
}: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className="relative inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-0.5 text-xs font-medium"
    >
      {options.map((option) => {
        const isActive = option.value === lang;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            onClick={() => setLang(option.value)}
            className={`relative z-10 rounded-full px-3 py-1.5 transition-colors duration-200 ${
              isActive ? "text-white" : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 -z-10 rounded-full bg-zinc-900"
                transition={{ duration: 0.3, ease: easeApple }}
              />
            )}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
