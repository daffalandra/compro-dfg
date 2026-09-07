import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "id";

const STORAGE_KEY = "dfg-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "id") return stored;

  const browserLang = window.navigator.language?.toLowerCase() ?? "";
  if (browserLang.startsWith("id")) return "id";

  return "en";
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang());

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === "en" ? "id" : "en"));

  const value = useMemo(
    () => ({ lang, setLang, toggleLang }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

/** Helper type for bilingual string fields. */
export type Bilingual = { en: string; id: string };

/** Resolve a bilingual field against the current language. */
export function pick(lang: Lang, field: Bilingual): string {
  return field[lang];
}
