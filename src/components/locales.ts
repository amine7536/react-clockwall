/**
 * Locale mappings for date-fns
 * Maps ISO language codes to date-fns locale objects
 */
import { Locale } from 'date-fns';
import { enUS } from 'date-fns/locale/en-US';
import { fr } from 'date-fns/locale/fr';
import { de } from 'date-fns/locale/de';
import { es } from 'date-fns/locale/es';
import { it } from 'date-fns/locale/it';
import { pt } from 'date-fns/locale/pt';
import { ru } from 'date-fns/locale/ru';
import { ja } from 'date-fns/locale/ja';
import { zhCN } from 'date-fns/locale/zh-CN';
import { ar } from 'date-fns/locale/ar';
import { nl } from 'date-fns/locale/nl';
import { pl } from 'date-fns/locale/pl';
import { tr } from 'date-fns/locale/tr';
import { ko } from 'date-fns/locale/ko';
import { sv } from 'date-fns/locale/sv';
import { da } from 'date-fns/locale/da';
import { nb } from 'date-fns/locale/nb';
import { fi } from 'date-fns/locale/fi';
import { cs } from 'date-fns/locale/cs';
import { el } from 'date-fns/locale/el';
import { he } from 'date-fns/locale/he';
import { hi } from 'date-fns/locale/hi';
import { hu } from 'date-fns/locale/hu';
import { id } from 'date-fns/locale/id';
import { ro } from 'date-fns/locale/ro';
import { th } from 'date-fns/locale/th';
import { uk } from 'date-fns/locale/uk';
import { vi } from 'date-fns/locale/vi';

/**
 * Map of locale codes to date-fns locale objects
 * Add more locales as needed
 */
const localeMap: Record<string, Locale> = {
  en: enUS,
  'en-US': enUS,
  'en-us': enUS,
  fr: fr,
  'fr-FR': fr,
  de: de,
  'de-DE': de,
  es: es,
  'es-ES': es,
  it: it,
  'it-IT': it,
  pt: pt,
  'pt-PT': pt,
  'pt-BR': pt,
  ru: ru,
  'ru-RU': ru,
  ja: ja,
  'ja-JP': ja,
  zh: zhCN,
  'zh-CN': zhCN,
  'zh-cn': zhCN,
  ar: ar,
  'ar-SA': ar,
  nl: nl,
  'nl-NL': nl,
  pl: pl,
  'pl-PL': pl,
  tr: tr,
  'tr-TR': tr,
  ko: ko,
  'ko-KR': ko,
  sv: sv,
  'sv-SE': sv,
  da: da,
  'da-DK': da,
  nb: nb,
  'nb-NO': nb,
  fi: fi,
  'fi-FI': fi,
  cs: cs,
  'cs-CZ': cs,
  el: el,
  'el-GR': el,
  he: he,
  'he-IL': he,
  hi: hi,
  'hi-IN': hi,
  hu: hu,
  'hu-HU': hu,
  id: id,
  'id-ID': id,
  ro: ro,
  'ro-RO': ro,
  th: th,
  'th-TH': th,
  uk: uk,
  'uk-UA': uk,
  vi: vi,
  'vi-VN': vi,
};

/**
 * Get date-fns locale object from ISO language code
 * Falls back to English (enUS) if locale not found
 */
export function getLocale(localeCode: string): Locale {
  return localeMap[localeCode] || localeMap[localeCode.toLowerCase()] || enUS;
}
