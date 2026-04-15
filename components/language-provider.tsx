"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { translations, type Locale } from "@/lib/i18n/translations";

// DeepWriteable recursively removes `readonly` modifiers so that both locale
// objects (which have distinct string-literal types via `as const`) can be
// assigned to the same context type.
type DeepMutable<T> = T extends readonly (infer U)[]
  ? DeepMutable<U>[]
  : T extends object
  ? { -readonly [K in keyof T]: DeepMutable<T[K]> }
  : T extends string
  ? string
  : T;

type TranslationsShape = DeepMutable<typeof translations.en>;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationsShape;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en as unknown as TranslationsShape,
});

const STORAGE_KEY = "chiarm-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // Hydrate from localStorage on mount (after SSR)
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored === "cs" || stored === "en") setLocaleState(stored);
    } catch {}
  }, []);

  function setLocale(l: Locale) {
    setLocaleState(l);
    try { localStorage.setItem(STORAGE_KEY, l); } catch {}
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as unknown as TranslationsShape }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
