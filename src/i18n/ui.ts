export const locales = {
  he: { label: "עברית", dir: "rtl", hreflang: "he-IL" },
  en: { label: "English", dir: "ltr", hreflang: "en-US" },
} as const;

export type Locale = keyof typeof locales;
export const defaultLocale: Locale = "he";

export const ui = {
  he: {
    "lang.switch": "שפה",
  },
  en: {
    "lang.switch": "Language",
  },
} satisfies Record<Locale, Record<string, string>>;

export type UIKey = keyof (typeof ui)["he"];

export function getLocale(current: string | undefined): Locale {
  return current && current in locales ? (current as Locale) : defaultLocale;
}

export function useTranslations(locale: Locale) {
  return (key: UIKey) => ui[locale][key] ?? ui[defaultLocale][key];
}

export function stripLocale(pathname: string) {
  const [, first, ...rest] = pathname.split("/");
  return first in locales ? `/${rest.join("/")}` : pathname;
}
