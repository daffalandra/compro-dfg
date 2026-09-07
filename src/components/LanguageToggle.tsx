import { motion } from "framer-motion";
import { useLanguage, type Lang } from "../i18n/LanguageContext";

const easeApple = [0.16, 1, 0.3, 1] as const;

const options: { value: Lang; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "id", label: "ID" },
];

interface LanguageToggleProps {
  layoutId?: string;
  variant?: "light" | "dark";
}

export default function LanguageToggle({
  layoutId = "active-lang-pill",
  variant = "light",
}: LanguageToggleProps) {
  const { lang, setLang } = useLanguage();

  const isDark = variant === "dark";

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`relative inline-flex items-center rounded-full border p-0.5 text-xs font-medium ${
        isDark
          ? "border-zinc-700 bg-zinc-900"
          : "border-zinc-200 bg-zinc-100"
      }`}
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
              isActive
                ? isDark
                  ? "text-black"
                  : "text-white"
                : isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-500 hover:text-zinc-800"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className={`absolute inset-0 -z-10 rounded-full ${
                  isDark ? "bg-white" : "bg-zinc-900"
                }`}
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
