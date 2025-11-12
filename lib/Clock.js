import { jsxs as k, jsx as y } from "react/jsx-runtime";
import { useMemo as Oe, useState as Ge, useEffect as Ie } from "react";
import { TZDate as Qe } from "@date-fns/tz";
import { format as N, getDate as Ye, getMonth as Re, getYear as _e, getHours as Je, getMinutes as Ke, getSeconds as Be } from "date-fns";
const Ze = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, Ue = (e, a, t) => {
  let n;
  const i = Ze[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : n + " ago" : n;
};
function s(e) {
  return (a = {}) => {
    const t = a.width ? String(a.width) : e.defaultWidth;
    return e.formats[t] || e.formats[e.defaultWidth];
  };
}
const et = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, tt = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, at = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nt = {
  date: s({
    formats: et,
    defaultWidth: "full"
  }),
  time: s({
    formats: tt,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: at,
    defaultWidth: "full"
  })
}, it = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, rt = (e, a, t, n) => it[e];
function r(e) {
  return (a, t) => {
    const n = t != null && t.context ? String(t.context) : "standalone";
    let i;
    if (n === "formatting" && e.formattingValues) {
      const d = e.defaultFormattingWidth || e.defaultWidth, l = t != null && t.width ? String(t.width) : d;
      i = e.formattingValues[l] || e.formattingValues[d];
    } else {
      const d = e.defaultWidth, l = t != null && t.width ? String(t.width) : e.defaultWidth;
      i = e.values[l] || e.values[d];
    }
    const m = e.argumentCallback ? e.argumentCallback(a) : a;
    return i[m];
  };
}
const ot = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, st = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, dt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, ut = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, mt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, lt = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, ct = (e, a) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
        return t + "st";
      case 2:
        return t + "nd";
      case 3:
        return t + "rd";
    }
  return t + "th";
}, ht = {
  ordinalNumber: ct,
  era: r({
    values: ot,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: st,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: dt,
    defaultWidth: "wide"
  }),
  day: r({
    values: ut,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: mt,
    defaultWidth: "wide",
    formattingValues: lt,
    defaultFormattingWidth: "wide"
  })
};
function o(e) {
  return (a, t = {}) => {
    const n = t.width, i = n && e.matchPatterns[n] || e.matchPatterns[e.defaultMatchWidth], m = a.match(i);
    if (!m)
      return null;
    const d = m[0], l = n && e.parsePatterns[n] || e.parsePatterns[e.defaultParseWidth], g = Array.isArray(l) ? gt(l, (P) => P.test(d)) : (
      // [TODO] -- I challenge you to fix the type
      ft(l, (P) => P.test(d))
    );
    let f;
    f = e.valueCallback ? e.valueCallback(g) : g, f = t.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      t.valueCallback(f)
    ) : f;
    const v = a.slice(d.length);
    return { value: f, rest: v };
  };
}
function ft(e, a) {
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t) && a(e[t]))
      return t;
}
function gt(e, a) {
  for (let t = 0; t < e.length; t++)
    if (a(e[t]))
      return t;
}
function u(e) {
  return (a, t = {}) => {
    const n = a.match(e.matchPattern);
    if (!n) return null;
    const i = n[0], m = a.match(e.parsePattern);
    if (!m) return null;
    let d = e.valueCallback ? e.valueCallback(m[0]) : m[0];
    d = t.valueCallback ? t.valueCallback(d) : d;
    const l = a.slice(i.length);
    return { value: d, rest: l };
  };
}
const pt = /^(\d+)(th|st|nd|rd)?/i, vt = /\d+/i, bt = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, wt = {
  any: [/^b/i, /^(a|c)/i]
}, yt = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Pt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Mt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, $t = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Wt = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, zt = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, jt = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, Dt = {
  ordinalNumber: u({
    matchPattern: pt,
    parsePattern: vt,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: bt,
    defaultMatchWidth: "wide",
    parsePatterns: wt,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: yt,
    defaultMatchWidth: "wide",
    parsePatterns: Pt,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: kt,
    defaultMatchWidth: "wide",
    parsePatterns: Mt,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: $t,
    defaultMatchWidth: "wide",
    parsePatterns: Wt,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: zt,
    defaultMatchWidth: "any",
    parsePatterns: jt,
    defaultParseWidth: "any"
  })
}, z = {
  code: "en-US",
  formatDistance: Ue,
  formatLong: nt,
  formatRelative: rt,
  localize: ht,
  match: Dt,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, xt = {
  lessThanXSeconds: {
    one: "moins d’une seconde",
    other: "moins de {{count}} secondes"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} secondes"
  },
  halfAMinute: "30 secondes",
  lessThanXMinutes: {
    one: "moins d’une minute",
    other: "moins de {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "environ 1 heure",
    other: "environ {{count}} heures"
  },
  xHours: {
    one: "1 heure",
    other: "{{count}} heures"
  },
  xDays: {
    one: "1 jour",
    other: "{{count}} jours"
  },
  aboutXWeeks: {
    one: "environ 1 semaine",
    other: "environ {{count}} semaines"
  },
  xWeeks: {
    one: "1 semaine",
    other: "{{count}} semaines"
  },
  aboutXMonths: {
    one: "environ 1 mois",
    other: "environ {{count}} mois"
  },
  xMonths: {
    one: "1 mois",
    other: "{{count}} mois"
  },
  aboutXYears: {
    one: "environ 1 an",
    other: "environ {{count}} ans"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ans"
  },
  overXYears: {
    one: "plus d’un an",
    other: "plus de {{count}} ans"
  },
  almostXYears: {
    one: "presqu’un an",
    other: "presque {{count}} ans"
  }
}, Nt = (e, a, t) => {
  let n;
  const i = xt[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "dans " + n : "il y a " + n : n;
}, Tt = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, St = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Vt = {
  full: "{{date}} 'à' {{time}}",
  long: "{{date}} 'à' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ct = {
  date: s({
    formats: Tt,
    defaultWidth: "full"
  }),
  time: s({
    formats: St,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Vt,
    defaultWidth: "full"
  })
}, Ht = {
  lastWeek: "eeee 'dernier à' p",
  yesterday: "'hier à' p",
  today: "'aujourd’hui à' p",
  tomorrow: "'demain à' p'",
  nextWeek: "eeee 'prochain à' p",
  other: "P"
}, Xt = (e, a, t, n) => Ht[e], Et = {
  narrow: ["av. J.-C", "ap. J.-C"],
  abbreviated: ["av. J.-C", "ap. J.-C"],
  wide: ["avant Jésus-Christ", "après Jésus-Christ"]
}, Ft = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1er trim.", "2ème trim.", "3ème trim.", "4ème trim."],
  wide: ["1er trimestre", "2ème trimestre", "3ème trimestre", "4ème trimestre"]
}, qt = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "janv.",
    "févr.",
    "mars",
    "avr.",
    "mai",
    "juin",
    "juil.",
    "août",
    "sept.",
    "oct.",
    "nov.",
    "déc."
  ],
  wide: [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre"
  ]
}, Lt = {
  narrow: ["D", "L", "M", "M", "J", "V", "S"],
  short: ["di", "lu", "ma", "me", "je", "ve", "sa"],
  abbreviated: ["dim.", "lun.", "mar.", "mer.", "jeu.", "ven.", "sam."],
  wide: [
    "dimanche",
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi",
    "samedi"
  ]
}, At = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "mat.",
    afternoon: "ap.m.",
    evening: "soir",
    night: "mat."
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "matin",
    afternoon: "après-midi",
    evening: "soir",
    night: "matin"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "minuit",
    noon: "midi",
    morning: "du matin",
    afternoon: "de l’après-midi",
    evening: "du soir",
    night: "du matin"
  }
}, Ot = (e, a) => {
  const t = Number(e), n = a == null ? void 0 : a.unit;
  if (t === 0) return "0";
  const i = ["year", "week", "hour", "minute", "second"];
  let m;
  return t === 1 ? m = n && i.includes(n) ? "ère" : "er" : m = "ème", t + m;
}, Gt = ["MMM", "MMMM"], It = {
  preprocessor: (e, a) => e.getDate() === 1 || !a.some(
    (n) => n.isToken && Gt.includes(n.value)
  ) ? a : a.map(
    (n) => n.isToken && n.value === "do" ? { isToken: !0, value: "d" } : n
  ),
  ordinalNumber: Ot,
  era: r({
    values: Et,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Ft,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: qt,
    defaultWidth: "wide"
  }),
  day: r({
    values: Lt,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: At,
    defaultWidth: "wide"
  })
}, Qt = /^(\d+)(ième|ère|ème|er|e)?/i, Yt = /\d+/i, Rt = {
  narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
  abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
  wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
}, _t = {
  any: [/^av/i, /^ap/i]
}, Jt = {
  narrow: /^T?[1234]/i,
  abbreviated: /^[1234](er|ème|e)? trim\.?/i,
  wide: /^[1234](er|ème|e)? trimestre/i
}, Kt = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Bt = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
  wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
}, Zt = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^av/i,
    /^ma/i,
    /^juin/i,
    /^juil/i,
    /^ao/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Ut = {
  narrow: /^[lmjvsd]/i,
  short: /^(di|lu|ma|me|je|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
  wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
}, ea = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
}, ta = {
  narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
  any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
}, aa = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^min/i,
    noon: /^mid/i,
    morning: /mat/i,
    afternoon: /ap/i,
    evening: /soir/i,
    night: /nuit/i
  }
}, na = {
  ordinalNumber: u({
    matchPattern: Qt,
    parsePattern: Yt,
    valueCallback: (e) => parseInt(e)
  }),
  era: o({
    matchPatterns: Rt,
    defaultMatchWidth: "wide",
    parsePatterns: _t,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Jt,
    defaultMatchWidth: "wide",
    parsePatterns: Kt,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Bt,
    defaultMatchWidth: "wide",
    parsePatterns: Zt,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Ut,
    defaultMatchWidth: "wide",
    parsePatterns: ea,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: ta,
    defaultMatchWidth: "any",
    parsePatterns: aa,
    defaultParseWidth: "any"
  })
}, G = {
  code: "fr",
  formatDistance: Nt,
  formatLong: Ct,
  formatRelative: Xt,
  localize: It,
  match: na,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, I = {
  lessThanXSeconds: {
    standalone: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    },
    withPreposition: {
      one: "weniger als 1 Sekunde",
      other: "weniger als {{count}} Sekunden"
    }
  },
  xSeconds: {
    standalone: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    },
    withPreposition: {
      one: "1 Sekunde",
      other: "{{count}} Sekunden"
    }
  },
  halfAMinute: {
    standalone: "eine halbe Minute",
    withPreposition: "einer halben Minute"
  },
  lessThanXMinutes: {
    standalone: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    },
    withPreposition: {
      one: "weniger als 1 Minute",
      other: "weniger als {{count}} Minuten"
    }
  },
  xMinutes: {
    standalone: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    },
    withPreposition: {
      one: "1 Minute",
      other: "{{count}} Minuten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    },
    withPreposition: {
      one: "etwa 1 Stunde",
      other: "etwa {{count}} Stunden"
    }
  },
  xHours: {
    standalone: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    },
    withPreposition: {
      one: "1 Stunde",
      other: "{{count}} Stunden"
    }
  },
  xDays: {
    standalone: {
      one: "1 Tag",
      other: "{{count}} Tage"
    },
    withPreposition: {
      one: "1 Tag",
      other: "{{count}} Tagen"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    },
    withPreposition: {
      one: "etwa 1 Woche",
      other: "etwa {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "1 Woche",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monate"
    },
    withPreposition: {
      one: "etwa 1 Monat",
      other: "etwa {{count}} Monaten"
    }
  },
  xMonths: {
    standalone: {
      one: "1 Monat",
      other: "{{count}} Monate"
    },
    withPreposition: {
      one: "1 Monat",
      other: "{{count}} Monaten"
    }
  },
  aboutXYears: {
    standalone: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahre"
    },
    withPreposition: {
      one: "etwa 1 Jahr",
      other: "etwa {{count}} Jahren"
    }
  },
  xYears: {
    standalone: {
      one: "1 Jahr",
      other: "{{count}} Jahre"
    },
    withPreposition: {
      one: "1 Jahr",
      other: "{{count}} Jahren"
    }
  },
  overXYears: {
    standalone: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahre"
    },
    withPreposition: {
      one: "mehr als 1 Jahr",
      other: "mehr als {{count}} Jahren"
    }
  },
  almostXYears: {
    standalone: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahre"
    },
    withPreposition: {
      one: "fast 1 Jahr",
      other: "fast {{count}} Jahren"
    }
  }
}, ia = (e, a, t) => {
  let n;
  const i = t != null && t.addSuffix ? I[e].withPreposition : I[e].standalone;
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "in " + n : "vor " + n : n;
}, ra = {
  full: "EEEE, do MMMM y",
  // Montag, 7. Januar 2018
  long: "do MMMM y",
  // 7. Januar 2018
  medium: "do MMM y",
  // 7. Jan. 2018
  short: "dd.MM.y"
  // 07.01.2018
}, oa = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, sa = {
  full: "{{date}} 'um' {{time}}",
  long: "{{date}} 'um' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, da = {
  date: s({
    formats: ra,
    defaultWidth: "full"
  }),
  time: s({
    formats: oa,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: sa,
    defaultWidth: "full"
  })
}, ua = {
  lastWeek: "'letzten' eeee 'um' p",
  yesterday: "'gestern um' p",
  today: "'heute um' p",
  tomorrow: "'morgen um' p",
  nextWeek: "eeee 'um' p",
  other: "P"
}, ma = (e, a, t, n) => ua[e], la = {
  narrow: ["v.Chr.", "n.Chr."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["vor Christus", "nach Christus"]
}, ca = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. Quartal", "2. Quartal", "3. Quartal", "4. Quartal"]
}, C = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez"
  ],
  wide: [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
  ]
}, ha = {
  narrow: C.narrow,
  abbreviated: [
    "Jan.",
    "Feb.",
    "März",
    "Apr.",
    "Mai",
    "Juni",
    "Juli",
    "Aug.",
    "Sep.",
    "Okt.",
    "Nov.",
    "Dez."
  ],
  wide: C.wide
}, fa = {
  narrow: ["S", "M", "D", "M", "D", "F", "S"],
  short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
  abbreviated: ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."],
  wide: [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
  ]
}, ga = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachm.",
    evening: "Abend",
    night: "Nacht"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "Morgen",
    afternoon: "Nachmittag",
    evening: "Abend",
    night: "Nacht"
  }
}, pa = {
  narrow: {
    am: "vm.",
    pm: "nm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachm.",
    evening: "abends",
    night: "nachts"
  },
  abbreviated: {
    am: "vorm.",
    pm: "nachm.",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  },
  wide: {
    am: "vormittags",
    pm: "nachmittags",
    midnight: "Mitternacht",
    noon: "Mittag",
    morning: "morgens",
    afternoon: "nachmittags",
    evening: "abends",
    night: "nachts"
  }
}, va = (e) => Number(e) + ".", ba = {
  ordinalNumber: va,
  era: r({
    values: la,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: ca,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: C,
    formattingValues: ha,
    defaultWidth: "wide"
  }),
  day: r({
    values: fa,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: ga,
    defaultWidth: "wide",
    formattingValues: pa,
    defaultFormattingWidth: "wide"
  })
}, wa = /^(\d+)(\.)?/i, ya = /\d+/i, Pa = {
  narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
  wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
}, ka = {
  any: [/^v/i, /^n/i]
}, Ma = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? Quartal/i
}, $a = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Wa = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(j[aä]n|feb|mär[z]?|apr|mai|jun[i]?|jul[i]?|aug|sep|okt|nov|dez)\.?/i,
  wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
}, za = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^j[aä]/i,
    /^f/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ja = {
  narrow: /^[smdmf]/i,
  short: /^(so|mo|di|mi|do|fr|sa)/i,
  abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
  wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
}, Da = {
  any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
}, xa = {
  narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
  wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
}, Na = {
  any: {
    am: /^v/i,
    pm: /^n/i,
    midnight: /^Mitte/i,
    noon: /^Mitta/i,
    morning: /morgens/i,
    afternoon: /nachmittags/i,
    // will never be matched. Afternoon is matched by `pm`
    evening: /abends/i,
    night: /nachts/i
    // will never be matched. Night is matched by `pm`
  }
}, Ta = {
  ordinalNumber: u({
    matchPattern: wa,
    parsePattern: ya,
    valueCallback: (e) => parseInt(e)
  }),
  era: o({
    matchPatterns: Pa,
    defaultMatchWidth: "wide",
    parsePatterns: ka,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Ma,
    defaultMatchWidth: "wide",
    parsePatterns: $a,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Wa,
    defaultMatchWidth: "wide",
    parsePatterns: za,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: ja,
    defaultMatchWidth: "wide",
    parsePatterns: Da,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: xa,
    defaultMatchWidth: "wide",
    parsePatterns: Na,
    defaultParseWidth: "any"
  })
}, Q = {
  code: "de",
  formatDistance: ia,
  formatLong: da,
  formatRelative: ma,
  localize: ba,
  match: Ta,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Sa = {
  lessThanXSeconds: {
    one: "menos de un segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos de un minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "alrededor de 1 hora",
    other: "alrededor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "alrededor de 1 semana",
    other: "alrededor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "alrededor de 1 mes",
    other: "alrededor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "alrededor de 1 año",
    other: "alrededor de {{count}} años"
  },
  xYears: {
    one: "1 año",
    other: "{{count}} años"
  },
  overXYears: {
    one: "más de 1 año",
    other: "más de {{count}} años"
  },
  almostXYears: {
    one: "casi 1 año",
    other: "casi {{count}} años"
  }
}, Va = (e, a, t) => {
  let n;
  const i = Sa[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "en " + n : "hace " + n : n;
}, Ca = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, Ha = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Xa = {
  full: "{{date}} 'a las' {{time}}",
  long: "{{date}} 'a las' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ea = {
  date: s({
    formats: Ca,
    defaultWidth: "full"
  }),
  time: s({
    formats: Ha,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Xa,
    defaultWidth: "full"
  })
}, Fa = {
  lastWeek: "'el' eeee 'pasado a la' p",
  yesterday: "'ayer a la' p",
  today: "'hoy a la' p",
  tomorrow: "'mañana a la' p",
  nextWeek: "eeee 'a la' p",
  other: "P"
}, qa = {
  lastWeek: "'el' eeee 'pasado a las' p",
  yesterday: "'ayer a las' p",
  today: "'hoy a las' p",
  tomorrow: "'mañana a las' p",
  nextWeek: "eeee 'a las' p",
  other: "P"
}, La = (e, a, t, n) => a.getHours() !== 1 ? qa[e] : Fa[e], Aa = {
  narrow: ["AC", "DC"],
  abbreviated: ["AC", "DC"],
  wide: ["antes de cristo", "después de cristo"]
}, Oa = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Ga = {
  narrow: ["e", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic"
  ],
  wide: [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
  ]
}, Ia = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["do", "lu", "ma", "mi", "ju", "vi", "sá"],
  abbreviated: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
  wide: [
    "domingo",
    "lunes",
    "martes",
    "miércoles",
    "jueves",
    "viernes",
    "sábado"
  ]
}, Qa = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "mañana",
    afternoon: "tarde",
    evening: "tarde",
    night: "noche"
  }
}, Ya = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "md",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "medianoche",
    noon: "mediodia",
    morning: "de la mañana",
    afternoon: "de la tarde",
    evening: "de la tarde",
    night: "de la noche"
  }
}, Ra = (e, a) => Number(e) + "º", _a = {
  ordinalNumber: Ra,
  era: r({
    values: Aa,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Oa,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: r({
    values: Ga,
    defaultWidth: "wide"
  }),
  day: r({
    values: Ia,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Qa,
    defaultWidth: "wide",
    formattingValues: Ya,
    defaultFormattingWidth: "wide"
  })
}, Ja = /^(\d+)(º)?/i, Ka = /\d+/i, Ba = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes de la era com[uú]n|despu[eé]s de cristo|era com[uú]n)/i
}, Za = {
  any: [/^ac/i, /^dc/i],
  wide: [
    /^(antes de cristo|antes de la era com[uú]n)/i,
    /^(despu[eé]s de cristo|era com[uú]n)/i
  ]
}, Ua = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, en = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tn = {
  narrow: /^[efmajsond]/i,
  abbreviated: /^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,
  wide: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i
}, an = {
  narrow: [
    /^e/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^en/i,
    /^feb/i,
    /^mar/i,
    /^abr/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^ago/i,
    /^sep/i,
    /^oct/i,
    /^nov/i,
    /^dic/i
  ]
}, nn = {
  narrow: /^[dlmjvs]/i,
  short: /^(do|lu|ma|mi|ju|vi|s[áa])/i,
  abbreviated: /^(dom|lun|mar|mi[ée]|jue|vie|s[áa]b)/i,
  wide: /^(domingo|lunes|martes|mi[ée]rcoles|jueves|viernes|s[áa]bado)/i
}, rn = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^do/i, /^lu/i, /^ma/i, /^mi/i, /^ju/i, /^vi/i, /^sa/i]
}, on = {
  narrow: /^(a|p|mn|md|(de la|a las) (mañana|tarde|noche))/i,
  any: /^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (mañana|tarde|noche))/i
}, sn = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /^md/i,
    morning: /mañana/i,
    afternoon: /tarde/i,
    evening: /tarde/i,
    night: /noche/i
  }
}, dn = {
  ordinalNumber: u({
    matchPattern: Ja,
    parsePattern: Ka,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: o({
    matchPatterns: Ba,
    defaultMatchWidth: "wide",
    parsePatterns: Za,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Ua,
    defaultMatchWidth: "wide",
    parsePatterns: en,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: tn,
    defaultMatchWidth: "wide",
    parsePatterns: an,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: nn,
    defaultMatchWidth: "wide",
    parsePatterns: rn,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: on,
    defaultMatchWidth: "any",
    parsePatterns: sn,
    defaultParseWidth: "any"
  })
}, Y = {
  code: "es",
  formatDistance: Va,
  formatLong: Ea,
  formatRelative: La,
  localize: _a,
  match: dn,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, un = {
  lessThanXSeconds: {
    one: "meno di un secondo",
    other: "meno di {{count}} secondi"
  },
  xSeconds: {
    one: "un secondo",
    other: "{{count}} secondi"
  },
  halfAMinute: "alcuni secondi",
  lessThanXMinutes: {
    one: "meno di un minuto",
    other: "meno di {{count}} minuti"
  },
  xMinutes: {
    one: "un minuto",
    other: "{{count}} minuti"
  },
  aboutXHours: {
    one: "circa un'ora",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "un'ora",
    other: "{{count}} ore"
  },
  xDays: {
    one: "un giorno",
    other: "{{count}} giorni"
  },
  aboutXWeeks: {
    one: "circa una settimana",
    other: "circa {{count}} settimane"
  },
  xWeeks: {
    one: "una settimana",
    other: "{{count}} settimane"
  },
  aboutXMonths: {
    one: "circa un mese",
    other: "circa {{count}} mesi"
  },
  xMonths: {
    one: "un mese",
    other: "{{count}} mesi"
  },
  aboutXYears: {
    one: "circa un anno",
    other: "circa {{count}} anni"
  },
  xYears: {
    one: "un anno",
    other: "{{count}} anni"
  },
  overXYears: {
    one: "più di un anno",
    other: "più di {{count}} anni"
  },
  almostXYears: {
    one: "quasi un anno",
    other: "quasi {{count}} anni"
  }
}, mn = (e, a, t) => {
  let n;
  const i = un[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "tra " + n : n + " fa" : n;
}, ln = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd/MM/y"
}, cn = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, hn = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, fn = {
  date: s({
    formats: ln,
    defaultWidth: "full"
  }),
  time: s({
    formats: cn,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: hn,
    defaultWidth: "full"
  })
}, R = Symbol.for("constructDateFrom");
function De(e, a) {
  return typeof e == "function" ? e(a) : e && typeof e == "object" && R in e ? e[R](a) : e instanceof Date ? new e.constructor(a) : new Date(a);
}
function gn(e, ...a) {
  const t = De.bind(
    null,
    e || a.find((n) => typeof n == "object")
  );
  return a.map(t);
}
let pn = {};
function vn() {
  return pn;
}
function X(e, a) {
  return De(a || e, e);
}
function _(e, a) {
  var l, g, f, v;
  const t = vn(), n = (a == null ? void 0 : a.weekStartsOn) ?? ((g = (l = a == null ? void 0 : a.locale) == null ? void 0 : l.options) == null ? void 0 : g.weekStartsOn) ?? t.weekStartsOn ?? ((v = (f = t.locale) == null ? void 0 : f.options) == null ? void 0 : v.weekStartsOn) ?? 0, i = X(e, a == null ? void 0 : a.in), m = i.getDay(), d = (m < n ? 7 : 0) + m - n;
  return i.setDate(i.getDate() - d), i.setHours(0, 0, 0, 0), i;
}
function b(e, a, t) {
  const [n, i] = gn(
    t == null ? void 0 : t.in,
    e,
    a
  );
  return +_(n, t) == +_(i, t);
}
const E = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function bn(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + E[e] + " scorso alle' p";
  }
}
function J(e) {
  return "'" + E[e] + " alle' p";
}
function wn(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + E[e] + " prossimo alle' p";
  }
}
const yn = {
  lastWeek: (e, a, t) => {
    const n = e.getDay();
    return b(e, a, t) ? J(n) : bn(n);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, a, t) => {
    const n = e.getDay();
    return b(e, a, t) ? J(n) : wn(n);
  },
  other: "P"
}, Pn = (e, a, t, n) => {
  const i = yn[e];
  return typeof i == "function" ? i(a, t, n) : i;
}, kn = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["avanti Cristo", "dopo Cristo"]
}, Mn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, $n = {
  narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
    "gen",
    "feb",
    "mar",
    "apr",
    "mag",
    "giu",
    "lug",
    "ago",
    "set",
    "ott",
    "nov",
    "dic"
  ],
  wide: [
    "gennaio",
    "febbraio",
    "marzo",
    "aprile",
    "maggio",
    "giugno",
    "luglio",
    "agosto",
    "settembre",
    "ottobre",
    "novembre",
    "dicembre"
  ]
}, Wn = {
  narrow: ["D", "L", "M", "M", "G", "V", "S"],
  short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
  wide: [
    "domenica",
    "lunedì",
    "martedì",
    "mercoledì",
    "giovedì",
    "venerdì",
    "sabato"
  ]
}, zn = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "mattina",
    afternoon: "pomeriggio",
    evening: "sera",
    night: "notte"
  }
}, jn = {
  narrow: {
    am: "m.",
    pm: "p.",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "mezzanotte",
    noon: "mezzogiorno",
    morning: "di mattina",
    afternoon: "del pomeriggio",
    evening: "di sera",
    night: "di notte"
  }
}, Dn = (e, a) => {
  const t = Number(e);
  return String(t);
}, xn = {
  ordinalNumber: Dn,
  era: r({
    values: kn,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Mn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: $n,
    defaultWidth: "wide"
  }),
  day: r({
    values: Wn,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: zn,
    defaultWidth: "wide",
    formattingValues: jn,
    defaultFormattingWidth: "wide"
  })
}, Nn = /^(\d+)(º)?/i, Tn = /\d+/i, Sn = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a\.?\s?C\.?|a\.?\s?e\.?\s?v\.?|d\.?\s?C\.?|e\.?\s?v\.?)/i,
  wide: /^(avanti Cristo|avanti Era Volgare|dopo Cristo|Era Volgare)/i
}, Vn = {
  any: [/^a/i, /^(d|e)/i]
}, Cn = {
  narrow: /^[1234]/i,
  abbreviated: /^t[1234]/i,
  wide: /^[1234](º)? trimestre/i
}, Hn = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Xn = {
  narrow: /^[gfmalsond]/i,
  abbreviated: /^(gen|feb|mar|apr|mag|giu|lug|ago|set|ott|nov|dic)/i,
  wide: /^(gennaio|febbraio|marzo|aprile|maggio|giugno|luglio|agosto|settembre|ottobre|novembre|dicembre)/i
}, En = {
  narrow: [
    /^g/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^g/i,
    /^l/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ge/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mag/i,
    /^gi/i,
    /^l/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Fn = {
  narrow: /^[dlmgvs]/i,
  short: /^(do|lu|ma|me|gi|ve|sa)/i,
  abbreviated: /^(dom|lun|mar|mer|gio|ven|sab)/i,
  wide: /^(domenica|luned[i|ì]|marted[i|ì]|mercoled[i|ì]|gioved[i|ì]|venerd[i|ì]|sabato)/i
}, qn = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^g/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^g/i, /^v/i, /^s/i]
}, Ln = {
  narrow: /^(a|m\.|p|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i,
  any: /^([ap]\.?\s?m\.?|mezzanotte|mezzogiorno|(di|del) (mattina|pomeriggio|sera|notte))/i
}, An = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mezza/i,
    noon: /^mezzo/i,
    morning: /mattina/i,
    afternoon: /pomeriggio/i,
    evening: /sera/i,
    night: /notte/i
  }
}, On = {
  ordinalNumber: u({
    matchPattern: Nn,
    parsePattern: Tn,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Sn,
    defaultMatchWidth: "wide",
    parsePatterns: Vn,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Cn,
    defaultMatchWidth: "wide",
    parsePatterns: Hn,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Xn,
    defaultMatchWidth: "wide",
    parsePatterns: En,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Fn,
    defaultMatchWidth: "wide",
    parsePatterns: qn,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Ln,
    defaultMatchWidth: "any",
    parsePatterns: An,
    defaultParseWidth: "any"
  })
}, K = {
  code: "it",
  formatDistance: mn,
  formatLong: fn,
  formatRelative: Pn,
  localize: xn,
  match: On,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Gn = {
  lessThanXSeconds: {
    one: "menos de um segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "meio minuto",
  lessThanXMinutes: {
    one: "menos de um minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "aproximadamente 1 hora",
    other: "aproximadamente {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 dia",
    other: "{{count}} dias"
  },
  aboutXWeeks: {
    one: "aproximadamente 1 semana",
    other: "aproximadamente {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "aproximadamente 1 mês",
    other: "aproximadamente {{count}} meses"
  },
  xMonths: {
    one: "1 mês",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "aproximadamente 1 ano",
    other: "aproximadamente {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "mais de 1 ano",
    other: "mais de {{count}} anos"
  },
  almostXYears: {
    one: "quase 1 ano",
    other: "quase {{count}} anos"
  }
}, In = (e, a, t) => {
  let n;
  const i = Gn[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "daqui a " + n : "há " + n : n;
}, Qn = {
  full: "EEEE, d 'de' MMMM 'de' y",
  long: "d 'de' MMMM 'de' y",
  medium: "d 'de' MMM 'de' y",
  short: "dd/MM/y"
}, Yn = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Rn = {
  full: "{{date}} 'às' {{time}}",
  long: "{{date}} 'às' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, _n = {
  date: s({
    formats: Qn,
    defaultWidth: "full"
  }),
  time: s({
    formats: Yn,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Rn,
    defaultWidth: "full"
  })
}, Jn = {
  lastWeek: (e) => {
    const a = e.getDay();
    return "'" + (a === 0 || a === 6 ? "último" : "última") + "' eeee 'às' p";
  },
  yesterday: "'ontem às' p",
  today: "'hoje às' p",
  tomorrow: "'amanhã às' p",
  nextWeek: "eeee 'às' p",
  other: "P"
}, Kn = (e, a, t, n) => {
  const i = Jn[e];
  return typeof i == "function" ? i(a) : i;
}, Bn = {
  narrow: ["aC", "dC"],
  abbreviated: ["a.C.", "d.C."],
  wide: ["antes de Cristo", "depois de Cristo"]
}, Zn = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"]
}, Un = {
  narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
  abbreviated: [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez"
  ],
  wide: [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
  ]
}, ei = {
  narrow: ["d", "s", "t", "q", "q", "s", "s"],
  short: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
  abbreviated: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
  wide: [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ]
}, ti = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "noite",
    night: "madrugada"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "noite",
    night: "madrugada"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "manhã",
    afternoon: "tarde",
    evening: "noite",
    night: "madrugada"
  }
}, ai = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da noite",
    night: "da madrugada"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da noite",
    night: "da madrugada"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "meia-noite",
    noon: "meio-dia",
    morning: "da manhã",
    afternoon: "da tarde",
    evening: "da noite",
    night: "da madrugada"
  }
}, ni = (e, a) => Number(e) + "º", ii = {
  ordinalNumber: ni,
  era: r({
    values: Bn,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Zn,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Un,
    defaultWidth: "wide"
  }),
  day: r({
    values: ei,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: ti,
    defaultWidth: "wide",
    formattingValues: ai,
    defaultFormattingWidth: "wide"
  })
}, ri = /^(\d+)(º|ª)?/i, oi = /\d+/i, si = {
  narrow: /^(ac|dc|a|d)/i,
  abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
  wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
}, di = {
  any: [/^ac/i, /^dc/i],
  wide: [
    /^(antes de cristo|antes da era comum)/i,
    /^(depois de cristo|era comum)/i
  ]
}, ui = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](º|ª)? trimestre/i
}, mi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, li = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
  wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
}, ci = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ab/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, hi = {
  narrow: /^[dstq]/i,
  short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
  wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
}, fi = {
  narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
  any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
}, gi = {
  narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
  any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
}, pi = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^meia/i,
    noon: /^meio/i,
    morning: /manh[ãa]/i,
    afternoon: /tarde/i,
    evening: /noite/i,
    night: /madrugada/i
  }
}, vi = {
  ordinalNumber: u({
    matchPattern: ri,
    parsePattern: oi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: si,
    defaultMatchWidth: "wide",
    parsePatterns: di,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: ui,
    defaultMatchWidth: "wide",
    parsePatterns: mi,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: li,
    defaultMatchWidth: "wide",
    parsePatterns: ci,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: hi,
    defaultMatchWidth: "wide",
    parsePatterns: fi,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: gi,
    defaultMatchWidth: "any",
    parsePatterns: pi,
    defaultParseWidth: "any"
  })
}, T = {
  code: "pt",
  formatDistance: In,
  formatLong: _n,
  formatRelative: Kn,
  localize: ii,
  match: vi,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function M(e, a) {
  if (e.one !== void 0 && a === 1)
    return e.one;
  const t = a % 10, n = a % 100;
  return t === 1 && n !== 11 ? e.singularNominative.replace("{{count}}", String(a)) : t >= 2 && t <= 4 && (n < 10 || n > 20) ? e.singularGenitive.replace("{{count}}", String(a)) : e.pluralGenitive.replace("{{count}}", String(a));
}
function c(e) {
  return (a, t) => t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? e.future ? M(e.future, a) : "через " + M(e.regular, a) : e.past ? M(e.past, a) : M(e.regular, a) + " назад" : M(e.regular, a);
}
const bi = {
  lessThanXSeconds: c({
    regular: {
      one: "меньше секунды",
      singularNominative: "меньше {{count}} секунды",
      singularGenitive: "меньше {{count}} секунд",
      pluralGenitive: "меньше {{count}} секунд"
    },
    future: {
      one: "меньше, чем через секунду",
      singularNominative: "меньше, чем через {{count}} секунду",
      singularGenitive: "меньше, чем через {{count}} секунды",
      pluralGenitive: "меньше, чем через {{count}} секунд"
    }
  }),
  xSeconds: c({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунды",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду назад",
      singularGenitive: "{{count}} секунды назад",
      pluralGenitive: "{{count}} секунд назад"
    },
    future: {
      singularNominative: "через {{count}} секунду",
      singularGenitive: "через {{count}} секунды",
      pluralGenitive: "через {{count}} секунд"
    }
  }),
  halfAMinute: (e, a) => a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "через полминуты" : "полминуты назад" : "полминуты",
  lessThanXMinutes: c({
    regular: {
      one: "меньше минуты",
      singularNominative: "меньше {{count}} минуты",
      singularGenitive: "меньше {{count}} минут",
      pluralGenitive: "меньше {{count}} минут"
    },
    future: {
      one: "меньше, чем через минуту",
      singularNominative: "меньше, чем через {{count}} минуту",
      singularGenitive: "меньше, чем через {{count}} минуты",
      pluralGenitive: "меньше, чем через {{count}} минут"
    }
  }),
  xMinutes: c({
    regular: {
      singularNominative: "{{count}} минута",
      singularGenitive: "{{count}} минуты",
      pluralGenitive: "{{count}} минут"
    },
    past: {
      singularNominative: "{{count}} минуту назад",
      singularGenitive: "{{count}} минуты назад",
      pluralGenitive: "{{count}} минут назад"
    },
    future: {
      singularNominative: "через {{count}} минуту",
      singularGenitive: "через {{count}} минуты",
      pluralGenitive: "через {{count}} минут"
    }
  }),
  aboutXHours: c({
    regular: {
      singularNominative: "около {{count}} часа",
      singularGenitive: "около {{count}} часов",
      pluralGenitive: "около {{count}} часов"
    },
    future: {
      singularNominative: "приблизительно через {{count}} час",
      singularGenitive: "приблизительно через {{count}} часа",
      pluralGenitive: "приблизительно через {{count}} часов"
    }
  }),
  xHours: c({
    regular: {
      singularNominative: "{{count}} час",
      singularGenitive: "{{count}} часа",
      pluralGenitive: "{{count}} часов"
    }
  }),
  xDays: c({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} дня",
      pluralGenitive: "{{count}} дней"
    }
  }),
  aboutXWeeks: c({
    regular: {
      singularNominative: "около {{count}} недели",
      singularGenitive: "около {{count}} недель",
      pluralGenitive: "около {{count}} недель"
    },
    future: {
      singularNominative: "приблизительно через {{count}} неделю",
      singularGenitive: "приблизительно через {{count}} недели",
      pluralGenitive: "приблизительно через {{count}} недель"
    }
  }),
  xWeeks: c({
    regular: {
      singularNominative: "{{count}} неделя",
      singularGenitive: "{{count}} недели",
      pluralGenitive: "{{count}} недель"
    }
  }),
  aboutXMonths: c({
    regular: {
      singularNominative: "около {{count}} месяца",
      singularGenitive: "около {{count}} месяцев",
      pluralGenitive: "около {{count}} месяцев"
    },
    future: {
      singularNominative: "приблизительно через {{count}} месяц",
      singularGenitive: "приблизительно через {{count}} месяца",
      pluralGenitive: "приблизительно через {{count}} месяцев"
    }
  }),
  xMonths: c({
    regular: {
      singularNominative: "{{count}} месяц",
      singularGenitive: "{{count}} месяца",
      pluralGenitive: "{{count}} месяцев"
    }
  }),
  aboutXYears: c({
    regular: {
      singularNominative: "около {{count}} года",
      singularGenitive: "около {{count}} лет",
      pluralGenitive: "около {{count}} лет"
    },
    future: {
      singularNominative: "приблизительно через {{count}} год",
      singularGenitive: "приблизительно через {{count}} года",
      pluralGenitive: "приблизительно через {{count}} лет"
    }
  }),
  xYears: c({
    regular: {
      singularNominative: "{{count}} год",
      singularGenitive: "{{count}} года",
      pluralGenitive: "{{count}} лет"
    }
  }),
  overXYears: c({
    regular: {
      singularNominative: "больше {{count}} года",
      singularGenitive: "больше {{count}} лет",
      pluralGenitive: "больше {{count}} лет"
    },
    future: {
      singularNominative: "больше, чем через {{count}} год",
      singularGenitive: "больше, чем через {{count}} года",
      pluralGenitive: "больше, чем через {{count}} лет"
    }
  }),
  almostXYears: c({
    regular: {
      singularNominative: "почти {{count}} год",
      singularGenitive: "почти {{count}} года",
      pluralGenitive: "почти {{count}} лет"
    },
    future: {
      singularNominative: "почти через {{count}} год",
      singularGenitive: "почти через {{count}} года",
      pluralGenitive: "почти через {{count}} лет"
    }
  })
}, wi = (e, a, t) => bi[e](a, t), yi = {
  full: "EEEE, d MMMM y 'г.'",
  long: "d MMMM y 'г.'",
  medium: "d MMM y 'г.'",
  short: "dd.MM.y"
}, Pi = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, ki = {
  any: "{{date}}, {{time}}"
}, Mi = {
  date: s({
    formats: yi,
    defaultWidth: "full"
  }),
  time: s({
    formats: Pi,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: ki,
    defaultWidth: "any"
  })
}, F = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среду",
  "четверг",
  "пятницу",
  "субботу"
];
function $i(e) {
  const a = F[e];
  switch (e) {
    case 0:
      return "'в прошлое " + a + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в прошлый " + a + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в прошлую " + a + " в' p";
  }
}
function B(e) {
  const a = F[e];
  return e === 2 ? "'во " + a + " в' p" : "'в " + a + " в' p";
}
function Wi(e) {
  const a = F[e];
  switch (e) {
    case 0:
      return "'в следующее " + a + " в' p";
    case 1:
    case 2:
    case 4:
      return "'в следующий " + a + " в' p";
    case 3:
    case 5:
    case 6:
      return "'в следующую " + a + " в' p";
  }
}
const zi = {
  lastWeek: (e, a, t) => {
    const n = e.getDay();
    return b(e, a, t) ? B(n) : $i(n);
  },
  yesterday: "'вчера в' p",
  today: "'сегодня в' p",
  tomorrow: "'завтра в' p",
  nextWeek: (e, a, t) => {
    const n = e.getDay();
    return b(e, a, t) ? B(n) : Wi(n);
  },
  other: "P"
}, ji = (e, a, t, n) => {
  const i = zi[e];
  return typeof i == "function" ? i(a, t, n) : i;
}, Di = {
  narrow: ["до н.э.", "н.э."],
  abbreviated: ["до н. э.", "н. э."],
  wide: ["до нашей эры", "нашей эры"]
}, xi = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, Ni = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ]
}, Ti = {
  narrow: ["Я", "Ф", "М", "А", "М", "И", "И", "А", "С", "О", "Н", "Д"],
  abbreviated: [
    "янв.",
    "фев.",
    "мар.",
    "апр.",
    "мая",
    "июн.",
    "июл.",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
  ],
  wide: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ]
}, Si = {
  narrow: ["В", "П", "В", "С", "Ч", "П", "С"],
  short: ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["вск", "пнд", "втр", "срд", "чтв", "птн", "суб"],
  wide: [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ]
}, Vi = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утро",
    afternoon: "день",
    evening: "веч.",
    night: "ночь"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утро",
    afternoon: "день",
    evening: "вечер",
    night: "ночь"
  }
}, Ci = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "полн.",
    noon: "полд.",
    morning: "утра",
    afternoon: "дня",
    evening: "веч.",
    night: "ночи"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "полночь",
    noon: "полдень",
    morning: "утра",
    afternoon: "дня",
    evening: "вечера",
    night: "ночи"
  }
}, Hi = (e, a) => {
  const t = Number(e), n = a == null ? void 0 : a.unit;
  let i;
  return n === "date" ? i = "-е" : n === "week" || n === "minute" || n === "second" ? i = "-я" : i = "-й", t + i;
}, Xi = {
  ordinalNumber: Hi,
  era: r({
    values: Di,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: xi,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Ni,
    defaultWidth: "wide",
    formattingValues: Ti,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: Si,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Vi,
    defaultWidth: "any",
    formattingValues: Ci,
    defaultFormattingWidth: "wide"
  })
}, Ei = /^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i, Fi = /\d+/i, qi = {
  narrow: /^((до )?н\.?\s?э\.?)/i,
  abbreviated: /^((до )?н\.?\s?э\.?)/i,
  wide: /^(до нашей эры|нашей эры|наша эра)/i
}, Li = {
  any: [/^д/i, /^н/i]
}, Ai = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыои]?й?)? кв.?/i,
  wide: /^[1234](-?[ыои]?й?)? квартал/i
}, Oi = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Gi = {
  narrow: /^[яфмаисонд]/i,
  abbreviated: /^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,
  wide: /^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i
}, Ii = {
  narrow: [
    /^я/i,
    /^ф/i,
    /^м/i,
    /^а/i,
    /^м/i,
    /^и/i,
    /^и/i,
    /^а/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^я/i
  ],
  any: [
    /^я/i,
    /^ф/i,
    /^мар/i,
    /^ап/i,
    /^ма[йя]/i,
    /^июн/i,
    /^июл/i,
    /^ав/i,
    /^с/i,
    /^о/i,
    /^н/i,
    /^д/i
  ]
}, Qi = {
  narrow: /^[впсч]/i,
  short: /^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,
  abbreviated: /^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,
  wide: /^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i
}, Yi = {
  narrow: [/^в/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^в[ос]/i, /^п[он]/i, /^в/i, /^ср/i, /^ч/i, /^п[ят]/i, /^с[уб]/i]
}, Ri = {
  narrow: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  abbreviated: /^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,
  wide: /^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i
}, _i = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^полн/i,
    noon: /^полд/i,
    morning: /^у/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, Ji = {
  ordinalNumber: u({
    matchPattern: Ei,
    parsePattern: Fi,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: qi,
    defaultMatchWidth: "wide",
    parsePatterns: Li,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Ai,
    defaultMatchWidth: "wide",
    parsePatterns: Oi,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Gi,
    defaultMatchWidth: "wide",
    parsePatterns: Ii,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Qi,
    defaultMatchWidth: "wide",
    parsePatterns: Yi,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Ri,
    defaultMatchWidth: "wide",
    parsePatterns: _i,
    defaultParseWidth: "any"
  })
}, Z = {
  code: "ru",
  formatDistance: wi,
  formatLong: Mi,
  formatRelative: ji,
  localize: Xi,
  match: Ji,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, Ki = {
  lessThanXSeconds: {
    one: "1秒未満",
    other: "{{count}}秒未満",
    oneWithSuffix: "約1秒",
    otherWithSuffix: "約{{count}}秒"
  },
  xSeconds: {
    one: "1秒",
    other: "{{count}}秒"
  },
  halfAMinute: "30秒",
  lessThanXMinutes: {
    one: "1分未満",
    other: "{{count}}分未満",
    oneWithSuffix: "約1分",
    otherWithSuffix: "約{{count}}分"
  },
  xMinutes: {
    one: "1分",
    other: "{{count}}分"
  },
  aboutXHours: {
    one: "約1時間",
    other: "約{{count}}時間"
  },
  xHours: {
    one: "1時間",
    other: "{{count}}時間"
  },
  xDays: {
    one: "1日",
    other: "{{count}}日"
  },
  aboutXWeeks: {
    one: "約1週間",
    other: "約{{count}}週間"
  },
  xWeeks: {
    one: "1週間",
    other: "{{count}}週間"
  },
  aboutXMonths: {
    one: "約1か月",
    other: "約{{count}}か月"
  },
  xMonths: {
    one: "1か月",
    other: "{{count}}か月"
  },
  aboutXYears: {
    one: "約1年",
    other: "約{{count}}年"
  },
  xYears: {
    one: "1年",
    other: "{{count}}年"
  },
  overXYears: {
    one: "1年以上",
    other: "{{count}}年以上"
  },
  almostXYears: {
    one: "1年近く",
    other: "{{count}}年近く"
  }
}, Bi = (e, a, t) => {
  t = t || {};
  let n;
  const i = Ki[e];
  return typeof i == "string" ? n = i : a === 1 ? t.addSuffix && i.oneWithSuffix ? n = i.oneWithSuffix : n = i.one : t.addSuffix && i.otherWithSuffix ? n = i.otherWithSuffix.replace("{{count}}", String(a)) : n = i.other.replace("{{count}}", String(a)), t.addSuffix ? t.comparison && t.comparison > 0 ? n + "後" : n + "前" : n;
}, Zi = {
  full: "y年M月d日EEEE",
  long: "y年M月d日",
  medium: "y/MM/dd",
  short: "y/MM/dd"
}, Ui = {
  full: "H時mm分ss秒 zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, er = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, tr = {
  date: s({
    formats: Zi,
    defaultWidth: "full"
  }),
  time: s({
    formats: Ui,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: er,
    defaultWidth: "full"
  })
}, ar = {
  lastWeek: "先週のeeeeのp",
  yesterday: "昨日のp",
  today: "今日のp",
  tomorrow: "明日のp",
  nextWeek: "翌週のeeeeのp",
  other: "P"
}, nr = (e, a, t, n) => ar[e], ir = {
  narrow: ["BC", "AC"],
  abbreviated: ["紀元前", "西暦"],
  wide: ["紀元前", "西暦"]
}, rr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["第1四半期", "第2四半期", "第3四半期", "第4四半期"]
}, or = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ]
}, sr = {
  narrow: ["日", "月", "火", "水", "木", "金", "土"],
  short: ["日", "月", "火", "水", "木", "金", "土"],
  abbreviated: ["日", "月", "火", "水", "木", "金", "土"],
  wide: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
}, dr = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, ur = {
  narrow: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  abbreviated: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  },
  wide: {
    am: "午前",
    pm: "午後",
    midnight: "深夜",
    noon: "正午",
    morning: "朝",
    afternoon: "午後",
    evening: "夜",
    night: "深夜"
  }
}, mr = (e, a) => {
  const t = Number(e);
  switch (String(a == null ? void 0 : a.unit)) {
    case "year":
      return `${t}年`;
    case "quarter":
      return `第${t}四半期`;
    case "month":
      return `${t}月`;
    case "week":
      return `第${t}週`;
    case "date":
      return `${t}日`;
    case "hour":
      return `${t}時`;
    case "minute":
      return `${t}分`;
    case "second":
      return `${t}秒`;
    default:
      return `${t}`;
  }
}, lr = {
  ordinalNumber: mr,
  era: r({
    values: ir,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: rr,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: r({
    values: or,
    defaultWidth: "wide"
  }),
  day: r({
    values: sr,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: dr,
    defaultWidth: "wide",
    formattingValues: ur,
    defaultFormattingWidth: "wide"
  })
}, cr = /^第?\d+(年|四半期|月|週|日|時|分|秒)?/i, hr = /\d+/i, fr = {
  narrow: /^(B\.?C\.?|A\.?D\.?)/i,
  abbreviated: /^(紀元[前後]|西暦)/i,
  wide: /^(紀元[前後]|西暦)/i
}, gr = {
  narrow: [/^B/i, /^A/i],
  any: [/^(紀元前)/i, /^(西暦|紀元後)/i]
}, pr = {
  narrow: /^[1234]/i,
  abbreviated: /^Q[1234]/i,
  wide: /^第[1234一二三四１２３４]四半期/i
}, vr = {
  any: [/(1|一|１)/i, /(2|二|２)/i, /(3|三|３)/i, /(4|四|４)/i]
}, br = {
  narrow: /^([123456789]|1[012])/,
  abbreviated: /^([123456789]|1[012])月/i,
  wide: /^([123456789]|1[012])月/i
}, wr = {
  any: [
    /^1\D/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, yr = {
  narrow: /^[日月火水木金土]/,
  short: /^[日月火水木金土]/,
  abbreviated: /^[日月火水木金土]/,
  wide: /^[日月火水木金土]曜日/
}, Pr = {
  any: [/^日/, /^月/, /^火/, /^水/, /^木/, /^金/, /^土/]
}, kr = {
  any: /^(AM|PM|午前|午後|正午|深夜|真夜中|夜|朝)/i
}, Mr = {
  any: {
    am: /^(A|午前)/i,
    pm: /^(P|午後)/i,
    midnight: /^深夜|真夜中/i,
    noon: /^正午/i,
    morning: /^朝/i,
    afternoon: /^午後/i,
    evening: /^夜/i,
    night: /^深夜/i
  }
}, $r = {
  ordinalNumber: u({
    matchPattern: cr,
    parsePattern: hr,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: o({
    matchPatterns: fr,
    defaultMatchWidth: "wide",
    parsePatterns: gr,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: pr,
    defaultMatchWidth: "wide",
    parsePatterns: vr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: br,
    defaultMatchWidth: "wide",
    parsePatterns: wr,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: yr,
    defaultMatchWidth: "wide",
    parsePatterns: Pr,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: kr,
    defaultMatchWidth: "any",
    parsePatterns: Mr,
    defaultParseWidth: "any"
  })
}, U = {
  code: "ja",
  formatDistance: Bi,
  formatLong: tr,
  formatRelative: nr,
  localize: lr,
  match: $r,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Wr = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, zr = (e, a, t) => {
  let n;
  const i = Wr[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + "内" : n + "前" : n;
}, jr = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Dr = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, xr = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Nr = {
  date: s({
    formats: jr,
    defaultWidth: "full"
  }),
  time: s({
    formats: Dr,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: xr,
    defaultWidth: "full"
  })
};
function ee(e, a, t) {
  const n = "eeee p";
  return b(e, a, t) ? n : e.getTime() > a.getTime() ? "'下个'" + n : "'上个'" + n;
}
const Tr = {
  lastWeek: ee,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: ee,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Sr = (e, a, t, n) => {
  const i = Tr[e];
  return typeof i == "function" ? i(a, t, n) : i;
}, Vr = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Cr = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Hr = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, Xr = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Er = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, Fr = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, qr = (e, a) => {
  const t = Number(e);
  switch (a == null ? void 0 : a.unit) {
    case "date":
      return t.toString() + "日";
    case "hour":
      return t.toString() + "时";
    case "minute":
      return t.toString() + "分";
    case "second":
      return t.toString() + "秒";
    default:
      return "第 " + t.toString();
  }
}, Lr = {
  ordinalNumber: qr,
  era: r({
    values: Vr,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Cr,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Hr,
    defaultWidth: "wide"
  }),
  day: r({
    values: Xr,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Er,
    defaultWidth: "wide",
    formattingValues: Fr,
    defaultFormattingWidth: "wide"
  })
}, Ar = /^(第\s*)?\d+(日|时|分|秒)?/i, Or = /\d+/i, Gr = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Ir = {
  any: [/^(前)/i, /^(公元)/i]
}, Qr = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Yr = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Rr = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, _r = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
}, Jr = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Kr = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Br = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Zr = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, Ur = {
  ordinalNumber: u({
    matchPattern: Ar,
    parsePattern: Or,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Gr,
    defaultMatchWidth: "wide",
    parsePatterns: Ir,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Qr,
    defaultMatchWidth: "wide",
    parsePatterns: Yr,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Rr,
    defaultMatchWidth: "wide",
    parsePatterns: _r,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Jr,
    defaultMatchWidth: "wide",
    parsePatterns: Kr,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Br,
    defaultMatchWidth: "any",
    parsePatterns: Zr,
    defaultParseWidth: "any"
  })
}, S = {
  code: "zh-CN",
  formatDistance: zr,
  formatLong: Nr,
  formatRelative: Sr,
  localize: Lr,
  match: Ur,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, eo = {
  lessThanXSeconds: {
    one: "أقل من ثانية",
    two: "أقل من ثانيتين",
    threeToTen: "أقل من {{count}} ثواني",
    other: "أقل من {{count}} ثانية"
  },
  xSeconds: {
    one: "ثانية واحدة",
    two: "ثانيتان",
    threeToTen: "{{count}} ثواني",
    other: "{{count}} ثانية"
  },
  halfAMinute: "نصف دقيقة",
  lessThanXMinutes: {
    one: "أقل من دقيقة",
    two: "أقل من دقيقتين",
    threeToTen: "أقل من {{count}} دقائق",
    other: "أقل من {{count}} دقيقة"
  },
  xMinutes: {
    one: "دقيقة واحدة",
    two: "دقيقتان",
    threeToTen: "{{count}} دقائق",
    other: "{{count}} دقيقة"
  },
  aboutXHours: {
    one: "ساعة واحدة تقريباً",
    two: "ساعتين تقريبا",
    threeToTen: "{{count}} ساعات تقريباً",
    other: "{{count}} ساعة تقريباً"
  },
  xHours: {
    one: "ساعة واحدة",
    two: "ساعتان",
    threeToTen: "{{count}} ساعات",
    other: "{{count}} ساعة"
  },
  xDays: {
    one: "يوم واحد",
    two: "يومان",
    threeToTen: "{{count}} أيام",
    other: "{{count}} يوم"
  },
  aboutXWeeks: {
    one: "أسبوع واحد تقريبا",
    two: "أسبوعين تقريبا",
    threeToTen: "{{count}} أسابيع تقريبا",
    other: "{{count}} أسبوعا تقريبا"
  },
  xWeeks: {
    one: "أسبوع واحد",
    two: "أسبوعان",
    threeToTen: "{{count}} أسابيع",
    other: "{{count}} أسبوعا"
  },
  aboutXMonths: {
    one: "شهر واحد تقريباً",
    two: "شهرين تقريبا",
    threeToTen: "{{count}} أشهر تقريبا",
    other: "{{count}} شهرا تقريباً"
  },
  xMonths: {
    one: "شهر واحد",
    two: "شهران",
    threeToTen: "{{count}} أشهر",
    other: "{{count}} شهرا"
  },
  aboutXYears: {
    one: "سنة واحدة تقريباً",
    two: "سنتين تقريبا",
    threeToTen: "{{count}} سنوات تقريباً",
    other: "{{count}} سنة تقريباً"
  },
  xYears: {
    one: "سنة واحد",
    two: "سنتان",
    threeToTen: "{{count}} سنوات",
    other: "{{count}} سنة"
  },
  overXYears: {
    one: "أكثر من سنة",
    two: "أكثر من سنتين",
    threeToTen: "أكثر من {{count}} سنوات",
    other: "أكثر من {{count}} سنة"
  },
  almostXYears: {
    one: "ما يقارب سنة واحدة",
    two: "ما يقارب سنتين",
    threeToTen: "ما يقارب {{count}} سنوات",
    other: "ما يقارب {{count}} سنة"
  }
}, to = (e, a, t) => {
  const n = eo[e];
  let i;
  return typeof n == "string" ? i = n : a === 1 ? i = n.one : a === 2 ? i = n.two : a <= 10 ? i = n.threeToTen.replace("{{count}}", String(a)) : i = n.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "خلال " + i : "منذ " + i : i;
}, ao = {
  full: "EEEE، do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, no = {
  full: "HH:mm:ss",
  long: "HH:mm:ss",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, io = {
  full: "{{date}} 'عند الساعة' {{time}}",
  long: "{{date}} 'عند الساعة' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ro = {
  date: s({
    formats: ao,
    defaultWidth: "full"
  }),
  time: s({
    formats: no,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: io,
    defaultWidth: "full"
  })
}, oo = {
  lastWeek: "eeee 'الماضي عند الساعة' p",
  yesterday: "'الأمس عند الساعة' p",
  today: "'اليوم عند الساعة' p",
  tomorrow: "'غدا عند الساعة' p",
  nextWeek: "eeee 'القادم عند الساعة' p",
  other: "P"
}, so = (e) => oo[e], uo = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م.", "ب.م."],
  wide: ["قبل الميلاد", "بعد الميلاد"]
}, mo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ر1", "ر2", "ر3", "ر4"],
  wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"]
}, lo = {
  narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
  abbreviated: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ],
  wide: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر"
  ]
}, co = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  wide: [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت"
  ]
}, ho = {
  narrow: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  },
  wide: {
    am: "ص",
    pm: "م",
    morning: "الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "المساء",
    night: "الليل",
    midnight: "منتصف الليل"
  }
}, fo = {
  narrow: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  },
  wide: {
    am: "ص",
    pm: "م",
    morning: "في الصباح",
    noon: "الظهر",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
    midnight: "منتصف الليل"
  }
}, go = (e) => String(e), po = {
  ordinalNumber: go,
  era: r({
    values: uo,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: mo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: lo,
    defaultWidth: "wide"
  }),
  day: r({
    values: co,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: ho,
    defaultWidth: "wide",
    formattingValues: fo,
    defaultFormattingWidth: "wide"
  })
}, vo = /^(\d+)(th|st|nd|rd)?/i, bo = /\d+/i, wo = {
  narrow: /[قب]/,
  abbreviated: /[قب]\.م\./,
  wide: /(قبل|بعد) الميلاد/
}, yo = {
  any: [/قبل/, /بعد/]
}, Po = {
  narrow: /^[1234]/i,
  abbreviated: /ر[1234]/,
  wide: /الربع (الأول|الثاني|الثالث|الرابع)/
}, ko = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Mo = {
  narrow: /^[أيفمسند]/,
  abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
}, $o = {
  narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ي/i,
    /^ي/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^يناير/i,
    /^فبراير/i,
    /^مارس/i,
    /^أبريل/i,
    /^مايو/i,
    /^يونيو/i,
    /^يوليو/i,
    /^أغسطس/i,
    /^سبتمبر/i,
    /^أكتوبر/i,
    /^نوفمبر/i,
    /^ديسمبر/i
  ]
}, Wo = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
}, zo = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [
    /^الأحد/i,
    /^الاثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i
  ],
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
}, jo = {
  narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
  any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
}, Do = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /منتصف الليل/,
    noon: /الظهر/,
    afternoon: /بعد الظهر/,
    morning: /في الصباح/,
    evening: /في المساء/,
    night: /في الليل/
  }
}, xo = {
  ordinalNumber: u({
    matchPattern: vo,
    parsePattern: bo,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: wo,
    defaultMatchWidth: "wide",
    parsePatterns: yo,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Po,
    defaultMatchWidth: "wide",
    parsePatterns: ko,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Mo,
    defaultMatchWidth: "wide",
    parsePatterns: $o,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Wo,
    defaultMatchWidth: "wide",
    parsePatterns: zo,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: jo,
    defaultMatchWidth: "any",
    parsePatterns: Do,
    defaultParseWidth: "any"
  })
}, te = {
  code: "ar",
  formatDistance: to,
  formatLong: ro,
  formatRelative: so,
  localize: po,
  match: xo,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
}, No = {
  lessThanXSeconds: {
    one: "minder dan een seconde",
    other: "minder dan {{count}} seconden"
  },
  xSeconds: {
    one: "1 seconde",
    other: "{{count}} seconden"
  },
  halfAMinute: "een halve minuut",
  lessThanXMinutes: {
    one: "minder dan een minuut",
    other: "minder dan {{count}} minuten"
  },
  xMinutes: {
    one: "een minuut",
    other: "{{count}} minuten"
  },
  aboutXHours: {
    one: "ongeveer 1 uur",
    other: "ongeveer {{count}} uur"
  },
  xHours: {
    one: "1 uur",
    other: "{{count}} uur"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dagen"
  },
  aboutXWeeks: {
    one: "ongeveer 1 week",
    other: "ongeveer {{count}} weken"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weken"
  },
  aboutXMonths: {
    one: "ongeveer 1 maand",
    other: "ongeveer {{count}} maanden"
  },
  xMonths: {
    one: "1 maand",
    other: "{{count}} maanden"
  },
  aboutXYears: {
    one: "ongeveer 1 jaar",
    other: "ongeveer {{count}} jaar"
  },
  xYears: {
    one: "1 jaar",
    other: "{{count}} jaar"
  },
  overXYears: {
    one: "meer dan 1 jaar",
    other: "meer dan {{count}} jaar"
  },
  almostXYears: {
    one: "bijna 1 jaar",
    other: "bijna {{count}} jaar"
  }
}, To = (e, a, t) => {
  let n;
  const i = No[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "over " + n : n + " geleden" : n;
}, So = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd-MM-y"
}, Vo = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Co = {
  full: "{{date}} 'om' {{time}}",
  long: "{{date}} 'om' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Ho = {
  date: s({
    formats: So,
    defaultWidth: "full"
  }),
  time: s({
    formats: Vo,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Co,
    defaultWidth: "full"
  })
}, Xo = {
  lastWeek: "'afgelopen' eeee 'om' p",
  yesterday: "'gisteren om' p",
  today: "'vandaag om' p",
  tomorrow: "'morgen om' p",
  nextWeek: "eeee 'om' p",
  other: "P"
}, Eo = (e, a, t, n) => Xo[e], Fo = {
  narrow: ["v.C.", "n.C."],
  abbreviated: ["v.Chr.", "n.Chr."],
  wide: ["voor Christus", "na Christus"]
}, qo = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"]
}, Lo = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mrt.",
    "apr.",
    "mei",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januari",
    "februari",
    "maart",
    "april",
    "mei",
    "juni",
    "juli",
    "augustus",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, Ao = {
  narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
  short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
  abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
  wide: [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag"
  ]
}, Oo = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "middernacht",
    noon: "het middaguur",
    morning: "'s ochtends",
    afternoon: "'s middags",
    evening: "'s avonds",
    night: "'s nachts"
  }
}, Go = (e, a) => Number(e) + "e", Io = {
  ordinalNumber: Go,
  era: r({
    values: Fo,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: qo,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Lo,
    defaultWidth: "wide"
  }),
  day: r({
    values: Ao,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Oo,
    defaultWidth: "wide"
  })
}, Qo = /^(\d+)e?/i, Yo = /\d+/i, Ro = {
  narrow: /^([vn]\.? ?C\.?)/,
  abbreviated: /^([vn]\. ?Chr\.?)/,
  wide: /^((voor|na) Christus)/
}, _o = {
  any: [/^v/, /^n/]
}, Jo = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234]e kwartaal/i
}, Ko = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Bo = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mrt.|apr.|mei|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januari|februari|maart|april|mei|juni|juli|augustus|september|oktober|november|december)/i
}, Zo = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^jan/i,
    /^feb/i,
    /^m(r|a)/i,
    /^apr/i,
    /^mei/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^sep/i,
    /^okt/i,
    /^nov/i,
    /^dec/i
  ]
}, Uo = {
  narrow: /^[zmdwv]/i,
  short: /^(zo|ma|di|wo|do|vr|za)/i,
  abbreviated: /^(zon|maa|din|woe|don|vri|zat)/i,
  wide: /^(zondag|maandag|dinsdag|woensdag|donderdag|vrijdag|zaterdag)/i
}, es = {
  narrow: [/^z/i, /^m/i, /^d/i, /^w/i, /^d/i, /^v/i, /^z/i],
  any: [/^zo/i, /^ma/i, /^di/i, /^wo/i, /^do/i, /^vr/i, /^za/i]
}, ts = {
  any: /^(am|pm|middernacht|het middaguur|'s (ochtends|middags|avonds|nachts))/i
}, as = {
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /^middernacht/i,
    noon: /^het middaguur/i,
    morning: /ochtend/i,
    afternoon: /middag/i,
    evening: /avond/i,
    night: /nacht/i
  }
}, ns = {
  ordinalNumber: u({
    matchPattern: Qo,
    parsePattern: Yo,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Ro,
    defaultMatchWidth: "wide",
    parsePatterns: _o,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Jo,
    defaultMatchWidth: "wide",
    parsePatterns: Ko,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Bo,
    defaultMatchWidth: "wide",
    parsePatterns: Zo,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Uo,
    defaultMatchWidth: "wide",
    parsePatterns: es,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: ts,
    defaultMatchWidth: "any",
    parsePatterns: as,
    defaultParseWidth: "any"
  })
}, ae = {
  code: "nl",
  formatDistance: To,
  formatLong: Ho,
  formatRelative: Eo,
  localize: Io,
  match: ns,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, is = {
  lessThanXSeconds: {
    one: {
      regular: "mniej niż sekunda",
      past: "mniej niż sekundę",
      future: "mniej niż sekundę"
    },
    twoFour: "mniej niż {{count}} sekundy",
    other: "mniej niż {{count}} sekund"
  },
  xSeconds: {
    one: {
      regular: "sekunda",
      past: "sekundę",
      future: "sekundę"
    },
    twoFour: "{{count}} sekundy",
    other: "{{count}} sekund"
  },
  halfAMinute: {
    one: "pół minuty",
    twoFour: "pół minuty",
    other: "pół minuty"
  },
  lessThanXMinutes: {
    one: {
      regular: "mniej niż minuta",
      past: "mniej niż minutę",
      future: "mniej niż minutę"
    },
    twoFour: "mniej niż {{count}} minuty",
    other: "mniej niż {{count}} minut"
  },
  xMinutes: {
    one: {
      regular: "minuta",
      past: "minutę",
      future: "minutę"
    },
    twoFour: "{{count}} minuty",
    other: "{{count}} minut"
  },
  aboutXHours: {
    one: {
      regular: "około godziny",
      past: "około godziny",
      future: "około godzinę"
    },
    twoFour: "około {{count}} godziny",
    other: "około {{count}} godzin"
  },
  xHours: {
    one: {
      regular: "godzina",
      past: "godzinę",
      future: "godzinę"
    },
    twoFour: "{{count}} godziny",
    other: "{{count}} godzin"
  },
  xDays: {
    one: {
      regular: "dzień",
      past: "dzień",
      future: "1 dzień"
    },
    twoFour: "{{count}} dni",
    other: "{{count}} dni"
  },
  aboutXWeeks: {
    one: "około tygodnia",
    twoFour: "około {{count}} tygodni",
    other: "około {{count}} tygodni"
  },
  xWeeks: {
    one: "tydzień",
    twoFour: "{{count}} tygodnie",
    other: "{{count}} tygodni"
  },
  aboutXMonths: {
    one: "około miesiąc",
    twoFour: "około {{count}} miesiące",
    other: "około {{count}} miesięcy"
  },
  xMonths: {
    one: "miesiąc",
    twoFour: "{{count}} miesiące",
    other: "{{count}} miesięcy"
  },
  aboutXYears: {
    one: "około rok",
    twoFour: "około {{count}} lata",
    other: "około {{count}} lat"
  },
  xYears: {
    one: "rok",
    twoFour: "{{count}} lata",
    other: "{{count}} lat"
  },
  overXYears: {
    one: "ponad rok",
    twoFour: "ponad {{count}} lata",
    other: "ponad {{count}} lat"
  },
  almostXYears: {
    one: "prawie rok",
    twoFour: "prawie {{count}} lata",
    other: "prawie {{count}} lat"
  }
};
function rs(e, a) {
  if (a === 1)
    return e.one;
  const t = a % 100;
  if (t <= 20 && t > 10)
    return e.other;
  const n = t % 10;
  return n >= 2 && n <= 4 ? e.twoFour : e.other;
}
function V(e, a, t) {
  const n = rs(e, a);
  return (typeof n == "string" ? n : n[t]).replace("{{count}}", String(a));
}
const os = (e, a, t) => {
  const n = is[e];
  return t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "za " + V(n, a, "future") : V(n, a, "past") + " temu" : V(n, a, "regular");
}, ss = {
  full: "EEEE, do MMMM y",
  long: "do MMMM y",
  medium: "do MMM y",
  short: "dd.MM.y"
}, ds = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, us = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, ms = {
  date: s({
    formats: ss,
    defaultWidth: "full"
  }),
  time: s({
    formats: ds,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: us,
    defaultWidth: "full"
  })
}, ls = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, cs = {
  masculine: "ten",
  feminine: "ta"
}, hs = {
  masculine: "następny",
  feminine: "następna"
}, fs = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function ne(e, a, t, n) {
  let i;
  if (b(a, t, n))
    i = cs;
  else if (e === "lastWeek")
    i = ls;
  else if (e === "nextWeek")
    i = hs;
  else
    throw new Error(`Cannot determine adjectives for token ${e}`);
  const m = a.getDay(), d = fs[m];
  return `'${i[d]}' eeee 'o' p`;
}
const gs = {
  lastWeek: ne,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: ne,
  other: "P"
}, ps = (e, a, t, n) => {
  const i = gs[e];
  return typeof i == "function" ? i(e, a, t, n) : i;
}, vs = {
  narrow: ["p.n.e.", "n.e."],
  abbreviated: ["p.n.e.", "n.e."],
  wide: ["przed naszą erą", "naszej ery"]
}, bs = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["I kw.", "II kw.", "III kw.", "IV kw."],
  wide: ["I kwartał", "II kwartał", "III kwartał", "IV kwartał"]
}, ws = {
  narrow: ["S", "L", "M", "K", "M", "C", "L", "S", "W", "P", "L", "G"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "styczeń",
    "luty",
    "marzec",
    "kwiecień",
    "maj",
    "czerwiec",
    "lipiec",
    "sierpień",
    "wrzesień",
    "październik",
    "listopad",
    "grudzień"
  ]
}, ys = {
  narrow: ["s", "l", "m", "k", "m", "c", "l", "s", "w", "p", "l", "g"],
  abbreviated: [
    "sty",
    "lut",
    "mar",
    "kwi",
    "maj",
    "cze",
    "lip",
    "sie",
    "wrz",
    "paź",
    "lis",
    "gru"
  ],
  wide: [
    "stycznia",
    "lutego",
    "marca",
    "kwietnia",
    "maja",
    "czerwca",
    "lipca",
    "sierpnia",
    "września",
    "października",
    "listopada",
    "grudnia"
  ]
}, Ps = {
  narrow: ["N", "P", "W", "Ś", "C", "P", "S"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, ks = {
  narrow: ["n", "p", "w", "ś", "c", "p", "s"],
  short: ["nie", "pon", "wto", "śro", "czw", "pią", "sob"],
  abbreviated: ["niedz.", "pon.", "wt.", "śr.", "czw.", "pt.", "sob."],
  wide: [
    "niedziela",
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota"
  ]
}, Ms = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "półn.",
    noon: "poł",
    morning: "rano",
    afternoon: "popoł.",
    evening: "wiecz.",
    night: "noc"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "północ",
    noon: "południe",
    morning: "rano",
    afternoon: "popołudnie",
    evening: "wieczór",
    night: "noc"
  }
}, $s = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "o półn.",
    noon: "w poł.",
    morning: "rano",
    afternoon: "po poł.",
    evening: "wiecz.",
    night: "w nocy"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "o północy",
    noon: "w południe",
    morning: "rano",
    afternoon: "po południu",
    evening: "wieczorem",
    night: "w nocy"
  }
}, Ws = (e, a) => String(e), zs = {
  ordinalNumber: Ws,
  era: r({
    values: vs,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: bs,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: ws,
    defaultWidth: "wide",
    formattingValues: ys,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: Ps,
    defaultWidth: "wide",
    formattingValues: ks,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: r({
    values: Ms,
    defaultWidth: "wide",
    formattingValues: $s,
    defaultFormattingWidth: "wide"
  })
}, js = /^(\d+)?/i, Ds = /\d+/i, xs = {
  narrow: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  abbreviated: /^(p\.?\s*n\.?\s*e\.?\s*|n\.?\s*e\.?\s*)/i,
  wide: /^(przed\s*nasz(ą|a)\s*er(ą|a)|naszej\s*ery)/i
}, Ns = {
  any: [/^p/i, /^n/i]
}, Ts = {
  narrow: /^[1234]/i,
  abbreviated: /^(I|II|III|IV)\s*kw\.?/i,
  wide: /^(I|II|III|IV)\s*kwarta(ł|l)/i
}, Ss = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [/^I kw/i, /^II kw/i, /^III kw/i, /^IV kw/i]
}, Vs = {
  narrow: /^[slmkcwpg]/i,
  abbreviated: /^(sty|lut|mar|kwi|maj|cze|lip|sie|wrz|pa(ź|z)|lis|gru)/i,
  wide: /^(stycznia|stycze(ń|n)|lutego|luty|marca|marzec|kwietnia|kwiecie(ń|n)|maja|maj|czerwca|czerwiec|lipca|lipiec|sierpnia|sierpie(ń|n)|wrze(ś|s)nia|wrzesie(ń|n)|pa(ź|z)dziernika|pa(ź|z)dziernik|listopada|listopad|grudnia|grudzie(ń|n))/i
}, Cs = {
  narrow: [
    /^s/i,
    /^l/i,
    /^m/i,
    /^k/i,
    /^m/i,
    /^c/i,
    /^l/i,
    /^s/i,
    /^w/i,
    /^p/i,
    /^l/i,
    /^g/i
  ],
  any: [
    /^st/i,
    /^lu/i,
    /^mar/i,
    /^k/i,
    /^maj/i,
    /^c/i,
    /^lip/i,
    /^si/i,
    /^w/i,
    /^p/i,
    /^lis/i,
    /^g/i
  ]
}, Hs = {
  narrow: /^[npwścs]/i,
  short: /^(nie|pon|wto|(ś|s)ro|czw|pi(ą|a)|sob)/i,
  abbreviated: /^(niedz|pon|wt|(ś|s)r|czw|pt|sob)\.?/i,
  wide: /^(niedziela|poniedzia(ł|l)ek|wtorek|(ś|s)roda|czwartek|pi(ą|a)tek|sobota)/i
}, Xs = {
  narrow: [/^n/i, /^p/i, /^w/i, /^ś/i, /^c/i, /^p/i, /^s/i],
  abbreviated: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pt/i, /^so/i],
  any: [/^n/i, /^po/i, /^w/i, /^(ś|s)r/i, /^c/i, /^pi/i, /^so/i]
}, Es = {
  narrow: /^(^a$|^p$|pó(ł|l)n\.?|o\s*pó(ł|l)n\.?|po(ł|l)\.?|w\s*po(ł|l)\.?|po\s*po(ł|l)\.?|rano|wiecz\.?|noc|w\s*nocy)/i,
  any: /^(am|pm|pó(ł|l)noc|o\s*pó(ł|l)nocy|po(ł|l)udnie|w\s*po(ł|l)udnie|popo(ł|l)udnie|po\s*po(ł|l)udniu|rano|wieczór|wieczorem|noc|w\s*nocy)/i
}, Fs = {
  narrow: {
    am: /^a$/i,
    pm: /^p$/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  },
  any: {
    am: /^am/i,
    pm: /^pm/i,
    midnight: /pó(ł|l)n/i,
    noon: /po(ł|l)/i,
    morning: /rano/i,
    afternoon: /po\s*po(ł|l)/i,
    evening: /wiecz/i,
    night: /noc/i
  }
}, qs = {
  ordinalNumber: u({
    matchPattern: js,
    parsePattern: Ds,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: xs,
    defaultMatchWidth: "wide",
    parsePatterns: Ns,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Ts,
    defaultMatchWidth: "wide",
    parsePatterns: Ss,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Vs,
    defaultMatchWidth: "wide",
    parsePatterns: Cs,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Hs,
    defaultMatchWidth: "wide",
    parsePatterns: Xs,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Es,
    defaultMatchWidth: "any",
    parsePatterns: Fs,
    defaultParseWidth: "any"
  })
}, ie = {
  code: "pl",
  formatDistance: os,
  formatLong: ms,
  formatRelative: ps,
  localize: zs,
  match: qs,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Ls = {
  lessThanXSeconds: {
    one: "bir saniyeden az",
    other: "{{count}} saniyeden az"
  },
  xSeconds: {
    one: "1 saniye",
    other: "{{count}} saniye"
  },
  halfAMinute: "yarım dakika",
  lessThanXMinutes: {
    one: "bir dakikadan az",
    other: "{{count}} dakikadan az"
  },
  xMinutes: {
    one: "1 dakika",
    other: "{{count}} dakika"
  },
  aboutXHours: {
    one: "yaklaşık 1 saat",
    other: "yaklaşık {{count}} saat"
  },
  xHours: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  xDays: {
    one: "1 gün",
    other: "{{count}} gün"
  },
  aboutXWeeks: {
    one: "yaklaşık 1 hafta",
    other: "yaklaşık {{count}} hafta"
  },
  xWeeks: {
    one: "1 hafta",
    other: "{{count}} hafta"
  },
  aboutXMonths: {
    one: "yaklaşık 1 ay",
    other: "yaklaşık {{count}} ay"
  },
  xMonths: {
    one: "1 ay",
    other: "{{count}} ay"
  },
  aboutXYears: {
    one: "yaklaşık 1 yıl",
    other: "yaklaşık {{count}} yıl"
  },
  xYears: {
    one: "1 yıl",
    other: "{{count}} yıl"
  },
  overXYears: {
    one: "1 yıldan fazla",
    other: "{{count}} yıldan fazla"
  },
  almostXYears: {
    one: "neredeyse 1 yıl",
    other: "neredeyse {{count}} yıl"
  }
}, As = (e, a, t) => {
  let n;
  const i = Ls[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + " sonra" : n + " önce" : n;
}, Os = {
  full: "d MMMM y EEEE",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "dd.MM.yyyy"
}, Gs = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Is = {
  full: "{{date}} 'saat' {{time}}",
  long: "{{date}} 'saat' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Qs = {
  date: s({
    formats: Os,
    defaultWidth: "full"
  }),
  time: s({
    formats: Gs,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Is,
    defaultWidth: "full"
  })
}, Ys = {
  lastWeek: "'geçen hafta' eeee 'saat' p",
  yesterday: "'dün saat' p",
  today: "'bugün saat' p",
  tomorrow: "'yarın saat' p",
  nextWeek: "eeee 'saat' p",
  other: "P"
}, Rs = (e, a, t, n) => Ys[e], _s = {
  narrow: ["MÖ", "MS"],
  abbreviated: ["MÖ", "MS"],
  wide: ["Milattan Önce", "Milattan Sonra"]
}, Js = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1Ç", "2Ç", "3Ç", "4Ç"],
  wide: ["İlk çeyrek", "İkinci Çeyrek", "Üçüncü çeyrek", "Son çeyrek"]
}, Ks = {
  narrow: ["O", "Ş", "M", "N", "M", "H", "T", "A", "E", "E", "K", "A"],
  abbreviated: [
    "Oca",
    "Şub",
    "Mar",
    "Nis",
    "May",
    "Haz",
    "Tem",
    "Ağu",
    "Eyl",
    "Eki",
    "Kas",
    "Ara"
  ],
  wide: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık"
  ]
}, Bs = {
  narrow: ["P", "P", "S", "Ç", "P", "C", "C"],
  short: ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct"],
  abbreviated: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cts"],
  wide: [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi"
  ]
}, Zs = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  },
  wide: {
    am: "Ö.Ö.",
    pm: "Ö.S.",
    midnight: "gece yarısı",
    noon: "öğle",
    morning: "sabah",
    afternoon: "öğleden sonra",
    evening: "akşam",
    night: "gece"
  }
}, Us = {
  narrow: {
    am: "öö",
    pm: "ös",
    midnight: "gy",
    noon: "ö",
    morning: "sa",
    afternoon: "ös",
    evening: "ak",
    night: "ge"
  },
  abbreviated: {
    am: "ÖÖ",
    pm: "ÖS",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  },
  wide: {
    am: "ö.ö.",
    pm: "ö.s.",
    midnight: "gece yarısı",
    noon: "öğlen",
    morning: "sabahleyin",
    afternoon: "öğleden sonra",
    evening: "akşamleyin",
    night: "geceleyin"
  }
}, ed = (e, a) => Number(e) + ".", td = {
  ordinalNumber: ed,
  era: r({
    values: _s,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Js,
    defaultWidth: "wide",
    argumentCallback: (e) => Number(e) - 1
  }),
  month: r({
    values: Ks,
    defaultWidth: "wide"
  }),
  day: r({
    values: Bs,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Zs,
    defaultWidth: "wide",
    formattingValues: Us,
    defaultFormattingWidth: "wide"
  })
}, ad = /^(\d+)(\.)?/i, nd = /\d+/i, id = {
  narrow: /^(mö|ms)/i,
  abbreviated: /^(mö|ms)/i,
  wide: /^(milattan önce|milattan sonra)/i
}, rd = {
  any: [/(^mö|^milattan önce)/i, /(^ms|^milattan sonra)/i]
}, od = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]ç/i,
  wide: /^((i|İ)lk|(i|İ)kinci|üçüncü|son) çeyrek/i
}, sd = {
  any: [/1/i, /2/i, /3/i, /4/i],
  abbreviated: [/1ç/i, /2ç/i, /3ç/i, /4ç/i],
  wide: [
    /^(i|İ)lk çeyrek/i,
    /(i|İ)kinci çeyrek/i,
    /üçüncü çeyrek/i,
    /son çeyrek/i
  ]
}, dd = {
  narrow: /^[oşmnhtaek]/i,
  abbreviated: /^(oca|şub|mar|nis|may|haz|tem|ağu|eyl|eki|kas|ara)/i,
  wide: /^(ocak|şubat|mart|nisan|mayıs|haziran|temmuz|ağustos|eylül|ekim|kasım|aralık)/i
}, ud = {
  narrow: [
    /^o/i,
    /^ş/i,
    /^m/i,
    /^n/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^a/i,
    /^e/i,
    /^e/i,
    /^k/i,
    /^a/i
  ],
  any: [
    /^o/i,
    /^ş/i,
    /^mar/i,
    /^n/i,
    /^may/i,
    /^h/i,
    /^t/i,
    /^ağ/i,
    /^ey/i,
    /^ek/i,
    /^k/i,
    /^ar/i
  ]
}, md = {
  narrow: /^[psçc]/i,
  short: /^(pz|pt|sa|ça|pe|cu|ct)/i,
  abbreviated: /^(paz|pzt|sal|çar|per|cum|cts)/i,
  wide: /^(pazar(?!tesi)|pazartesi|salı|çarşamba|perşembe|cuma(?!rtesi)|cumartesi)/i
}, ld = {
  narrow: [/^p/i, /^p/i, /^s/i, /^ç/i, /^p/i, /^c/i, /^c/i],
  any: [/^pz/i, /^pt/i, /^sa/i, /^ça/i, /^pe/i, /^cu/i, /^ct/i],
  wide: [
    /^pazar(?!tesi)/i,
    /^pazartesi/i,
    /^salı/i,
    /^çarşamba/i,
    /^perşembe/i,
    /^cuma(?!rtesi)/i,
    /^cumartesi/i
  ]
}, cd = {
  narrow: /^(öö|ös|gy|ö|sa|ös|ak|ge)/i,
  any: /^(ö\.?\s?[ös]\.?|öğleden sonra|gece yarısı|öğle|(sabah|öğ|akşam|gece)(leyin))/i
}, hd = {
  any: {
    am: /^ö\.?ö\.?/i,
    pm: /^ö\.?s\.?/i,
    midnight: /^(gy|gece yarısı)/i,
    noon: /^öğ/i,
    morning: /^sa/i,
    afternoon: /^öğleden sonra/i,
    evening: /^ak/i,
    night: /^ge/i
  }
}, fd = {
  ordinalNumber: u({
    matchPattern: ad,
    parsePattern: nd,
    valueCallback: function(e) {
      return parseInt(e, 10);
    }
  }),
  era: o({
    matchPatterns: id,
    defaultMatchWidth: "wide",
    parsePatterns: rd,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: od,
    defaultMatchWidth: "wide",
    parsePatterns: sd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: dd,
    defaultMatchWidth: "wide",
    parsePatterns: ud,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: md,
    defaultMatchWidth: "wide",
    parsePatterns: ld,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: cd,
    defaultMatchWidth: "any",
    parsePatterns: hd,
    defaultParseWidth: "any"
  })
}, re = {
  code: "tr",
  formatDistance: As,
  formatLong: Qs,
  formatRelative: Rs,
  localize: td,
  match: fd,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, gd = {
  lessThanXSeconds: {
    one: "1초 미만",
    other: "{{count}}초 미만"
  },
  xSeconds: {
    one: "1초",
    other: "{{count}}초"
  },
  halfAMinute: "30초",
  lessThanXMinutes: {
    one: "1분 미만",
    other: "{{count}}분 미만"
  },
  xMinutes: {
    one: "1분",
    other: "{{count}}분"
  },
  aboutXHours: {
    one: "약 1시간",
    other: "약 {{count}}시간"
  },
  xHours: {
    one: "1시간",
    other: "{{count}}시간"
  },
  xDays: {
    one: "1일",
    other: "{{count}}일"
  },
  aboutXWeeks: {
    one: "약 1주",
    other: "약 {{count}}주"
  },
  xWeeks: {
    one: "1주",
    other: "{{count}}주"
  },
  aboutXMonths: {
    one: "약 1개월",
    other: "약 {{count}}개월"
  },
  xMonths: {
    one: "1개월",
    other: "{{count}}개월"
  },
  aboutXYears: {
    one: "약 1년",
    other: "약 {{count}}년"
  },
  xYears: {
    one: "1년",
    other: "{{count}}년"
  },
  overXYears: {
    one: "1년 이상",
    other: "{{count}}년 이상"
  },
  almostXYears: {
    one: "거의 1년",
    other: "거의 {{count}}년"
  }
}, pd = (e, a, t) => {
  let n;
  const i = gd[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + " 후" : n + " 전" : n;
}, vd = {
  full: "y년 M월 d일 EEEE",
  long: "y년 M월 d일",
  medium: "y.MM.dd",
  short: "y.MM.dd"
}, bd = {
  full: "a H시 mm분 ss초 zzzz",
  long: "a H:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, wd = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, yd = {
  date: s({
    formats: vd,
    defaultWidth: "full"
  }),
  time: s({
    formats: bd,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: wd,
    defaultWidth: "full"
  })
}, Pd = {
  lastWeek: "'지난' eeee p",
  yesterday: "'어제' p",
  today: "'오늘' p",
  tomorrow: "'내일' p",
  nextWeek: "'다음' eeee p",
  other: "P"
}, kd = (e, a, t, n) => Pd[e], Md = {
  narrow: ["BC", "AD"],
  abbreviated: ["BC", "AD"],
  wide: ["기원전", "서기"]
}, $d = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1분기", "2분기", "3분기", "4분기"]
}, Wd = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ],
  wide: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월"
  ]
}, zd = {
  narrow: ["일", "월", "화", "수", "목", "금", "토"],
  short: ["일", "월", "화", "수", "목", "금", "토"],
  abbreviated: ["일", "월", "화", "수", "목", "금", "토"],
  wide: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"]
}, jd = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, Dd = {
  narrow: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  abbreviated: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  },
  wide: {
    am: "오전",
    pm: "오후",
    midnight: "자정",
    noon: "정오",
    morning: "아침",
    afternoon: "오후",
    evening: "저녁",
    night: "밤"
  }
}, xd = (e, a) => {
  const t = Number(e);
  switch (String(a == null ? void 0 : a.unit)) {
    case "minute":
    case "second":
      return String(t);
    case "date":
      return t + "일";
    default:
      return t + "번째";
  }
}, Nd = {
  ordinalNumber: xd,
  era: r({
    values: Md,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: $d,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Wd,
    defaultWidth: "wide"
  }),
  day: r({
    values: zd,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: jd,
    defaultWidth: "wide",
    formattingValues: Dd,
    defaultFormattingWidth: "wide"
  })
}, Td = /^(\d+)(일|번째)?/i, Sd = /\d+/i, Vd = {
  narrow: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(기원전|서기)/i
}, Cd = {
  any: [/^(bc|기원전)/i, /^(ad|서기)/i]
}, Hd = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]사?분기/i
}, Xd = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ed = {
  narrow: /^(1[012]|[123456789])/,
  abbreviated: /^(1[012]|[123456789])월/i,
  wide: /^(1[012]|[123456789])월/i
}, Fd = {
  any: [
    /^1월?$/,
    /^2/,
    /^3/,
    /^4/,
    /^5/,
    /^6/,
    /^7/,
    /^8/,
    /^9/,
    /^10/,
    /^11/,
    /^12/
  ]
}, qd = {
  narrow: /^[일월화수목금토]/,
  short: /^[일월화수목금토]/,
  abbreviated: /^[일월화수목금토]/,
  wide: /^[일월화수목금토]요일/
}, Ld = {
  any: [/^일/, /^월/, /^화/, /^수/, /^목/, /^금/, /^토/]
}, Ad = {
  any: /^(am|pm|오전|오후|자정|정오|아침|저녁|밤)/i
}, Od = {
  any: {
    am: /^(am|오전)/i,
    pm: /^(pm|오후)/i,
    midnight: /^자정/i,
    noon: /^정오/i,
    morning: /^아침/i,
    afternoon: /^오후/i,
    evening: /^저녁/i,
    night: /^밤/i
  }
}, Gd = {
  ordinalNumber: u({
    matchPattern: Td,
    parsePattern: Sd,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Vd,
    defaultMatchWidth: "wide",
    parsePatterns: Cd,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Hd,
    defaultMatchWidth: "wide",
    parsePatterns: Xd,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Ed,
    defaultMatchWidth: "wide",
    parsePatterns: Fd,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: qd,
    defaultMatchWidth: "wide",
    parsePatterns: Ld,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Ad,
    defaultMatchWidth: "any",
    parsePatterns: Od,
    defaultParseWidth: "any"
  })
}, oe = {
  code: "ko",
  formatDistance: pd,
  formatLong: yd,
  formatRelative: kd,
  localize: Nd,
  match: Gd,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Id = {
  lessThanXSeconds: {
    one: "mindre än en sekund",
    other: "mindre än {{count}} sekunder"
  },
  xSeconds: {
    one: "en sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "en halv minut",
  lessThanXMinutes: {
    one: "mindre än en minut",
    other: "mindre än {{count}} minuter"
  },
  xMinutes: {
    one: "en minut",
    other: "{{count}} minuter"
  },
  aboutXHours: {
    one: "ungefär en timme",
    other: "ungefär {{count}} timmar"
  },
  xHours: {
    one: "en timme",
    other: "{{count}} timmar"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "ungefär en vecka",
    other: "ungefär {{count}} veckor"
  },
  xWeeks: {
    one: "en vecka",
    other: "{{count}} veckor"
  },
  aboutXMonths: {
    one: "ungefär en månad",
    other: "ungefär {{count}} månader"
  },
  xMonths: {
    one: "en månad",
    other: "{{count}} månader"
  },
  aboutXYears: {
    one: "ungefär ett år",
    other: "ungefär {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "över ett år",
    other: "över {{count}} år"
  },
  almostXYears: {
    one: "nästan ett år",
    other: "nästan {{count}} år"
  }
}, Qd = [
  "noll",
  "en",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
  "elva",
  "tolv"
], Yd = (e, a, t) => {
  let n;
  const i = Id[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace(
    "{{count}}",
    a < 13 ? Qd[a] : String(a)
  ), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "om " + n : n + " sedan" : n;
}, Rd = {
  full: "EEEE d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "y-MM-dd"
}, _d = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Jd = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Kd = {
  date: s({
    formats: Rd,
    defaultWidth: "full"
  }),
  time: s({
    formats: _d,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Jd,
    defaultWidth: "full"
  })
}, Bd = {
  lastWeek: "'i' EEEE's kl.' p",
  yesterday: "'igår kl.' p",
  today: "'idag kl.' p",
  tomorrow: "'imorgon kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
}, Zd = (e, a, t, n) => Bd[e], Ud = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["före Kristus", "efter Kristus"]
}, eu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1:a kvartalet", "2:a kvartalet", "3:e kvartalet", "4:e kvartalet"]
}, tu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "maj",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januari",
    "februari",
    "mars",
    "april",
    "maj",
    "juni",
    "juli",
    "augusti",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, au = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sö", "må", "ti", "on", "to", "fr", "lö"],
  abbreviated: ["sön", "mån", "tis", "ons", "tors", "fre", "lör"],
  wide: ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"]
}, nu = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "morg.",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt"
  },
  abbreviated: {
    am: "f.m.",
    pm: "e.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "efterm.",
    evening: "kväll",
    night: "natt"
  },
  wide: {
    am: "förmiddag",
    pm: "eftermiddag",
    midnight: "midnatt",
    noon: "middag",
    morning: "morgon",
    afternoon: "eftermiddag",
    evening: "kväll",
    night: "natt"
  }
}, iu = {
  narrow: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten"
  },
  abbreviated: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på efterm.",
    evening: "på kvällen",
    night: "på natten"
  },
  wide: {
    am: "fm",
    pm: "em",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgonen",
    afternoon: "på eftermiddagen",
    evening: "på kvällen",
    night: "på natten"
  }
}, ru = (e, a) => {
  const t = Number(e), n = t % 100;
  if (n > 20 || n < 10)
    switch (n % 10) {
      case 1:
      case 2:
        return t + ":a";
    }
  return t + ":e";
}, ou = {
  ordinalNumber: ru,
  era: r({
    values: Ud,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: eu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: tu,
    defaultWidth: "wide"
  }),
  day: r({
    values: au,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: nu,
    defaultWidth: "wide",
    formattingValues: iu,
    defaultFormattingWidth: "wide"
  })
}, su = /^(\d+)(:a|:e)?/i, du = /\d+/i, uu = {
  narrow: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|f\.? ?v\.? ?t\.?|e\.? ?Kr\.?|v\.? ?t\.?)/i,
  wide: /^(före Kristus|före vår tid|efter Kristus|vår tid)/i
}, mu = {
  any: [/^f/i, /^[ev]/i]
}, lu = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](:a|:e)? kvartalet/i
}, cu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, hu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar[s]?|apr|maj|jun[i]?|jul[i]?|aug|sep|okt|nov|dec)\.?/i,
  wide: /^(januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december)/i
}, fu = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maj/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, gu = {
  narrow: /^[smtofl]/i,
  short: /^(sö|må|ti|on|to|fr|lö)/i,
  abbreviated: /^(sön|mån|tis|ons|tors|fre|lör)/i,
  wide: /^(söndag|måndag|tisdag|onsdag|torsdag|fredag|lördag)/i
}, pu = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, vu = {
  any: /^([fe]\.?\s?m\.?|midn(att)?|midd(ag)?|(på) (morgonen|eftermiddagen|kvällen|natten))/i
}, bu = {
  any: {
    am: /^f/i,
    pm: /^e/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgon/i,
    afternoon: /eftermiddag/i,
    evening: /kväll/i,
    night: /natt/i
  }
}, wu = {
  ordinalNumber: u({
    matchPattern: su,
    parsePattern: du,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: uu,
    defaultMatchWidth: "wide",
    parsePatterns: mu,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: lu,
    defaultMatchWidth: "wide",
    parsePatterns: cu,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: hu,
    defaultMatchWidth: "wide",
    parsePatterns: fu,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: gu,
    defaultMatchWidth: "wide",
    parsePatterns: pu,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: vu,
    defaultMatchWidth: "any",
    parsePatterns: bu,
    defaultParseWidth: "any"
  })
}, se = {
  code: "sv",
  formatDistance: Yd,
  formatLong: Kd,
  formatRelative: Zd,
  localize: ou,
  match: wu,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, yu = {
  lessThanXSeconds: {
    one: "mindre end ét sekund",
    other: "mindre end {{count}} sekunder"
  },
  xSeconds: {
    one: "1 sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "ét halvt minut",
  lessThanXMinutes: {
    one: "mindre end ét minut",
    other: "mindre end {{count}} minutter"
  },
  xMinutes: {
    one: "1 minut",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "cirka 1 time",
    other: "cirka {{count}} timer"
  },
  xHours: {
    one: "1 time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dage"
  },
  aboutXWeeks: {
    one: "cirka 1 uge",
    other: "cirka {{count}} uger"
  },
  xWeeks: {
    one: "1 uge",
    other: "{{count}} uger"
  },
  aboutXMonths: {
    one: "cirka 1 måned",
    other: "cirka {{count}} måneder"
  },
  xMonths: {
    one: "1 måned",
    other: "{{count}} måneder"
  },
  aboutXYears: {
    one: "cirka 1 år",
    other: "cirka {{count}} år"
  },
  xYears: {
    one: "1 år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over 1 år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "næsten 1 år",
    other: "næsten {{count}} år"
  }
}, Pu = (e, a, t) => {
  let n;
  const i = yu[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "om " + n : n + " siden" : n;
}, ku = {
  full: "EEEE 'den' d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd/MM/y"
}, Mu = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, $u = {
  full: "{{date}} 'kl'. {{time}}",
  long: "{{date}} 'kl'. {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Wu = {
  date: s({
    formats: ku,
    defaultWidth: "full"
  }),
  time: s({
    formats: Mu,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: $u,
    defaultWidth: "full"
  })
}, zu = {
  lastWeek: "'sidste' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "'på' eeee 'kl.' p",
  other: "P"
}, ju = (e, a, t, n) => zu[e], Du = {
  narrow: ["fvt", "vt"],
  abbreviated: ["f.v.t.", "v.t."],
  wide: ["før vesterlandsk tidsregning", "vesterlandsk tidsregning"]
}, xu = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. kvt.", "2. kvt.", "3. kvt.", "4. kvt."],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, Nu = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mar.",
    "apr.",
    "maj",
    "jun.",
    "jul.",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december"
  ]
}, Tu = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn.", "man.", "tir.", "ons.", "tor.", "fre.", "lør."],
  wide: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ]
}, Su = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnat",
    noon: "middag",
    morning: "morgen",
    afternoon: "eftermiddag",
    evening: "aften",
    night: "nat"
  }
}, Vu = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnat",
    noon: "middag",
    morning: "om morgenen",
    afternoon: "om eftermiddagen",
    evening: "om aftenen",
    night: "om natten"
  }
}, Cu = (e, a) => Number(e) + ".", Hu = {
  ordinalNumber: Cu,
  era: r({
    values: Du,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: xu,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Nu,
    defaultWidth: "wide"
  }),
  day: r({
    values: Tu,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Su,
    defaultWidth: "wide",
    formattingValues: Vu,
    defaultFormattingWidth: "wide"
  })
}, Xu = /^(\d+)(\.)?/i, Eu = /\d+/i, Fu = {
  narrow: /^(fKr|fvt|eKr|vt)/i,
  abbreviated: /^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,
  wide: /^(f.Kr.|før vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i
}, qu = {
  any: [/^f/i, /^(v|e)/i]
}, Lu = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]. kvt\./i,
  wide: /^[1234]\.? kvartal/i
}, Au = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ou = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,
  wide: /^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i
}, Gu = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maj/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Iu = {
  narrow: /^[smtofl]/i,
  short: /^(søn.|man.|tir.|ons.|tor.|fre.|lør.)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, Qu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^o/i, /^t/i, /^f/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, Yu = {
  narrow: /^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,
  any: /^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i
}, Ru = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /midnat/i,
    noon: /middag/i,
    morning: /morgen/i,
    afternoon: /eftermiddag/i,
    evening: /aften/i,
    night: /nat/i
  }
}, _u = {
  ordinalNumber: u({
    matchPattern: Xu,
    parsePattern: Eu,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Fu,
    defaultMatchWidth: "wide",
    parsePatterns: qu,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Lu,
    defaultMatchWidth: "wide",
    parsePatterns: Au,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Ou,
    defaultMatchWidth: "wide",
    parsePatterns: Gu,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Iu,
    defaultMatchWidth: "wide",
    parsePatterns: Qu,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Yu,
    defaultMatchWidth: "any",
    parsePatterns: Ru,
    defaultParseWidth: "any"
  })
}, de = {
  code: "da",
  formatDistance: Pu,
  formatLong: Wu,
  formatRelative: ju,
  localize: Hu,
  match: _u,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Ju = {
  lessThanXSeconds: {
    one: "mindre enn ett sekund",
    other: "mindre enn {{count}} sekunder"
  },
  xSeconds: {
    one: "ett sekund",
    other: "{{count}} sekunder"
  },
  halfAMinute: "et halvt minutt",
  lessThanXMinutes: {
    one: "mindre enn ett minutt",
    other: "mindre enn {{count}} minutter"
  },
  xMinutes: {
    one: "ett minutt",
    other: "{{count}} minutter"
  },
  aboutXHours: {
    one: "omtrent en time",
    other: "omtrent {{count}} timer"
  },
  xHours: {
    one: "en time",
    other: "{{count}} timer"
  },
  xDays: {
    one: "en dag",
    other: "{{count}} dager"
  },
  aboutXWeeks: {
    one: "omtrent en uke",
    other: "omtrent {{count}} uker"
  },
  xWeeks: {
    one: "en uke",
    other: "{{count}} uker"
  },
  aboutXMonths: {
    one: "omtrent en måned",
    other: "omtrent {{count}} måneder"
  },
  xMonths: {
    one: "en måned",
    other: "{{count}} måneder"
  },
  aboutXYears: {
    one: "omtrent ett år",
    other: "omtrent {{count}} år"
  },
  xYears: {
    one: "ett år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over ett år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "nesten ett år",
    other: "nesten {{count}} år"
  }
}, Ku = (e, a, t) => {
  let n;
  const i = Ju[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "om " + n : n + " siden" : n;
}, Bu = {
  full: "EEEE d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "dd.MM.y"
}, Zu = {
  full: "'kl'. HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, Uu = {
  full: "{{date}} 'kl.' {{time}}",
  long: "{{date}} 'kl.' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, em = {
  date: s({
    formats: Bu,
    defaultWidth: "full"
  }),
  time: s({
    formats: Zu,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Uu,
    defaultWidth: "full"
  })
}, tm = {
  lastWeek: "'forrige' eeee 'kl.' p",
  yesterday: "'i går kl.' p",
  today: "'i dag kl.' p",
  tomorrow: "'i morgen kl.' p",
  nextWeek: "EEEE 'kl.' p",
  other: "P"
}, am = (e, a, t, n) => tm[e], nm = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["før Kristus", "etter Kristus"]
}, im = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"]
}, rm = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apr.",
    "mai",
    "juni",
    "juli",
    "aug.",
    "sep.",
    "okt.",
    "nov.",
    "des."
  ],
  wide: [
    "januar",
    "februar",
    "mars",
    "april",
    "mai",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "desember"
  ]
}, om = {
  narrow: ["S", "M", "T", "O", "T", "F", "L"],
  short: ["sø", "ma", "ti", "on", "to", "fr", "lø"],
  abbreviated: ["søn", "man", "tir", "ons", "tor", "fre", "lør"],
  wide: [
    "søndag",
    "mandag",
    "tirsdag",
    "onsdag",
    "torsdag",
    "fredag",
    "lørdag"
  ]
}, sm = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morg.",
    afternoon: "på etterm.",
    evening: "på kvelden",
    night: "på natten"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnatt",
    noon: "middag",
    morning: "på morgenen",
    afternoon: "på ettermiddagen",
    evening: "på kvelden",
    night: "på natten"
  }
}, dm = (e, a) => Number(e) + ".", um = {
  ordinalNumber: dm,
  era: r({
    values: nm,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: im,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: rm,
    defaultWidth: "wide"
  }),
  day: r({
    values: om,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: sm,
    defaultWidth: "wide"
  })
}, mm = /^(\d+)\.?/i, lm = /\d+/i, cm = {
  narrow: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  abbreviated: /^(f\.? ?Kr\.?|fvt\.?|e\.? ?Kr\.?|evt\.?)/i,
  wide: /^(før Kristus|før vår tid|etter Kristus|vår tid)/i
}, hm = {
  any: [/^f/i, /^e/i]
}, fm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}, gm = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, pm = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mars?|apr|mai|juni?|juli?|aug|sep|okt|nov|des)\.?/i,
  wide: /^(januar|februar|mars|april|mai|juni|juli|august|september|oktober|november|desember)/i
}, vm = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^jun/i,
    /^jul/i,
    /^aug/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, bm = {
  narrow: /^[smtofl]/i,
  short: /^(sø|ma|ti|on|to|fr|lø)/i,
  abbreviated: /^(søn|man|tir|ons|tor|fre|lør)/i,
  wide: /^(søndag|mandag|tirsdag|onsdag|torsdag|fredag|lørdag)/i
}, wm = {
  any: [/^s/i, /^m/i, /^ti/i, /^o/i, /^to/i, /^f/i, /^l/i]
}, ym = {
  narrow: /^(midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|midnatt|middag|(på) (morgenen|ettermiddagen|kvelden|natten))/i
}, Pm = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^midn/i,
    noon: /^midd/i,
    morning: /morgen/i,
    afternoon: /ettermiddag/i,
    evening: /kveld/i,
    night: /natt/i
  }
}, km = {
  ordinalNumber: u({
    matchPattern: mm,
    parsePattern: lm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: cm,
    defaultMatchWidth: "wide",
    parsePatterns: hm,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: fm,
    defaultMatchWidth: "wide",
    parsePatterns: gm,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: pm,
    defaultMatchWidth: "wide",
    parsePatterns: vm,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: bm,
    defaultMatchWidth: "wide",
    parsePatterns: wm,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: ym,
    defaultMatchWidth: "any",
    parsePatterns: Pm,
    defaultParseWidth: "any"
  })
}, ue = {
  code: "nb",
  formatDistance: Ku,
  formatLong: em,
  formatRelative: am,
  localize: um,
  match: km,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
};
function me(e) {
  return e.replace(/sekuntia?/, "sekunnin");
}
function le(e) {
  return e.replace(/minuuttia?/, "minuutin");
}
function ce(e) {
  return e.replace(/tuntia?/, "tunnin");
}
function Mm(e) {
  return e.replace(/päivää?/, "päivän");
}
function he(e) {
  return e.replace(/(viikko|viikkoa)/, "viikon");
}
function fe(e) {
  return e.replace(/(kuukausi|kuukautta)/, "kuukauden");
}
function W(e) {
  return e.replace(/(vuosi|vuotta)/, "vuoden");
}
const $m = {
  lessThanXSeconds: {
    one: "alle sekunti",
    other: "alle {{count}} sekuntia",
    futureTense: me
  },
  xSeconds: {
    one: "sekunti",
    other: "{{count}} sekuntia",
    futureTense: me
  },
  halfAMinute: {
    one: "puoli minuuttia",
    other: "puoli minuuttia",
    futureTense: (e) => "puolen minuutin"
  },
  lessThanXMinutes: {
    one: "alle minuutti",
    other: "alle {{count}} minuuttia",
    futureTense: le
  },
  xMinutes: {
    one: "minuutti",
    other: "{{count}} minuuttia",
    futureTense: le
  },
  aboutXHours: {
    one: "noin tunti",
    other: "noin {{count}} tuntia",
    futureTense: ce
  },
  xHours: {
    one: "tunti",
    other: "{{count}} tuntia",
    futureTense: ce
  },
  xDays: {
    one: "päivä",
    other: "{{count}} päivää",
    futureTense: Mm
  },
  aboutXWeeks: {
    one: "noin viikko",
    other: "noin {{count}} viikkoa",
    futureTense: he
  },
  xWeeks: {
    one: "viikko",
    other: "{{count}} viikkoa",
    futureTense: he
  },
  aboutXMonths: {
    one: "noin kuukausi",
    other: "noin {{count}} kuukautta",
    futureTense: fe
  },
  xMonths: {
    one: "kuukausi",
    other: "{{count}} kuukautta",
    futureTense: fe
  },
  aboutXYears: {
    one: "noin vuosi",
    other: "noin {{count}} vuotta",
    futureTense: W
  },
  xYears: {
    one: "vuosi",
    other: "{{count}} vuotta",
    futureTense: W
  },
  overXYears: {
    one: "yli vuosi",
    other: "yli {{count}} vuotta",
    futureTense: W
  },
  almostXYears: {
    one: "lähes vuosi",
    other: "lähes {{count}} vuotta",
    futureTense: W
  }
}, Wm = (e, a, t) => {
  const n = $m[e], i = a === 1 ? n.one : n.other.replace("{{count}}", String(a));
  return t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n.futureTense(i) + " kuluttua" : i + " sitten" : i;
}, zm = {
  full: "eeee d. MMMM y",
  long: "d. MMMM y",
  medium: "d. MMM y",
  short: "d.M.y"
}, jm = {
  full: "HH.mm.ss zzzz",
  long: "HH.mm.ss z",
  medium: "HH.mm.ss",
  short: "HH.mm"
}, Dm = {
  full: "{{date}} 'klo' {{time}}",
  long: "{{date}} 'klo' {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, xm = {
  date: s({
    formats: zm,
    defaultWidth: "full"
  }),
  time: s({
    formats: jm,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Dm,
    defaultWidth: "full"
  })
}, Nm = {
  lastWeek: "'viime' eeee 'klo' p",
  yesterday: "'eilen klo' p",
  today: "'tänään klo' p",
  tomorrow: "'huomenna klo' p",
  nextWeek: "'ensi' eeee 'klo' p",
  other: "P"
}, Tm = (e, a, t, n) => Nm[e], Sm = {
  narrow: ["eaa.", "jaa."],
  abbreviated: ["eaa.", "jaa."],
  wide: ["ennen ajanlaskun alkua", "jälkeen ajanlaskun alun"]
}, Vm = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1. kvartaali", "2. kvartaali", "3. kvartaali", "4. kvartaali"]
}, H = {
  narrow: ["T", "H", "M", "H", "T", "K", "H", "E", "S", "L", "M", "J"],
  abbreviated: [
    "tammi",
    "helmi",
    "maalis",
    "huhti",
    "touko",
    "kesä",
    "heinä",
    "elo",
    "syys",
    "loka",
    "marras",
    "joulu"
  ],
  wide: [
    "tammikuu",
    "helmikuu",
    "maaliskuu",
    "huhtikuu",
    "toukokuu",
    "kesäkuu",
    "heinäkuu",
    "elokuu",
    "syyskuu",
    "lokakuu",
    "marraskuu",
    "joulukuu"
  ]
}, Cm = {
  narrow: H.narrow,
  abbreviated: H.abbreviated,
  wide: [
    "tammikuuta",
    "helmikuuta",
    "maaliskuuta",
    "huhtikuuta",
    "toukokuuta",
    "kesäkuuta",
    "heinäkuuta",
    "elokuuta",
    "syyskuuta",
    "lokakuuta",
    "marraskuuta",
    "joulukuuta"
  ]
}, j = {
  narrow: ["S", "M", "T", "K", "T", "P", "L"],
  short: ["su", "ma", "ti", "ke", "to", "pe", "la"],
  abbreviated: ["sunn.", "maan.", "tiis.", "kesk.", "torst.", "perj.", "la"],
  wide: [
    "sunnuntai",
    "maanantai",
    "tiistai",
    "keskiviikko",
    "torstai",
    "perjantai",
    "lauantai"
  ]
}, Hm = {
  narrow: j.narrow,
  short: j.short,
  abbreviated: j.abbreviated,
  wide: [
    "sunnuntaina",
    "maanantaina",
    "tiistaina",
    "keskiviikkona",
    "torstaina",
    "perjantaina",
    "lauantaina"
  ]
}, Xm = {
  narrow: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä"
  },
  abbreviated: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyö",
    noon: "keskipäivä",
    morning: "ap",
    afternoon: "ip",
    evening: "illalla",
    night: "yöllä"
  },
  wide: {
    am: "ap",
    pm: "ip",
    midnight: "keskiyöllä",
    noon: "keskipäivällä",
    morning: "aamupäivällä",
    afternoon: "iltapäivällä",
    evening: "illalla",
    night: "yöllä"
  }
}, Em = (e, a) => Number(e) + ".", Fm = {
  ordinalNumber: Em,
  era: r({
    values: Sm,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Vm,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: H,
    defaultWidth: "wide",
    formattingValues: Cm,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: j,
    defaultWidth: "wide",
    formattingValues: Hm,
    defaultFormattingWidth: "wide"
  }),
  dayPeriod: r({
    values: Xm,
    defaultWidth: "wide"
  })
}, qm = /^(\d+)(\.)/i, Lm = /\d+/i, Am = {
  narrow: /^(e|j)/i,
  abbreviated: /^(eaa.|jaa.)/i,
  wide: /^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i
}, Om = {
  any: [/^e/i, /^j/i]
}, Gm = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]\.? kvartaali/i
}, Im = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Qm = {
  narrow: /^[thmkeslj]/i,
  abbreviated: /^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,
  wide: /^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i
}, Ym = {
  narrow: [
    /^t/i,
    /^h/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^k/i,
    /^h/i,
    /^e/i,
    /^s/i,
    /^l/i,
    /^m/i,
    /^j/i
  ],
  any: [
    /^ta/i,
    /^hel/i,
    /^maa/i,
    /^hu/i,
    /^to/i,
    /^k/i,
    /^hei/i,
    /^e/i,
    /^s/i,
    /^l/i,
    /^mar/i,
    /^j/i
  ]
}, Rm = {
  narrow: /^[smtkpl]/i,
  short: /^(su|ma|ti|ke|to|pe|la)/i,
  abbreviated: /^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,
  wide: /^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i
}, _m = {
  narrow: [/^s/i, /^m/i, /^t/i, /^k/i, /^t/i, /^p/i, /^l/i],
  any: [/^s/i, /^m/i, /^ti/i, /^k/i, /^to/i, /^p/i, /^l/i]
}, Jm = {
  narrow: /^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,
  any: /^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i
}, Km = {
  any: {
    am: /^ap/i,
    pm: /^ip/i,
    midnight: /^keskiyö/i,
    noon: /^keskipäivä/i,
    morning: /aamupäivällä/i,
    afternoon: /iltapäivällä/i,
    evening: /illalla/i,
    night: /yöllä/i
  }
}, Bm = {
  ordinalNumber: u({
    matchPattern: qm,
    parsePattern: Lm,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Am,
    defaultMatchWidth: "wide",
    parsePatterns: Om,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Gm,
    defaultMatchWidth: "wide",
    parsePatterns: Im,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Qm,
    defaultMatchWidth: "wide",
    parsePatterns: Ym,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Rm,
    defaultMatchWidth: "wide",
    parsePatterns: _m,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Jm,
    defaultMatchWidth: "any",
    parsePatterns: Km,
    defaultParseWidth: "any"
  })
}, ge = {
  code: "fi",
  formatDistance: Wm,
  formatLong: xm,
  formatRelative: Tm,
  localize: Fm,
  match: Bm,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Zm = {
  lessThanXSeconds: {
    one: {
      regular: "méně než 1 sekunda",
      past: "před méně než 1 sekundou",
      future: "za méně než 1 sekundu"
    },
    few: {
      regular: "méně než {{count}} sekundy",
      past: "před méně než {{count}} sekundami",
      future: "za méně než {{count}} sekundy"
    },
    many: {
      regular: "méně než {{count}} sekund",
      past: "před méně než {{count}} sekundami",
      future: "za méně než {{count}} sekund"
    }
  },
  xSeconds: {
    one: {
      regular: "1 sekunda",
      past: "před 1 sekundou",
      future: "za 1 sekundu"
    },
    few: {
      regular: "{{count}} sekundy",
      past: "před {{count}} sekundami",
      future: "za {{count}} sekundy"
    },
    many: {
      regular: "{{count}} sekund",
      past: "před {{count}} sekundami",
      future: "za {{count}} sekund"
    }
  },
  halfAMinute: {
    type: "other",
    other: {
      regular: "půl minuty",
      past: "před půl minutou",
      future: "za půl minuty"
    }
  },
  lessThanXMinutes: {
    one: {
      regular: "méně než 1 minuta",
      past: "před méně než 1 minutou",
      future: "za méně než 1 minutu"
    },
    few: {
      regular: "méně než {{count}} minuty",
      past: "před méně než {{count}} minutami",
      future: "za méně než {{count}} minuty"
    },
    many: {
      regular: "méně než {{count}} minut",
      past: "před méně než {{count}} minutami",
      future: "za méně než {{count}} minut"
    }
  },
  xMinutes: {
    one: {
      regular: "1 minuta",
      past: "před 1 minutou",
      future: "za 1 minutu"
    },
    few: {
      regular: "{{count}} minuty",
      past: "před {{count}} minutami",
      future: "za {{count}} minuty"
    },
    many: {
      regular: "{{count}} minut",
      past: "před {{count}} minutami",
      future: "za {{count}} minut"
    }
  },
  aboutXHours: {
    one: {
      regular: "přibližně 1 hodina",
      past: "přibližně před 1 hodinou",
      future: "přibližně za 1 hodinu"
    },
    few: {
      regular: "přibližně {{count}} hodiny",
      past: "přibližně před {{count}} hodinami",
      future: "přibližně za {{count}} hodiny"
    },
    many: {
      regular: "přibližně {{count}} hodin",
      past: "přibližně před {{count}} hodinami",
      future: "přibližně za {{count}} hodin"
    }
  },
  xHours: {
    one: {
      regular: "1 hodina",
      past: "před 1 hodinou",
      future: "za 1 hodinu"
    },
    few: {
      regular: "{{count}} hodiny",
      past: "před {{count}} hodinami",
      future: "za {{count}} hodiny"
    },
    many: {
      regular: "{{count}} hodin",
      past: "před {{count}} hodinami",
      future: "za {{count}} hodin"
    }
  },
  xDays: {
    one: {
      regular: "1 den",
      past: "před 1 dnem",
      future: "za 1 den"
    },
    few: {
      regular: "{{count}} dny",
      past: "před {{count}} dny",
      future: "za {{count}} dny"
    },
    many: {
      regular: "{{count}} dní",
      past: "před {{count}} dny",
      future: "za {{count}} dní"
    }
  },
  aboutXWeeks: {
    one: {
      regular: "přibližně 1 týden",
      past: "přibližně před 1 týdnem",
      future: "přibližně za 1 týden"
    },
    few: {
      regular: "přibližně {{count}} týdny",
      past: "přibližně před {{count}} týdny",
      future: "přibližně za {{count}} týdny"
    },
    many: {
      regular: "přibližně {{count}} týdnů",
      past: "přibližně před {{count}} týdny",
      future: "přibližně za {{count}} týdnů"
    }
  },
  xWeeks: {
    one: {
      regular: "1 týden",
      past: "před 1 týdnem",
      future: "za 1 týden"
    },
    few: {
      regular: "{{count}} týdny",
      past: "před {{count}} týdny",
      future: "za {{count}} týdny"
    },
    many: {
      regular: "{{count}} týdnů",
      past: "před {{count}} týdny",
      future: "za {{count}} týdnů"
    }
  },
  aboutXMonths: {
    one: {
      regular: "přibližně 1 měsíc",
      past: "přibližně před 1 měsícem",
      future: "přibližně za 1 měsíc"
    },
    few: {
      regular: "přibližně {{count}} měsíce",
      past: "přibližně před {{count}} měsíci",
      future: "přibližně za {{count}} měsíce"
    },
    many: {
      regular: "přibližně {{count}} měsíců",
      past: "přibližně před {{count}} měsíci",
      future: "přibližně za {{count}} měsíců"
    }
  },
  xMonths: {
    one: {
      regular: "1 měsíc",
      past: "před 1 měsícem",
      future: "za 1 měsíc"
    },
    few: {
      regular: "{{count}} měsíce",
      past: "před {{count}} měsíci",
      future: "za {{count}} měsíce"
    },
    many: {
      regular: "{{count}} měsíců",
      past: "před {{count}} měsíci",
      future: "za {{count}} měsíců"
    }
  },
  aboutXYears: {
    one: {
      regular: "přibližně 1 rok",
      past: "přibližně před 1 rokem",
      future: "přibližně za 1 rok"
    },
    few: {
      regular: "přibližně {{count}} roky",
      past: "přibližně před {{count}} roky",
      future: "přibližně za {{count}} roky"
    },
    many: {
      regular: "přibližně {{count}} roků",
      past: "přibližně před {{count}} roky",
      future: "přibližně za {{count}} roků"
    }
  },
  xYears: {
    one: {
      regular: "1 rok",
      past: "před 1 rokem",
      future: "za 1 rok"
    },
    few: {
      regular: "{{count}} roky",
      past: "před {{count}} roky",
      future: "za {{count}} roky"
    },
    many: {
      regular: "{{count}} roků",
      past: "před {{count}} roky",
      future: "za {{count}} roků"
    }
  },
  overXYears: {
    one: {
      regular: "více než 1 rok",
      past: "před více než 1 rokem",
      future: "za více než 1 rok"
    },
    few: {
      regular: "více než {{count}} roky",
      past: "před více než {{count}} roky",
      future: "za více než {{count}} roky"
    },
    many: {
      regular: "více než {{count}} roků",
      past: "před více než {{count}} roky",
      future: "za více než {{count}} roků"
    }
  },
  almostXYears: {
    one: {
      regular: "skoro 1 rok",
      past: "skoro před 1 rokem",
      future: "skoro za 1 rok"
    },
    few: {
      regular: "skoro {{count}} roky",
      past: "skoro před {{count}} roky",
      future: "skoro za {{count}} roky"
    },
    many: {
      regular: "skoro {{count}} roků",
      past: "skoro před {{count}} roky",
      future: "skoro za {{count}} roků"
    }
  }
}, Um = (e, a, t) => {
  let n;
  const i = Zm[e];
  i.type === "other" ? n = i.other : a === 1 ? n = i.one : a > 1 && a < 5 ? n = i.few : n = i.many;
  const m = (t == null ? void 0 : t.addSuffix) === !0, d = t == null ? void 0 : t.comparison;
  let l;
  return m && d === -1 ? l = n.past : m && d === 1 ? l = n.future : l = n.regular, l.replace("{{count}}", String(a));
}, el = {
  full: "EEEE, d. MMMM yyyy",
  long: "d. MMMM yyyy",
  medium: "d. M. yyyy",
  short: "dd.MM.yyyy"
}, tl = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, al = {
  full: "{{date}} 'v' {{time}}",
  long: "{{date}} 'v' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, nl = {
  date: s({
    formats: el,
    defaultWidth: "full"
  }),
  time: s({
    formats: tl,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: al,
    defaultWidth: "full"
  })
}, il = [
  "neděli",
  "pondělí",
  "úterý",
  "středu",
  "čtvrtek",
  "pátek",
  "sobotu"
], rl = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: (e) => {
    const a = e.getDay();
    return "'v " + il[a] + " o' p";
  },
  other: "P"
}, ol = (e, a) => {
  const t = rl[e];
  return typeof t == "function" ? t(a) : t;
}, sl = {
  narrow: ["př. n. l.", "n. l."],
  abbreviated: ["př. n. l.", "n. l."],
  wide: ["před naším letopočtem", "našeho letopočtu"]
}, dl = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"],
  wide: ["1. čtvrtletí", "2. čtvrtletí", "3. čtvrtletí", "4. čtvrtletí"]
}, ul = {
  narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
  abbreviated: [
    "led",
    "úno",
    "bře",
    "dub",
    "kvě",
    "čvn",
    "čvc",
    "srp",
    "zář",
    "říj",
    "lis",
    "pro"
  ],
  wide: [
    "leden",
    "únor",
    "březen",
    "duben",
    "květen",
    "červen",
    "červenec",
    "srpen",
    "září",
    "říjen",
    "listopad",
    "prosinec"
  ]
}, ml = {
  narrow: ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"],
  abbreviated: [
    "led",
    "úno",
    "bře",
    "dub",
    "kvě",
    "čvn",
    "čvc",
    "srp",
    "zář",
    "říj",
    "lis",
    "pro"
  ],
  wide: [
    "ledna",
    "února",
    "března",
    "dubna",
    "května",
    "června",
    "července",
    "srpna",
    "září",
    "října",
    "listopadu",
    "prosince"
  ]
}, ll = {
  narrow: ["ne", "po", "út", "st", "čt", "pá", "so"],
  short: ["ne", "po", "út", "st", "čt", "pá", "so"],
  abbreviated: ["ned", "pon", "úte", "stř", "čtv", "pát", "sob"],
  wide: ["neděle", "pondělí", "úterý", "středa", "čtvrtek", "pátek", "sobota"]
}, cl = {
  narrow: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  },
  abbreviated: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  },
  wide: {
    am: "dopoledne",
    pm: "odpoledne",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  }
}, hl = {
  narrow: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  },
  abbreviated: {
    am: "dop.",
    pm: "odp.",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  },
  wide: {
    am: "dopoledne",
    pm: "odpoledne",
    midnight: "půlnoc",
    noon: "poledne",
    morning: "ráno",
    afternoon: "odpoledne",
    evening: "večer",
    night: "noc"
  }
}, fl = (e, a) => Number(e) + ".", gl = {
  ordinalNumber: fl,
  era: r({
    values: sl,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: dl,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: ul,
    defaultWidth: "wide",
    formattingValues: ml,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: ll,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: cl,
    defaultWidth: "wide",
    formattingValues: hl,
    defaultFormattingWidth: "wide"
  })
}, pl = /^(\d+)\.?/i, vl = /\d+/i, bl = {
  narrow: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  abbreviated: /^(p[řr](\.|ed) Kr\.|p[řr](\.|ed) n\. l\.|po Kr\.|n\. l\.)/i,
  wide: /^(p[řr](\.|ed) Kristem|p[řr](\.|ed) na[šs][íi]m letopo[čc]tem|po Kristu|na[šs]eho letopo[čc]tu)/i
}, wl = {
  any: [/^p[řr]/i, /^(po|n)/i]
}, yl = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]\. [čc]tvrtlet[íi]/i,
  wide: /^[1234]\. [čc]tvrtlet[íi]/i
}, Pl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, kl = {
  narrow: /^[lúubdkčcszřrlp]/i,
  abbreviated: /^(led|[úu]no|b[řr]e|dub|kv[ěe]|[čc]vn|[čc]vc|srp|z[áa][řr]|[řr][íi]j|lis|pro)/i,
  wide: /^(leden|ledna|[úu]nora?|b[řr]ezen|b[řr]ezna|duben|dubna|kv[ěe]ten|kv[ěe]tna|[čc]erven(ec|ce)?|[čc]ervna|srpen|srpna|z[áa][řr][íi]|[řr][íi]jen|[řr][íi]jna|listopad(a|u)?|prosinec|prosince)/i
}, Ml = {
  narrow: [
    /^l/i,
    /^[úu]/i,
    /^b/i,
    /^d/i,
    /^k/i,
    /^[čc]/i,
    /^[čc]/i,
    /^s/i,
    /^z/i,
    /^[řr]/i,
    /^l/i,
    /^p/i
  ],
  any: [
    /^led/i,
    /^[úu]n/i,
    /^b[řr]e/i,
    /^dub/i,
    /^kv[ěe]/i,
    /^[čc]vn|[čc]erven(?!\w)|[čc]ervna/i,
    /^[čc]vc|[čc]erven(ec|ce)/i,
    /^srp/i,
    /^z[áa][řr]/i,
    /^[řr][íi]j/i,
    /^lis/i,
    /^pro/i
  ]
}, $l = {
  narrow: /^[npuúsčps]/i,
  short: /^(ne|po|[úu]t|st|[čc]t|p[áa]|so)/i,
  abbreviated: /^(ned|pon|[úu]te|st[rř]|[čc]tv|p[áa]t|sob)/i,
  wide: /^(ned[ěe]le|pond[ěe]l[íi]|[úu]ter[ýy]|st[řr]eda|[čc]tvrtek|p[áa]tek|sobota)/i
}, Wl = {
  narrow: [/^n/i, /^p/i, /^[úu]/i, /^s/i, /^[čc]/i, /^p/i, /^s/i],
  any: [/^ne/i, /^po/i, /^[úu]t/i, /^st/i, /^[čc]t/i, /^p[áa]/i, /^so/i]
}, zl = {
  any: /^dopoledne|dop\.?|odpoledne|odp\.?|p[ůu]lnoc|poledne|r[áa]no|odpoledne|ve[čc]er|(v )?noci?/i
}, jl = {
  any: {
    am: /^dop/i,
    pm: /^odp/i,
    midnight: /^p[ůu]lnoc/i,
    noon: /^poledne/i,
    morning: /r[áa]no/i,
    afternoon: /odpoledne/i,
    evening: /ve[čc]er/i,
    night: /noc/i
  }
}, Dl = {
  ordinalNumber: u({
    matchPattern: pl,
    parsePattern: vl,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: bl,
    defaultMatchWidth: "wide",
    parsePatterns: wl,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: yl,
    defaultMatchWidth: "wide",
    parsePatterns: Pl,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: kl,
    defaultMatchWidth: "wide",
    parsePatterns: Ml,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: $l,
    defaultMatchWidth: "wide",
    parsePatterns: Wl,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: zl,
    defaultMatchWidth: "any",
    parsePatterns: jl,
    defaultParseWidth: "any"
  })
}, pe = {
  code: "cs",
  formatDistance: Um,
  formatLong: nl,
  formatRelative: ol,
  localize: gl,
  match: Dl,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, xl = {
  lessThanXSeconds: {
    one: "λιγότερο από ένα δευτερόλεπτο",
    other: "λιγότερο από {{count}} δευτερόλεπτα"
  },
  xSeconds: {
    one: "1 δευτερόλεπτο",
    other: "{{count}} δευτερόλεπτα"
  },
  halfAMinute: "μισό λεπτό",
  lessThanXMinutes: {
    one: "λιγότερο από ένα λεπτό",
    other: "λιγότερο από {{count}} λεπτά"
  },
  xMinutes: {
    one: "1 λεπτό",
    other: "{{count}} λεπτά"
  },
  aboutXHours: {
    one: "περίπου 1 ώρα",
    other: "περίπου {{count}} ώρες"
  },
  xHours: {
    one: "1 ώρα",
    other: "{{count}} ώρες"
  },
  xDays: {
    one: "1 ημέρα",
    other: "{{count}} ημέρες"
  },
  aboutXWeeks: {
    one: "περίπου 1 εβδομάδα",
    other: "περίπου {{count}} εβδομάδες"
  },
  xWeeks: {
    one: "1 εβδομάδα",
    other: "{{count}} εβδομάδες"
  },
  aboutXMonths: {
    one: "περίπου 1 μήνας",
    other: "περίπου {{count}} μήνες"
  },
  xMonths: {
    one: "1 μήνας",
    other: "{{count}} μήνες"
  },
  aboutXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  },
  xYears: {
    one: "1 χρόνο",
    other: "{{count}} χρόνια"
  },
  overXYears: {
    one: "πάνω από 1 χρόνο",
    other: "πάνω από {{count}} χρόνια"
  },
  almostXYears: {
    one: "περίπου 1 χρόνο",
    other: "περίπου {{count}} χρόνια"
  }
}, Nl = (e, a, t) => {
  let n;
  const i = xl[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "σε " + n : n + " πριν" : n;
}, Tl = {
  full: "EEEE, d MMMM y",
  long: "d MMMM y",
  medium: "d MMM y",
  short: "d/M/yy"
}, Sl = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Vl = {
  full: "{{date}} - {{time}}",
  long: "{{date}} - {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Cl = {
  date: s({
    formats: Tl,
    defaultWidth: "full"
  }),
  time: s({
    formats: Sl,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Vl,
    defaultWidth: "full"
  })
}, Hl = {
  lastWeek: (e) => {
    switch (e.getDay()) {
      case 6:
        return "'το προηγούμενο' eeee 'στις' p";
      default:
        return "'την προηγούμενη' eeee 'στις' p";
    }
  },
  yesterday: "'χθες στις' p",
  today: "'σήμερα στις' p",
  tomorrow: "'αύριο στις' p",
  nextWeek: "eeee 'στις' p",
  other: "P"
}, Xl = (e, a) => {
  const t = Hl[e];
  return typeof t == "function" ? t(a) : t;
}, El = {
  narrow: ["πΧ", "μΧ"],
  abbreviated: ["π.Χ.", "μ.Χ."],
  wide: ["προ Χριστού", "μετά Χριστόν"]
}, Fl = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"],
  wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"]
}, ql = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μάρ",
    "Απρ",
    "Μάι",
    "Ιούν",
    "Ιούλ",
    "Αύγ",
    "Σεπ",
    "Οκτ",
    "Νοέ",
    "Δεκ"
  ],
  wide: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος"
  ]
}, Ll = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μαρ",
    "Απρ",
    "Μαΐ",
    "Ιουν",
    "Ιουλ",
    "Αυγ",
    "Σεπ",
    "Οκτ",
    "Νοε",
    "Δεκ"
  ],
  wide: [
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαΐου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου"
  ]
}, Al = {
  narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"],
  short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
  abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  wide: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο"
  ]
}, Ol = {
  narrow: {
    am: "πμ",
    pm: "μμ",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  },
  abbreviated: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  },
  wide: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα"
  }
}, Gl = (e, a) => {
  const t = Number(e), n = a == null ? void 0 : a.unit;
  let i;
  return n === "year" || n === "month" ? i = "ος" : n === "week" || n === "dayOfYear" || n === "day" || n === "hour" || n === "date" ? i = "η" : i = "ο", t + i;
}, Il = {
  ordinalNumber: Gl,
  era: r({
    values: El,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Fl,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: ql,
    defaultWidth: "wide",
    formattingValues: Ll,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: Al,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Ol,
    defaultWidth: "wide"
  })
}, Ql = /^(\d+)(ος|η|ο)?/i, Yl = /\d+/i, Rl = {
  narrow: /^(πΧ|μΧ)/i,
  abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,
  wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i
}, _l = {
  any: [/^π/i, /^(μ|κ)/i]
}, Jl = {
  narrow: /^[1234]/i,
  abbreviated: /^τ[1234]/i,
  wide: /^[1234]ο? τρ(ί|ι)μηνο/i
}, Kl = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Bl = {
  narrow: /^[ιφμαμιιασονδ]/i,
  abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,
  wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i
}, Zl = {
  narrow: [
    /^ι/i,
    /^φ/i,
    /^μ/i,
    /^α/i,
    /^μ/i,
    /^ι/i,
    /^ι/i,
    /^α/i,
    /^σ/i,
    /^ο/i,
    /^ν/i,
    /^δ/i
  ],
  any: [
    /^ια/i,
    /^φ/i,
    /^μ[άα]ρ/i,
    /^απ/i,
    /^μ[άα][ιΐ]/i,
    /^ιο[ύυ]ν/i,
    /^ιο[ύυ]λ/i,
    /^α[ύυ]/i,
    /^σ/i,
    /^ο/i,
    /^ν/i,
    /^δ/i
  ]
}, Ul = {
  narrow: /^[κδτπσ]/i,
  short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,
  abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,
  wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i
}, ec = {
  narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i],
  any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i]
}, tc = {
  narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,
  any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i
}, ac = {
  any: {
    am: /^πμ|π\.\s?μ\./i,
    pm: /^μμ|μ\.\s?μ\./i,
    midnight: /^μεσάν/i,
    noon: /^μεσημ(έ|ε)/i,
    morning: /πρω(ί|ι)/i,
    afternoon: /απ(ό|ο)γευμα/i,
    evening: /βρ(ά|α)δυ/i,
    night: /ν(ύ|υ)χτα/i
  }
}, nc = {
  ordinalNumber: u({
    matchPattern: Ql,
    parsePattern: Yl,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Rl,
    defaultMatchWidth: "wide",
    parsePatterns: _l,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Jl,
    defaultMatchWidth: "wide",
    parsePatterns: Kl,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Bl,
    defaultMatchWidth: "wide",
    parsePatterns: Zl,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Ul,
    defaultMatchWidth: "wide",
    parsePatterns: ec,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: tc,
    defaultMatchWidth: "any",
    parsePatterns: ac,
    defaultParseWidth: "any"
  })
}, ve = {
  code: "el",
  formatDistance: Nl,
  formatLong: Cl,
  formatRelative: Xl,
  localize: Il,
  match: nc,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, ic = {
  lessThanXSeconds: {
    one: "פחות משנייה",
    two: "פחות משתי שניות",
    other: "פחות מ־{{count}} שניות"
  },
  xSeconds: {
    one: "שנייה",
    two: "שתי שניות",
    other: "{{count}} שניות"
  },
  halfAMinute: "חצי דקה",
  lessThanXMinutes: {
    one: "פחות מדקה",
    two: "פחות משתי דקות",
    other: "פחות מ־{{count}} דקות"
  },
  xMinutes: {
    one: "דקה",
    two: "שתי דקות",
    other: "{{count}} דקות"
  },
  aboutXHours: {
    one: "כשעה",
    two: "כשעתיים",
    other: "כ־{{count}} שעות"
  },
  xHours: {
    one: "שעה",
    two: "שעתיים",
    other: "{{count}} שעות"
  },
  xDays: {
    one: "יום",
    two: "יומיים",
    other: "{{count}} ימים"
  },
  aboutXWeeks: {
    one: "כשבוע",
    two: "כשבועיים",
    other: "כ־{{count}} שבועות"
  },
  xWeeks: {
    one: "שבוע",
    two: "שבועיים",
    other: "{{count}} שבועות"
  },
  aboutXMonths: {
    one: "כחודש",
    two: "כחודשיים",
    other: "כ־{{count}} חודשים"
  },
  xMonths: {
    one: "חודש",
    two: "חודשיים",
    other: "{{count}} חודשים"
  },
  aboutXYears: {
    one: "כשנה",
    two: "כשנתיים",
    other: "כ־{{count}} שנים"
  },
  xYears: {
    one: "שנה",
    two: "שנתיים",
    other: "{{count}} שנים"
  },
  overXYears: {
    one: "יותר משנה",
    two: "יותר משנתיים",
    other: "יותר מ־{{count}} שנים"
  },
  almostXYears: {
    one: "כמעט שנה",
    two: "כמעט שנתיים",
    other: "כמעט {{count}} שנים"
  }
}, rc = (e, a, t) => {
  if (e === "xDays" && (t != null && t.addSuffix) && a <= 2)
    return t.comparison && t.comparison > 0 ? a === 1 ? "מחר" : "מחרתיים" : a === 1 ? "אתמול" : "שלשום";
  let n;
  const i = ic[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : a === 2 ? n = i.two : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "בעוד " + n : "לפני " + n : n;
}, oc = {
  full: "EEEE, d בMMMM y",
  long: "d בMMMM y",
  medium: "d בMMM y",
  short: "d.M.y"
}, sc = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, dc = {
  full: "{{date}} 'בשעה' {{time}}",
  long: "{{date}} 'בשעה' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, uc = {
  date: s({
    formats: oc,
    defaultWidth: "full"
  }),
  time: s({
    formats: sc,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: dc,
    defaultWidth: "full"
  })
}, mc = {
  lastWeek: "eeee 'שעבר בשעה' p",
  yesterday: "'אתמול בשעה' p",
  today: "'היום בשעה' p",
  tomorrow: "'מחר בשעה' p",
  nextWeek: "eeee 'בשעה' p",
  other: "P"
}, lc = (e, a, t, n) => mc[e], cc = {
  narrow: ["לפנה״ס", "לספירה"],
  abbreviated: ["לפנה״ס", "לספירה"],
  wide: ["לפני הספירה", "לספירה"]
}, hc = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["רבעון 1", "רבעון 2", "רבעון 3", "רבעון 4"]
}, fc = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "ינו׳",
    "פבר׳",
    "מרץ",
    "אפר׳",
    "מאי",
    "יוני",
    "יולי",
    "אוג׳",
    "ספט׳",
    "אוק׳",
    "נוב׳",
    "דצמ׳"
  ],
  wide: [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר"
  ]
}, gc = {
  narrow: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
  short: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
  abbreviated: [
    "יום א׳",
    "יום ב׳",
    "יום ג׳",
    "יום ד׳",
    "יום ה׳",
    "יום ו׳",
    "שבת"
  ],
  wide: [
    "יום ראשון",
    "יום שני",
    "יום שלישי",
    "יום רביעי",
    "יום חמישי",
    "יום שישי",
    "יום שבת"
  ]
}, pc = {
  narrow: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בוקר",
    afternoon: "אחר הצהריים",
    evening: "ערב",
    night: "לילה"
  },
  abbreviated: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בוקר",
    afternoon: "אחר הצהריים",
    evening: "ערב",
    night: "לילה"
  },
  wide: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בוקר",
    afternoon: "אחר הצהריים",
    evening: "ערב",
    night: "לילה"
  }
}, vc = {
  narrow: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בבוקר",
    afternoon: "בצהריים",
    evening: "בערב",
    night: "בלילה"
  },
  abbreviated: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בבוקר",
    afternoon: "אחר הצהריים",
    evening: "בערב",
    night: "בלילה"
  },
  wide: {
    am: "לפנה״צ",
    pm: "אחה״צ",
    midnight: "חצות",
    noon: "צהריים",
    morning: "בבוקר",
    afternoon: "אחר הצהריים",
    evening: "בערב",
    night: "בלילה"
  }
}, bc = (e, a) => {
  const t = Number(e);
  if (t <= 0 || t > 10) return String(t);
  const n = String(a == null ? void 0 : a.unit), i = ["year", "hour", "minute", "second"].indexOf(n) >= 0, m = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שביעי",
    "שמיני",
    "תשיעי",
    "עשירי"
  ], d = [
    "ראשונה",
    "שנייה",
    "שלישית",
    "רביעית",
    "חמישית",
    "שישית",
    "שביעית",
    "שמינית",
    "תשיעית",
    "עשירית"
  ], l = t - 1;
  return i ? d[l] : m[l];
}, wc = {
  ordinalNumber: bc,
  era: r({
    values: cc,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: hc,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: fc,
    defaultWidth: "wide"
  }),
  day: r({
    values: gc,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: pc,
    defaultWidth: "wide",
    formattingValues: vc,
    defaultFormattingWidth: "wide"
  })
}, yc = /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i, Pc = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i, kc = {
  narrow: /^ל(ספירה|פנה״ס)/i,
  abbreviated: /^ל(ספירה|פנה״ס)/i,
  wide: /^ל(פני ה)?ספירה/i
}, Mc = {
  any: [/^לפ/i, /^לס/i]
}, $c = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^רבעון [1234]/i
}, Wc = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, zc = {
  narrow: /^\d+/i,
  abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
  wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i
}, jc = {
  narrow: [
    /^1$/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i
  ],
  any: [
    /^ינ/i,
    /^פ/i,
    /^מר/i,
    /^אפ/i,
    /^מא/i,
    /^יונ/i,
    /^יול/i,
    /^אוג/i,
    /^ס/i,
    /^אוק/i,
    /^נ/i,
    /^ד/i
  ]
}, Dc = {
  narrow: /^[אבגדהוש]׳/i,
  short: /^[אבגדהוש]׳/i,
  abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
  wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i
}, xc = {
  abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i],
  wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i],
  any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i]
}, Nc = {
  any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i
}, Tc = {
  any: {
    am: /^לפ/i,
    pm: /^אחה/i,
    midnight: /^ח/i,
    noon: /^צ/i,
    morning: /בוקר/i,
    afternoon: /בצ|אחר/i,
    evening: /ערב/i,
    night: /לילה/i
  }
}, Sc = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"], Vc = {
  ordinalNumber: u({
    matchPattern: yc,
    parsePattern: Pc,
    valueCallback: (e) => {
      const a = parseInt(e, 10);
      return isNaN(a) ? Sc.indexOf(e) + 1 : a;
    }
  }),
  era: o({
    matchPatterns: kc,
    defaultMatchWidth: "wide",
    parsePatterns: Mc,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: $c,
    defaultMatchWidth: "wide",
    parsePatterns: Wc,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: zc,
    defaultMatchWidth: "wide",
    parsePatterns: jc,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Dc,
    defaultMatchWidth: "wide",
    parsePatterns: xc,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: Nc,
    defaultMatchWidth: "any",
    parsePatterns: Tc,
    defaultParseWidth: "any"
  })
}, be = {
  code: "he",
  formatDistance: rc,
  formatLong: uc,
  formatRelative: lc,
  localize: wc,
  match: Vc,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, xe = {
  locale: {
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९",
    0: "०"
  },
  number: {
    "१": "1",
    "२": "2",
    "३": "3",
    "४": "4",
    "५": "5",
    "६": "6",
    "७": "7",
    "८": "8",
    "९": "9",
    "०": "0"
  }
}, Cc = {
  narrow: ["ईसा-पूर्व", "ईस्वी"],
  abbreviated: ["ईसा-पूर्व", "ईस्वी"],
  wide: ["ईसा-पूर्व", "ईसवी सन"]
}, Hc = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ति1", "ति2", "ति3", "ति4"],
  wide: ["पहली तिमाही", "दूसरी तिमाही", "तीसरी तिमाही", "चौथी तिमाही"]
}, Xc = {
  narrow: [
    "ज",
    "फ़",
    "मा",
    "अ",
    "मई",
    "जू",
    "जु",
    "अग",
    "सि",
    "अक्टू",
    "न",
    "दि"
  ],
  abbreviated: [
    "जन",
    "फ़र",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुल",
    "अग",
    "सित",
    "अक्टू",
    "नव",
    "दिस"
  ],
  wide: [
    "जनवरी",
    "फ़रवरी",
    "मार्च",
    "अप्रैल",
    "मई",
    "जून",
    "जुलाई",
    "अगस्त",
    "सितंबर",
    "अक्टूबर",
    "नवंबर",
    "दिसंबर"
  ]
}, Ec = {
  narrow: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  short: ["र", "सो", "मं", "बु", "गु", "शु", "श"],
  abbreviated: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
  wide: [
    "रविवार",
    "सोमवार",
    "मंगलवार",
    "बुधवार",
    "गुरुवार",
    "शुक्रवार",
    "शनिवार"
  ]
}, Fc = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  }
}, qc = {
  narrow: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  abbreviated: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  },
  wide: {
    am: "पूर्वाह्न",
    pm: "अपराह्न",
    midnight: "मध्यरात्रि",
    noon: "दोपहर",
    morning: "सुबह",
    afternoon: "दोपहर",
    evening: "शाम",
    night: "रात"
  }
}, Lc = (e, a) => {
  const t = Number(e);
  return Ne(t);
};
function Ac(e) {
  const a = e.toString().replace(/[१२३४५६७८९०]/g, function(t) {
    return xe.number[t];
  });
  return Number(a);
}
function Ne(e) {
  return e.toString().replace(/\d/g, function(a) {
    return xe.locale[a];
  });
}
const Oc = {
  ordinalNumber: Lc,
  era: r({
    values: Cc,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Hc,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Xc,
    defaultWidth: "wide"
  }),
  day: r({
    values: Ec,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Fc,
    defaultWidth: "wide",
    formattingValues: qc,
    defaultFormattingWidth: "wide"
  })
}, Gc = {
  lessThanXSeconds: {
    one: "१ सेकंड से कम",
    // CLDR #1310
    other: "{{count}} सेकंड से कम"
  },
  xSeconds: {
    one: "१ सेकंड",
    other: "{{count}} सेकंड"
  },
  halfAMinute: "आधा मिनट",
  lessThanXMinutes: {
    one: "१ मिनट से कम",
    other: "{{count}} मिनट से कम"
  },
  xMinutes: {
    one: "१ मिनट",
    // CLDR #1307
    other: "{{count}} मिनट"
  },
  aboutXHours: {
    one: "लगभग १ घंटा",
    other: "लगभग {{count}} घंटे"
  },
  xHours: {
    one: "१ घंटा",
    // CLDR #1304
    other: "{{count}} घंटे"
    // CLDR #4467
  },
  xDays: {
    one: "१ दिन",
    // CLDR #1286
    other: "{{count}} दिन"
  },
  aboutXWeeks: {
    one: "लगभग १ सप्ताह",
    other: "लगभग {{count}} सप्ताह"
  },
  xWeeks: {
    one: "१ सप्ताह",
    other: "{{count}} सप्ताह"
  },
  aboutXMonths: {
    one: "लगभग १ महीना",
    other: "लगभग {{count}} महीने"
  },
  xMonths: {
    one: "१ महीना",
    other: "{{count}} महीने"
  },
  aboutXYears: {
    one: "लगभग १ वर्ष",
    other: "लगभग {{count}} वर्ष"
    // CLDR #4823
  },
  xYears: {
    one: "१ वर्ष",
    other: "{{count}} वर्ष"
  },
  overXYears: {
    one: "१ वर्ष से अधिक",
    other: "{{count}} वर्ष से अधिक"
  },
  almostXYears: {
    one: "लगभग १ वर्ष",
    other: "लगभग {{count}} वर्ष"
  }
}, Ic = (e, a, t) => {
  let n;
  const i = Gc[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", Ne(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + "मे " : n + " पहले" : n;
}, Qc = {
  full: "EEEE, do MMMM, y",
  // CLDR #1787
  long: "do MMMM, y",
  // CLDR #1788
  medium: "d MMM, y",
  // CLDR #1789
  short: "dd/MM/yyyy"
  // CLDR #1790
}, Yc = {
  full: "h:mm:ss a zzzz",
  // CLDR #1791
  long: "h:mm:ss a z",
  // CLDR #1792
  medium: "h:mm:ss a",
  // CLDR #1793
  short: "h:mm a"
  // CLDR #1794
}, Rc = {
  full: "{{date}} 'को' {{time}}",
  // CLDR #1795
  long: "{{date}} 'को' {{time}}",
  // CLDR #1796
  medium: "{{date}}, {{time}}",
  // CLDR #1797
  short: "{{date}}, {{time}}"
  // CLDR #1798
}, _c = {
  date: s({
    formats: Qc,
    defaultWidth: "full"
  }),
  time: s({
    formats: Yc,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Rc,
    defaultWidth: "full"
  })
}, Jc = {
  lastWeek: "'पिछले' eeee p",
  yesterday: "'कल' p",
  today: "'आज' p",
  tomorrow: "'कल' p",
  nextWeek: "eeee 'को' p",
  other: "P"
}, Kc = (e, a, t, n) => Jc[e], Bc = /^[०१२३४५६७८९]+/i, Zc = /^[०१२३४५६७८९]+/i, Uc = {
  narrow: /^(ईसा-पूर्व|ईस्वी)/i,
  abbreviated: /^(ईसा\.?\s?पूर्व\.?|ईसा\.?)/i,
  wide: /^(ईसा-पूर्व|ईसवी पूर्व|ईसवी सन|ईसवी)/i
}, eh = {
  any: [/^b/i, /^(a|c)/i]
}, th = {
  narrow: /^[1234]/i,
  abbreviated: /^ति[1234]/i,
  wide: /^[1234](पहली|दूसरी|तीसरी|चौथी)? तिमाही/i
}, ah = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, nh = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[जफ़माअप्मईजूनजुअगसिअक्तनदि]/i,
  abbreviated: /^(जन|फ़र|मार्च|अप्|मई|जून|जुल|अग|सित|अक्तू|नव|दिस)/i,
  wide: /^(जनवरी|फ़रवरी|मार्च|अप्रैल|मई|जून|जुलाई|अगस्त|सितंबर|अक्तूबर|नवंबर|दिसंबर)/i
}, ih = {
  narrow: [
    /^ज/i,
    /^फ़/i,
    /^मा/i,
    /^अप्/i,
    /^मई/i,
    /^जू/i,
    /^जु/i,
    /^अग/i,
    /^सि/i,
    /^अक्तू/i,
    /^न/i,
    /^दि/i
  ],
  any: [
    /^जन/i,
    /^फ़/i,
    /^मा/i,
    /^अप्/i,
    /^मई/i,
    /^जू/i,
    /^जु/i,
    /^अग/i,
    /^सि/i,
    /^अक्तू/i,
    /^नव/i,
    /^दिस/i
  ]
}, rh = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[रविसोममंगलबुधगुरुशुक्रशनि]/i,
  short: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  abbreviated: /^(रवि|सोम|मंगल|बुध|गुरु|शुक्र|शनि)/i,
  wide: /^(रविवार|सोमवार|मंगलवार|बुधवार|गुरुवार|शुक्रवार|शनिवार)/i
}, oh = {
  narrow: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i],
  any: [/^रवि/i, /^सोम/i, /^मंगल/i, /^बुध/i, /^गुरु/i, /^शुक्र/i, /^शनि/i]
}, sh = {
  narrow: /^(पू|अ|म|द.\?|सु|दो|शा|रा)/i,
  any: /^(पूर्वाह्न|अपराह्न|म|द.\?|सु|दो|शा|रा)/i
}, dh = {
  any: {
    am: /^पूर्वाह्न/i,
    pm: /^अपराह्न/i,
    midnight: /^मध्य/i,
    noon: /^दो/i,
    morning: /सु/i,
    afternoon: /दो/i,
    evening: /शा/i,
    night: /रा/i
  }
}, uh = {
  ordinalNumber: u({
    matchPattern: Bc,
    parsePattern: Zc,
    valueCallback: Ac
  }),
  era: o({
    matchPatterns: Uc,
    defaultMatchWidth: "wide",
    parsePatterns: eh,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: th,
    defaultMatchWidth: "wide",
    parsePatterns: ah,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: nh,
    defaultMatchWidth: "wide",
    parsePatterns: ih,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: rh,
    defaultMatchWidth: "wide",
    parsePatterns: oh,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: sh,
    defaultMatchWidth: "any",
    parsePatterns: dh,
    defaultParseWidth: "any"
  })
}, we = {
  code: "hi",
  formatDistance: Ic,
  formatLong: _c,
  formatRelative: Kc,
  localize: Oc,
  match: uh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 4
  }
}, mh = {
  about: "körülbelül",
  over: "több mint",
  almost: "majdnem",
  lessthan: "kevesebb mint"
}, lh = {
  xseconds: " másodperc",
  halfaminute: "fél perc",
  xminutes: " perc",
  xhours: " óra",
  xdays: " nap",
  xweeks: " hét",
  xmonths: " hónap",
  xyears: " év"
}, ch = {
  xseconds: {
    "-1": " másodperccel ezelőtt",
    1: " másodperc múlva",
    0: " másodperce"
  },
  halfaminute: {
    "-1": "fél perccel ezelőtt",
    1: "fél perc múlva",
    0: "fél perce"
  },
  xminutes: {
    "-1": " perccel ezelőtt",
    1: " perc múlva",
    0: " perce"
  },
  xhours: {
    "-1": " órával ezelőtt",
    1: " óra múlva",
    0: " órája"
  },
  xdays: {
    "-1": " nappal ezelőtt",
    1: " nap múlva",
    0: " napja"
  },
  xweeks: {
    "-1": " héttel ezelőtt",
    1: " hét múlva",
    0: " hete"
  },
  xmonths: {
    "-1": " hónappal ezelőtt",
    1: " hónap múlva",
    0: " hónapja"
  },
  xyears: {
    "-1": " évvel ezelőtt",
    1: " év múlva",
    0: " éve"
  }
}, hh = (e, a, t) => {
  const n = e.match(/about|over|almost|lessthan/i), i = n ? e.replace(n[0], "") : e, m = (t == null ? void 0 : t.addSuffix) === !0, d = i.toLowerCase(), l = (t == null ? void 0 : t.comparison) || 0, g = m ? ch[d][l] : lh[d];
  let f = d === "halfaminute" ? g : a + g;
  if (n) {
    const v = n[0].toLowerCase();
    f = mh[v] + " " + f;
  }
  return f;
}, fh = {
  full: "y. MMMM d., EEEE",
  long: "y. MMMM d.",
  medium: "y. MMM d.",
  short: "y. MM. dd."
}, gh = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, ph = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, vh = {
  date: s({
    formats: fh,
    defaultWidth: "full"
  }),
  time: s({
    formats: gh,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: ph,
    defaultWidth: "full"
  })
}, bh = [
  "vasárnap",
  "hétfőn",
  "kedden",
  "szerdán",
  "csütörtökön",
  "pénteken",
  "szombaton"
];
function ye(e) {
  return (a) => {
    const t = bh[a.getDay()];
    return `${e ? "" : "'múlt' "}'${t}' p'-kor'`;
  };
}
const wh = {
  lastWeek: ye(!1),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: ye(!0),
  other: "P"
}, yh = (e, a) => {
  const t = wh[e];
  return typeof t == "function" ? t(a) : t;
}, Ph = {
  narrow: ["ie.", "isz."],
  abbreviated: ["i. e.", "i. sz."],
  wide: ["Krisztus előtt", "időszámításunk szerint"]
}, kh = {
  narrow: ["1.", "2.", "3.", "4."],
  abbreviated: ["1. n.év", "2. n.év", "3. n.év", "4. n.év"],
  wide: ["1. negyedév", "2. negyedév", "3. negyedév", "4. negyedév"]
}, Mh = {
  narrow: ["I.", "II.", "III.", "IV."],
  abbreviated: ["I. n.év", "II. n.év", "III. n.év", "IV. n.év"],
  wide: ["I. negyedév", "II. negyedév", "III. negyedév", "IV. negyedév"]
}, $h = {
  narrow: ["J", "F", "M", "Á", "M", "J", "J", "A", "Sz", "O", "N", "D"],
  abbreviated: [
    "jan.",
    "febr.",
    "márc.",
    "ápr.",
    "máj.",
    "jún.",
    "júl.",
    "aug.",
    "szept.",
    "okt.",
    "nov.",
    "dec."
  ],
  wide: [
    "január",
    "február",
    "március",
    "április",
    "május",
    "június",
    "július",
    "augusztus",
    "szeptember",
    "október",
    "november",
    "december"
  ]
}, Wh = {
  narrow: ["V", "H", "K", "Sz", "Cs", "P", "Sz"],
  short: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  abbreviated: ["V", "H", "K", "Sze", "Cs", "P", "Szo"],
  wide: [
    "vasárnap",
    "hétfő",
    "kedd",
    "szerda",
    "csütörtök",
    "péntek",
    "szombat"
  ]
}, zh = {
  narrow: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel"
  },
  abbreviated: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "du.",
    evening: "este",
    night: "éjjel"
  },
  wide: {
    am: "de.",
    pm: "du.",
    midnight: "éjfél",
    noon: "dél",
    morning: "reggel",
    afternoon: "délután",
    evening: "este",
    night: "éjjel"
  }
}, jh = (e, a) => Number(e) + ".", Dh = {
  ordinalNumber: jh,
  era: r({
    values: Ph,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: kh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1,
    formattingValues: Mh,
    defaultFormattingWidth: "wide"
  }),
  month: r({
    values: $h,
    defaultWidth: "wide"
  }),
  day: r({
    values: Wh,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: zh,
    defaultWidth: "wide"
  })
}, xh = /^(\d+)\.?/i, Nh = /\d+/i, Th = {
  narrow: /^(ie\.|isz\.)/i,
  abbreviated: /^(i\.\s?e\.?|b?\s?c\s?e|i\.\s?sz\.?)/i,
  wide: /^(Krisztus előtt|időszámításunk előtt|időszámításunk szerint|i\. sz\.)/i
}, Sh = {
  narrow: [/ie/i, /isz/i],
  abbreviated: [/^(i\.?\s?e\.?|b\s?ce)/i, /^(i\.?\s?sz\.?|c\s?e)/i],
  any: [/előtt/i, /(szerint|i. sz.)/i]
}, Vh = {
  narrow: /^[1234]\.?/i,
  abbreviated: /^[1234]?\.?\s?n\.év/i,
  wide: /^([1234]|I|II|III|IV)?\.?\s?negyedév/i
}, Ch = {
  any: [/1|I$/i, /2|II$/i, /3|III/i, /4|IV/i]
}, Hh = {
  narrow: /^[jfmaásond]|sz/i,
  abbreviated: /^(jan\.?|febr\.?|márc\.?|ápr\.?|máj\.?|jún\.?|júl\.?|aug\.?|szept\.?|okt\.?|nov\.?|dec\.?)/i,
  wide: /^(január|február|március|április|május|június|július|augusztus|szeptember|október|november|december)/i
}, Xh = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a|á/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s|sz/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^már/i,
    /^áp/i,
    /^máj/i,
    /^jún/i,
    /^júl/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Eh = {
  narrow: /^([vhkpc]|sz|cs|sz)/i,
  short: /^([vhkp]|sze|cs|szo)/i,
  abbreviated: /^([vhkp]|sze|cs|szo)/i,
  wide: /^(vasárnap|hétfő|kedd|szerda|csütörtök|péntek|szombat)/i
}, Fh = {
  narrow: [/^v/i, /^h/i, /^k/i, /^sz/i, /^c/i, /^p/i, /^sz/i],
  any: [/^v/i, /^h/i, /^k/i, /^sze/i, /^c/i, /^p/i, /^szo/i]
}, qh = {
  any: /^((de|du)\.?|éjfél|délután|dél|reggel|este|éjjel)/i
}, Lh = {
  any: {
    am: /^de\.?/i,
    pm: /^du\.?/i,
    midnight: /^éjf/i,
    noon: /^dé/i,
    morning: /reg/i,
    afternoon: /^délu\.?/i,
    evening: /es/i,
    night: /éjj/i
  }
}, Ah = {
  ordinalNumber: u({
    matchPattern: xh,
    parsePattern: Nh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Th,
    defaultMatchWidth: "wide",
    parsePatterns: Sh,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Vh,
    defaultMatchWidth: "wide",
    parsePatterns: Ch,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Hh,
    defaultMatchWidth: "wide",
    parsePatterns: Xh,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Eh,
    defaultMatchWidth: "wide",
    parsePatterns: Fh,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: qh,
    defaultMatchWidth: "any",
    parsePatterns: Lh,
    defaultParseWidth: "any"
  })
}, Pe = {
  code: "hu",
  formatDistance: hh,
  formatLong: vh,
  formatRelative: yh,
  localize: Dh,
  match: Ah,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Oh = {
  lessThanXSeconds: {
    one: "kurang dari 1 detik",
    other: "kurang dari {{count}} detik"
  },
  xSeconds: {
    one: "1 detik",
    other: "{{count}} detik"
  },
  halfAMinute: "setengah menit",
  lessThanXMinutes: {
    one: "kurang dari 1 menit",
    other: "kurang dari {{count}} menit"
  },
  xMinutes: {
    one: "1 menit",
    other: "{{count}} menit"
  },
  aboutXHours: {
    one: "sekitar 1 jam",
    other: "sekitar {{count}} jam"
  },
  xHours: {
    one: "1 jam",
    other: "{{count}} jam"
  },
  xDays: {
    one: "1 hari",
    other: "{{count}} hari"
  },
  aboutXWeeks: {
    one: "sekitar 1 minggu",
    other: "sekitar {{count}} minggu"
  },
  xWeeks: {
    one: "1 minggu",
    other: "{{count}} minggu"
  },
  aboutXMonths: {
    one: "sekitar 1 bulan",
    other: "sekitar {{count}} bulan"
  },
  xMonths: {
    one: "1 bulan",
    other: "{{count}} bulan"
  },
  aboutXYears: {
    one: "sekitar 1 tahun",
    other: "sekitar {{count}} tahun"
  },
  xYears: {
    one: "1 tahun",
    other: "{{count}} tahun"
  },
  overXYears: {
    one: "lebih dari 1 tahun",
    other: "lebih dari {{count}} tahun"
  },
  almostXYears: {
    one: "hampir 1 tahun",
    other: "hampir {{count}} tahun"
  }
}, Gh = (e, a, t) => {
  let n;
  const i = Oh[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", a.toString()), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "dalam waktu " + n : n + " yang lalu" : n;
}, Ih = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "d/M/yyyy"
}, Qh = {
  full: "HH.mm.ss",
  long: "HH.mm.ss",
  medium: "HH.mm",
  short: "HH.mm"
}, Yh = {
  full: "{{date}} 'pukul' {{time}}",
  long: "{{date}} 'pukul' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Rh = {
  date: s({
    formats: Ih,
    defaultWidth: "full"
  }),
  time: s({
    formats: Qh,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: Yh,
    defaultWidth: "full"
  })
}, _h = {
  lastWeek: "eeee 'lalu pukul' p",
  yesterday: "'Kemarin pukul' p",
  today: "'Hari ini pukul' p",
  tomorrow: "'Besok pukul' p",
  nextWeek: "eeee 'pukul' p",
  other: "P"
}, Jh = (e, a, t, n) => _h[e], Kh = {
  narrow: ["SM", "M"],
  abbreviated: ["SM", "M"],
  wide: ["Sebelum Masehi", "Masehi"]
}, Bh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["Kuartal ke-1", "Kuartal ke-2", "Kuartal ke-3", "Kuartal ke-4"]
}, Zh = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agt",
    "Sep",
    "Okt",
    "Nov",
    "Des"
  ],
  wide: [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
  ]
}, Uh = {
  narrow: ["M", "S", "S", "R", "K", "J", "S"],
  short: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  abbreviated: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
  wide: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
}, ef = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  }
}, tf = {
  narrow: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  },
  wide: {
    am: "AM",
    pm: "PM",
    midnight: "tengah malam",
    noon: "tengah hari",
    morning: "pagi",
    afternoon: "siang",
    evening: "sore",
    night: "malam"
  }
}, af = (e, a) => "ke-" + Number(e), nf = {
  ordinalNumber: af,
  era: r({
    values: Kh,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Bh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Zh,
    defaultWidth: "wide"
  }),
  day: r({
    values: Uh,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: ef,
    defaultWidth: "wide",
    formattingValues: tf,
    defaultFormattingWidth: "wide"
  })
}, rf = /^ke-(\d+)?/i, of = /\d+/i, sf = {
  narrow: /^(sm|m)/i,
  abbreviated: /^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,
  wide: /^(sebelum masehi|sebelum era umum|masehi|era umum)/i
}, df = {
  any: [/^s/i, /^(m|e)/i]
}, uf = {
  narrow: /^[1234]/i,
  abbreviated: /^K-?\s[1234]/i,
  wide: /^Kuartal ke-?\s?[1234]/i
}, mf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, lf = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,
  wide: /^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i
}, cf = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^ma/i,
    /^ap/i,
    /^me/i,
    /^jun/i,
    /^jul/i,
    /^ag/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, hf = {
  narrow: /^[srkjm]/i,
  short: /^(min|sen|sel|rab|kam|jum|sab)/i,
  abbreviated: /^(min|sen|sel|rab|kam|jum|sab)/i,
  wide: /^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i
}, ff = {
  narrow: [/^m/i, /^s/i, /^s/i, /^r/i, /^k/i, /^j/i, /^s/i],
  any: [/^m/i, /^sen/i, /^sel/i, /^r/i, /^k/i, /^j/i, /^sa/i]
}, gf = {
  narrow: /^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,
  any: /^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i
}, pf = {
  any: {
    am: /^a/i,
    pm: /^pm/i,
    midnight: /^tengah m/i,
    noon: /^tengah h/i,
    morning: /pagi/i,
    afternoon: /siang/i,
    evening: /sore/i,
    night: /malam/i
  }
}, vf = {
  ordinalNumber: u({
    matchPattern: rf,
    parsePattern: of,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: sf,
    defaultMatchWidth: "wide",
    parsePatterns: df,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: uf,
    defaultMatchWidth: "wide",
    parsePatterns: mf,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: lf,
    defaultMatchWidth: "wide",
    parsePatterns: cf,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: hf,
    defaultMatchWidth: "wide",
    parsePatterns: ff,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: gf,
    defaultMatchWidth: "any",
    parsePatterns: pf,
    defaultParseWidth: "any"
  })
}, ke = {
  code: "id",
  formatDistance: Gh,
  formatLong: Rh,
  formatRelative: Jh,
  localize: nf,
  match: vf,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, bf = {
  lessThanXSeconds: {
    one: "mai puțin de o secundă",
    other: "mai puțin de {{count}} secunde"
  },
  xSeconds: {
    one: "1 secundă",
    other: "{{count}} secunde"
  },
  halfAMinute: "jumătate de minut",
  lessThanXMinutes: {
    one: "mai puțin de un minut",
    other: "mai puțin de {{count}} minute"
  },
  xMinutes: {
    one: "1 minut",
    other: "{{count}} minute"
  },
  aboutXHours: {
    one: "circa 1 oră",
    other: "circa {{count}} ore"
  },
  xHours: {
    one: "1 oră",
    other: "{{count}} ore"
  },
  xDays: {
    one: "1 zi",
    other: "{{count}} zile"
  },
  aboutXWeeks: {
    one: "circa o săptămână",
    other: "circa {{count}} săptămâni"
  },
  xWeeks: {
    one: "1 săptămână",
    other: "{{count}} săptămâni"
  },
  aboutXMonths: {
    one: "circa 1 lună",
    other: "circa {{count}} luni"
  },
  xMonths: {
    one: "1 lună",
    other: "{{count}} luni"
  },
  aboutXYears: {
    one: "circa 1 an",
    other: "circa {{count}} ani"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} ani"
  },
  overXYears: {
    one: "peste 1 an",
    other: "peste {{count}} ani"
  },
  almostXYears: {
    one: "aproape 1 an",
    other: "aproape {{count}} ani"
  }
}, wf = (e, a, t) => {
  let n;
  const i = bf[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? "în " + n : n + " în urmă" : n;
}, yf = {
  full: "EEEE, d MMMM yyyy",
  long: "d MMMM yyyy",
  medium: "d MMM yyyy",
  short: "dd.MM.yyyy"
}, Pf = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, kf = {
  full: "{{date}} 'la' {{time}}",
  long: "{{date}} 'la' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Mf = {
  date: s({
    formats: yf,
    defaultWidth: "full"
  }),
  time: s({
    formats: Pf,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: kf,
    defaultWidth: "full"
  })
}, $f = {
  lastWeek: "eeee 'trecută la' p",
  yesterday: "'ieri la' p",
  today: "'astăzi la' p",
  tomorrow: "'mâine la' p",
  nextWeek: "eeee 'viitoare la' p",
  other: "P"
}, Wf = (e, a, t, n) => $f[e], zf = {
  narrow: ["Î", "D"],
  abbreviated: ["Î.d.C.", "D.C."],
  wide: ["Înainte de Cristos", "După Cristos"]
}, jf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: [
    "primul trimestru",
    "al doilea trimestru",
    "al treilea trimestru",
    "al patrulea trimestru"
  ]
}, Df = {
  narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
    "ian",
    "feb",
    "mar",
    "apr",
    "mai",
    "iun",
    "iul",
    "aug",
    "sep",
    "oct",
    "noi",
    "dec"
  ],
  wide: [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie"
  ]
}, xf = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["du", "lu", "ma", "mi", "jo", "vi", "sâ"],
  abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "sâm"],
  wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"]
}, Nf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "ami",
    morning: "dim",
    afternoon: "da",
    evening: "s",
    night: "n"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  }
}, Tf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte"
  }
}, Sf = (e, a) => String(e), Vf = {
  ordinalNumber: Sf,
  era: r({
    values: zf,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: jf,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Df,
    defaultWidth: "wide"
  }),
  day: r({
    values: xf,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Nf,
    defaultWidth: "wide",
    formattingValues: Tf,
    defaultFormattingWidth: "wide"
  })
}, Cf = /^(\d+)?/i, Hf = /\d+/i, Xf = {
  narrow: /^(Î|D)/i,
  abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
  wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
}, Ef = {
  any: [/^ÎC/i, /^DC/i],
  wide: [
    /^(Înainte de Cristos|Înaintea erei noastre)/i,
    /^(După Cristos|Era noastră)/i
  ]
}, Ff = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^trimestrul [1234]/i
}, qf = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Lf = {
  narrow: /^[ifmaasond]/i,
  abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
  wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
}, Af = {
  narrow: [
    /^i/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^i/i,
    /^i/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ia/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^iun/i,
    /^iul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, Of = {
  narrow: /^[dlmjvs]/i,
  short: /^(d|l|ma|mi|j|v|s)/i,
  abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
  wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
}, Gf = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
}, If = {
  narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
  any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
}, Qf = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /amiaza/i,
    morning: /dimineaţa/i,
    afternoon: /după-amiaza/i,
    evening: /seara/i,
    night: /noaptea/i
  }
}, Yf = {
  ordinalNumber: u({
    matchPattern: Cf,
    parsePattern: Hf,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Xf,
    defaultMatchWidth: "wide",
    parsePatterns: Ef,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Ff,
    defaultMatchWidth: "wide",
    parsePatterns: qf,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Lf,
    defaultMatchWidth: "wide",
    parsePatterns: Af,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Of,
    defaultMatchWidth: "wide",
    parsePatterns: Gf,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: If,
    defaultMatchWidth: "any",
    parsePatterns: Qf,
    defaultParseWidth: "any"
  })
}, Me = {
  code: "ro",
  formatDistance: wf,
  formatLong: Mf,
  formatRelative: Wf,
  localize: Vf,
  match: Yf,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, Rf = {
  lessThanXSeconds: {
    one: "น้อยกว่า 1 วินาที",
    other: "น้อยกว่า {{count}} วินาที"
  },
  xSeconds: {
    one: "1 วินาที",
    other: "{{count}} วินาที"
  },
  halfAMinute: "ครึ่งนาที",
  lessThanXMinutes: {
    one: "น้อยกว่า 1 นาที",
    other: "น้อยกว่า {{count}} นาที"
  },
  xMinutes: {
    one: "1 นาที",
    other: "{{count}} นาที"
  },
  aboutXHours: {
    one: "ประมาณ 1 ชั่วโมง",
    other: "ประมาณ {{count}} ชั่วโมง"
  },
  xHours: {
    one: "1 ชั่วโมง",
    other: "{{count}} ชั่วโมง"
  },
  xDays: {
    one: "1 วัน",
    other: "{{count}} วัน"
  },
  aboutXWeeks: {
    one: "ประมาณ 1 สัปดาห์",
    other: "ประมาณ {{count}} สัปดาห์"
  },
  xWeeks: {
    one: "1 สัปดาห์",
    other: "{{count}} สัปดาห์"
  },
  aboutXMonths: {
    one: "ประมาณ 1 เดือน",
    other: "ประมาณ {{count}} เดือน"
  },
  xMonths: {
    one: "1 เดือน",
    other: "{{count}} เดือน"
  },
  aboutXYears: {
    one: "ประมาณ 1 ปี",
    other: "ประมาณ {{count}} ปี"
  },
  xYears: {
    one: "1 ปี",
    other: "{{count}} ปี"
  },
  overXYears: {
    one: "มากกว่า 1 ปี",
    other: "มากกว่า {{count}} ปี"
  },
  almostXYears: {
    one: "เกือบ 1 ปี",
    other: "เกือบ {{count}} ปี"
  }
}, _f = (e, a, t) => {
  let n;
  const i = Rf[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? e === "halfAMinute" ? "ใน" + n : "ใน " + n : n + "ที่ผ่านมา" : n;
}, Jf = {
  full: "วันEEEEที่ do MMMM y",
  long: "do MMMM y",
  medium: "d MMM y",
  short: "dd/MM/yyyy"
}, Kf = {
  full: "H:mm:ss น. zzzz",
  long: "H:mm:ss น. z",
  medium: "H:mm:ss น.",
  short: "H:mm น."
}, Bf = {
  full: "{{date}} 'เวลา' {{time}}",
  long: "{{date}} 'เวลา' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Zf = {
  date: s({
    formats: Jf,
    defaultWidth: "full"
  }),
  time: s({
    formats: Kf,
    defaultWidth: "medium"
  }),
  dateTime: s({
    formats: Bf,
    defaultWidth: "full"
  })
}, Uf = {
  lastWeek: "eeee'ที่แล้วเวลา' p",
  yesterday: "'เมื่อวานนี้เวลา' p",
  today: "'วันนี้เวลา' p",
  tomorrow: "'พรุ่งนี้เวลา' p",
  nextWeek: "eeee 'เวลา' p",
  other: "P"
}, eg = (e, a, t, n) => Uf[e], tg = {
  narrow: ["B", "คศ"],
  abbreviated: ["BC", "ค.ศ."],
  wide: ["ปีก่อนคริสตกาล", "คริสต์ศักราช"]
}, ag = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["ไตรมาสแรก", "ไตรมาสที่สอง", "ไตรมาสที่สาม", "ไตรมาสที่สี่"]
}, ng = {
  narrow: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  short: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  abbreviated: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
  wide: ["อาทิตย์", "จันทร์", "อังคาร", "พุธ", "พฤหัสบดี", "ศุกร์", "เสาร์"]
}, ig = {
  narrow: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค."
  ],
  abbreviated: [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค."
  ],
  wide: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม"
  ]
}, rg = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "เช้า",
    afternoon: "บ่าย",
    evening: "เย็น",
    night: "กลางคืน"
  }
}, og = {
  narrow: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  abbreviated: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  },
  wide: {
    am: "ก่อนเที่ยง",
    pm: "หลังเที่ยง",
    midnight: "เที่ยงคืน",
    noon: "เที่ยง",
    morning: "ตอนเช้า",
    afternoon: "ตอนกลางวัน",
    evening: "ตอนเย็น",
    night: "ตอนกลางคืน"
  }
}, sg = (e, a) => String(e), dg = {
  ordinalNumber: sg,
  era: r({
    values: tg,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: ag,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: ig,
    defaultWidth: "wide"
  }),
  day: r({
    values: ng,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: rg,
    defaultWidth: "wide",
    formattingValues: og,
    defaultFormattingWidth: "wide"
  })
}, ug = /^\d+/i, mg = /\d+/i, lg = {
  narrow: /^([bB]|[aA]|คศ)/i,
  abbreviated: /^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,
  wide: /^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i
}, cg = {
  any: [/^[bB]/i, /^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]
}, hg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^ไตรมาส(ที่)? ?[1234]/i
}, fg = {
  any: [/(1|แรก|หนึ่ง)/i, /(2|สอง)/i, /(3|สาม)/i, /(4|สี่)/i]
}, gg = {
  narrow: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,
  abbreviated: /^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,
  wide: /^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i
}, pg = {
  wide: [
    /^มก/i,
    /^กุม/i,
    /^มี/i,
    /^เม/i,
    /^พฤษ/i,
    /^มิ/i,
    /^กรก/i,
    /^ส/i,
    /^กัน/i,
    /^ต/i,
    /^พฤศ/i,
    /^ธ/i
  ],
  any: [
    /^ม\.?ค\.?/i,
    /^ก\.?พ\.?/i,
    /^มี\.?ค\.?/i,
    /^เม\.?ย\.?/i,
    /^พ\.?ค\.?/i,
    /^มิ\.?ย\.?/i,
    /^ก\.?ค\.?/i,
    /^ส\.?ค\.?/i,
    /^ก\.?ย\.?/i,
    /^ต\.?ค\.?/i,
    /^พ\.?ย\.?/i,
    /^ธ\.?ค\.?/i
  ]
}, vg = {
  narrow: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  short: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  abbreviated: /^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,
  wide: /^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i
}, bg = {
  wide: [/^อา/i, /^จั/i, /^อั/i, /^พุธ/i, /^พฤ/i, /^ศ/i, /^เส/i],
  any: [/^อา/i, /^จ/i, /^อ/i, /^พ(?!ฤ)/i, /^พฤ/i, /^ศ/i, /^ส/i]
}, wg = {
  any: /^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i
}, yg = {
  any: {
    am: /^ก่อนเที่ยง/i,
    pm: /^หลังเที่ยง/i,
    midnight: /^เที่ยงคืน/i,
    noon: /^เที่ยง/i,
    morning: /เช้า/i,
    afternoon: /บ่าย/i,
    evening: /เย็น/i,
    night: /กลางคืน/i
  }
}, Pg = {
  ordinalNumber: u({
    matchPattern: ug,
    parsePattern: mg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: lg,
    defaultMatchWidth: "wide",
    parsePatterns: cg,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: hg,
    defaultMatchWidth: "wide",
    parsePatterns: fg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: gg,
    defaultMatchWidth: "wide",
    parsePatterns: pg,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: vg,
    defaultMatchWidth: "wide",
    parsePatterns: bg,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: wg,
    defaultMatchWidth: "any",
    parsePatterns: yg,
    defaultParseWidth: "any"
  })
}, $e = {
  code: "th",
  formatDistance: _f,
  formatLong: Zf,
  formatRelative: eg,
  localize: dg,
  match: Pg,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};
function $(e, a) {
  if (e.one !== void 0 && a === 1)
    return e.one;
  const t = a % 10, n = a % 100;
  return t === 1 && n !== 11 ? e.singularNominative.replace("{{count}}", String(a)) : t >= 2 && t <= 4 && (n < 10 || n > 20) ? e.singularGenitive.replace("{{count}}", String(a)) : e.pluralGenitive.replace("{{count}}", String(a));
}
function h(e) {
  return (a, t) => t && t.addSuffix ? t.comparison && t.comparison > 0 ? e.future ? $(e.future, a) : "за " + $(e.regular, a) : e.past ? $(e.past, a) : $(e.regular, a) + " тому" : $(e.regular, a);
}
const kg = (e, a) => a && a.addSuffix ? a.comparison && a.comparison > 0 ? "за півхвилини" : "півхвилини тому" : "півхвилини", Mg = {
  lessThanXSeconds: h({
    regular: {
      one: "менше секунди",
      singularNominative: "менше {{count}} секунди",
      singularGenitive: "менше {{count}} секунд",
      pluralGenitive: "менше {{count}} секунд"
    },
    future: {
      one: "менше, ніж за секунду",
      singularNominative: "менше, ніж за {{count}} секунду",
      singularGenitive: "менше, ніж за {{count}} секунди",
      pluralGenitive: "менше, ніж за {{count}} секунд"
    }
  }),
  xSeconds: h({
    regular: {
      singularNominative: "{{count}} секунда",
      singularGenitive: "{{count}} секунди",
      pluralGenitive: "{{count}} секунд"
    },
    past: {
      singularNominative: "{{count}} секунду тому",
      singularGenitive: "{{count}} секунди тому",
      pluralGenitive: "{{count}} секунд тому"
    },
    future: {
      singularNominative: "за {{count}} секунду",
      singularGenitive: "за {{count}} секунди",
      pluralGenitive: "за {{count}} секунд"
    }
  }),
  halfAMinute: kg,
  lessThanXMinutes: h({
    regular: {
      one: "менше хвилини",
      singularNominative: "менше {{count}} хвилини",
      singularGenitive: "менше {{count}} хвилин",
      pluralGenitive: "менше {{count}} хвилин"
    },
    future: {
      one: "менше, ніж за хвилину",
      singularNominative: "менше, ніж за {{count}} хвилину",
      singularGenitive: "менше, ніж за {{count}} хвилини",
      pluralGenitive: "менше, ніж за {{count}} хвилин"
    }
  }),
  xMinutes: h({
    regular: {
      singularNominative: "{{count}} хвилина",
      singularGenitive: "{{count}} хвилини",
      pluralGenitive: "{{count}} хвилин"
    },
    past: {
      singularNominative: "{{count}} хвилину тому",
      singularGenitive: "{{count}} хвилини тому",
      pluralGenitive: "{{count}} хвилин тому"
    },
    future: {
      singularNominative: "за {{count}} хвилину",
      singularGenitive: "за {{count}} хвилини",
      pluralGenitive: "за {{count}} хвилин"
    }
  }),
  aboutXHours: h({
    regular: {
      singularNominative: "близько {{count}} години",
      singularGenitive: "близько {{count}} годин",
      pluralGenitive: "близько {{count}} годин"
    },
    future: {
      singularNominative: "приблизно за {{count}} годину",
      singularGenitive: "приблизно за {{count}} години",
      pluralGenitive: "приблизно за {{count}} годин"
    }
  }),
  xHours: h({
    regular: {
      singularNominative: "{{count}} годину",
      singularGenitive: "{{count}} години",
      pluralGenitive: "{{count}} годин"
    }
  }),
  xDays: h({
    regular: {
      singularNominative: "{{count}} день",
      singularGenitive: "{{count}} днi",
      pluralGenitive: "{{count}} днів"
    }
  }),
  aboutXWeeks: h({
    regular: {
      singularNominative: "близько {{count}} тижня",
      singularGenitive: "близько {{count}} тижнів",
      pluralGenitive: "близько {{count}} тижнів"
    },
    future: {
      singularNominative: "приблизно за {{count}} тиждень",
      singularGenitive: "приблизно за {{count}} тижні",
      pluralGenitive: "приблизно за {{count}} тижнів"
    }
  }),
  xWeeks: h({
    regular: {
      singularNominative: "{{count}} тиждень",
      singularGenitive: "{{count}} тижні",
      pluralGenitive: "{{count}} тижнів"
    }
  }),
  aboutXMonths: h({
    regular: {
      singularNominative: "близько {{count}} місяця",
      singularGenitive: "близько {{count}} місяців",
      pluralGenitive: "близько {{count}} місяців"
    },
    future: {
      singularNominative: "приблизно за {{count}} місяць",
      singularGenitive: "приблизно за {{count}} місяці",
      pluralGenitive: "приблизно за {{count}} місяців"
    }
  }),
  xMonths: h({
    regular: {
      singularNominative: "{{count}} місяць",
      singularGenitive: "{{count}} місяці",
      pluralGenitive: "{{count}} місяців"
    }
  }),
  aboutXYears: h({
    regular: {
      singularNominative: "близько {{count}} року",
      singularGenitive: "близько {{count}} років",
      pluralGenitive: "близько {{count}} років"
    },
    future: {
      singularNominative: "приблизно за {{count}} рік",
      singularGenitive: "приблизно за {{count}} роки",
      pluralGenitive: "приблизно за {{count}} років"
    }
  }),
  xYears: h({
    regular: {
      singularNominative: "{{count}} рік",
      singularGenitive: "{{count}} роки",
      pluralGenitive: "{{count}} років"
    }
  }),
  overXYears: h({
    regular: {
      singularNominative: "більше {{count}} року",
      singularGenitive: "більше {{count}} років",
      pluralGenitive: "більше {{count}} років"
    },
    future: {
      singularNominative: "більше, ніж за {{count}} рік",
      singularGenitive: "більше, ніж за {{count}} роки",
      pluralGenitive: "більше, ніж за {{count}} років"
    }
  }),
  almostXYears: h({
    regular: {
      singularNominative: "майже {{count}} рік",
      singularGenitive: "майже {{count}} роки",
      pluralGenitive: "майже {{count}} років"
    },
    future: {
      singularNominative: "майже за {{count}} рік",
      singularGenitive: "майже за {{count}} роки",
      pluralGenitive: "майже за {{count}} років"
    }
  })
}, $g = (e, a, t) => (t = t || {}, Mg[e](a, t)), Wg = {
  full: "EEEE, do MMMM y 'р.'",
  long: "do MMMM y 'р.'",
  medium: "d MMM y 'р.'",
  short: "dd.MM.y"
}, zg = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, jg = {
  full: "{{date}} 'о' {{time}}",
  long: "{{date}} 'о' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Dg = {
  date: s({
    formats: Wg,
    defaultWidth: "full"
  }),
  time: s({
    formats: zg,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: jg,
    defaultWidth: "full"
  })
}, q = [
  "неділю",
  "понеділок",
  "вівторок",
  "середу",
  "четвер",
  "п’ятницю",
  "суботу"
];
function xg(e) {
  const a = q[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у минулу " + a + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у минулий " + a + " о' p";
  }
}
function Te(e) {
  return "'у " + q[e] + " о' p";
}
function Ng(e) {
  const a = q[e];
  switch (e) {
    case 0:
    case 3:
    case 5:
    case 6:
      return "'у наступну " + a + " о' p";
    case 1:
    case 2:
    case 4:
      return "'у наступний " + a + " о' p";
  }
}
const Tg = (e, a, t) => {
  const n = X(e), i = n.getDay();
  return b(n, a, t) ? Te(i) : xg(i);
}, Sg = (e, a, t) => {
  const n = X(e), i = n.getDay();
  return b(n, a, t) ? Te(i) : Ng(i);
}, Vg = {
  lastWeek: Tg,
  yesterday: "'вчора о' p",
  today: "'сьогодні о' p",
  tomorrow: "'завтра о' p",
  nextWeek: Sg,
  other: "P"
}, Cg = (e, a, t, n) => {
  const i = Vg[e];
  return typeof i == "function" ? i(a, t, n) : i;
}, Hg = {
  narrow: ["до н.е.", "н.е."],
  abbreviated: ["до н. е.", "н. е."],
  wide: ["до нашої ери", "нашої ери"]
}, Xg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-й кв.", "2-й кв.", "3-й кв.", "4-й кв."],
  wide: ["1-й квартал", "2-й квартал", "3-й квартал", "4-й квартал"]
}, Eg = {
  // ДСТУ 3582:2013
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січень",
    "лютий",
    "березень",
    "квітень",
    "травень",
    "червень",
    "липень",
    "серпень",
    "вересень",
    "жовтень",
    "листопад",
    "грудень"
  ]
}, Fg = {
  narrow: ["С", "Л", "Б", "К", "Т", "Ч", "Л", "С", "В", "Ж", "Л", "Г"],
  abbreviated: [
    "січ.",
    "лют.",
    "берез.",
    "квіт.",
    "трав.",
    "черв.",
    "лип.",
    "серп.",
    "верес.",
    "жовт.",
    "листоп.",
    "груд."
  ],
  wide: [
    "січня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня"
  ]
}, qg = {
  narrow: ["Н", "П", "В", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "вт", "ср", "чт", "пт", "сб"],
  abbreviated: ["нед", "пон", "вів", "сер", "чтв", "птн", "суб"],
  wide: [
    "неділя",
    "понеділок",
    "вівторок",
    "середа",
    "четвер",
    "п’ятниця",
    "субота"
  ]
}, Lg = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранок",
    afternoon: "день",
    evening: "веч.",
    night: "ніч"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранок",
    afternoon: "день",
    evening: "вечір",
    night: "ніч"
  }
}, Ag = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "півн.",
    noon: "пол.",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "північ",
    noon: "полудень",
    morning: "ранку",
    afternoon: "дня",
    evening: "веч.",
    night: "ночі"
  }
}, Og = (e, a) => {
  const t = String(a == null ? void 0 : a.unit), n = Number(e);
  let i;
  return t === "date" ? n === 3 || n === 23 ? i = "-є" : i = "-е" : t === "minute" || t === "second" || t === "hour" ? i = "-а" : i = "-й", n + i;
}, Gg = {
  ordinalNumber: Og,
  era: r({
    values: Hg,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: Xg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: Eg,
    defaultWidth: "wide",
    formattingValues: Fg,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: qg,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: Lg,
    defaultWidth: "any",
    formattingValues: Ag,
    defaultFormattingWidth: "wide"
  })
}, Ig = /^(\d+)(-?(е|й|є|а|я))?/i, Qg = /\d+/i, Yg = {
  narrow: /^((до )?н\.?\s?е\.?)/i,
  abbreviated: /^((до )?н\.?\s?е\.?)/i,
  wide: /^(до нашої ери|нашої ери|наша ера)/i
}, Rg = {
  any: [/^д/i, /^н/i]
}, _g = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[иі]?й?)? кв.?/i,
  wide: /^[1234](-?[иі]?й?)? квартал/i
}, Jg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Kg = {
  narrow: /^[слбктчвжг]/i,
  abbreviated: /^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,
  wide: /^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i
}, Bg = {
  narrow: [
    /^с/i,
    /^л/i,
    /^б/i,
    /^к/i,
    /^т/i,
    /^ч/i,
    /^л/i,
    /^с/i,
    /^в/i,
    /^ж/i,
    /^л/i,
    /^г/i
  ],
  any: [
    /^сі/i,
    /^лю/i,
    /^б/i,
    /^к/i,
    /^т/i,
    /^ч/i,
    /^лип/i,
    /^се/i,
    /^в/i,
    /^ж/i,
    /^лис/i,
    /^г/i
  ]
}, Zg = {
  narrow: /^[нпвсч]/i,
  short: /^(нд|пн|вт|ср|чт|пт|сб)\.?/i,
  abbreviated: /^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,
  wide: /^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i
}, Ug = {
  narrow: [/^н/i, /^п/i, /^в/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[он]/i, /^в/i, /^с[ер]/i, /^ч/i, /^п\W*?[ят]/i, /^с[уб]/i]
}, ep = {
  narrow: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  abbreviated: /^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,
  wide: /^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i
}, tp = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^півн/i,
    noon: /^пол/i,
    morning: /^р/i,
    afternoon: /^д[ен]/i,
    evening: /^в/i,
    night: /^н/i
  }
}, ap = {
  ordinalNumber: u({
    matchPattern: Ig,
    parsePattern: Qg,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Rg,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: _g,
    defaultMatchWidth: "wide",
    parsePatterns: Jg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: Kg,
    defaultMatchWidth: "wide",
    parsePatterns: Bg,
    defaultParseWidth: "any"
  }),
  day: o({
    matchPatterns: Zg,
    defaultMatchWidth: "wide",
    parsePatterns: Ug,
    defaultParseWidth: "any"
  }),
  dayPeriod: o({
    matchPatterns: ep,
    defaultMatchWidth: "wide",
    parsePatterns: tp,
    defaultParseWidth: "any"
  })
}, We = {
  code: "uk",
  formatDistance: $g,
  formatLong: Dg,
  formatRelative: Cg,
  localize: Gg,
  match: ap,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, np = {
  lessThanXSeconds: {
    one: "dưới 1 giây",
    other: "dưới {{count}} giây"
  },
  xSeconds: {
    one: "1 giây",
    other: "{{count}} giây"
  },
  halfAMinute: "nửa phút",
  lessThanXMinutes: {
    one: "dưới 1 phút",
    other: "dưới {{count}} phút"
  },
  xMinutes: {
    one: "1 phút",
    other: "{{count}} phút"
  },
  aboutXHours: {
    one: "khoảng 1 giờ",
    other: "khoảng {{count}} giờ"
  },
  xHours: {
    one: "1 giờ",
    other: "{{count}} giờ"
  },
  xDays: {
    one: "1 ngày",
    other: "{{count}} ngày"
  },
  aboutXWeeks: {
    one: "khoảng 1 tuần",
    other: "khoảng {{count}} tuần"
  },
  xWeeks: {
    one: "1 tuần",
    other: "{{count}} tuần"
  },
  aboutXMonths: {
    one: "khoảng 1 tháng",
    other: "khoảng {{count}} tháng"
  },
  xMonths: {
    one: "1 tháng",
    other: "{{count}} tháng"
  },
  aboutXYears: {
    one: "khoảng 1 năm",
    other: "khoảng {{count}} năm"
  },
  xYears: {
    one: "1 năm",
    other: "{{count}} năm"
  },
  overXYears: {
    one: "hơn 1 năm",
    other: "hơn {{count}} năm"
  },
  almostXYears: {
    one: "gần 1 năm",
    other: "gần {{count}} năm"
  }
}, ip = (e, a, t) => {
  let n;
  const i = np[e];
  return typeof i == "string" ? n = i : a === 1 ? n = i.one : n = i.other.replace("{{count}}", String(a)), t != null && t.addSuffix ? t.comparison && t.comparison > 0 ? n + " nữa" : n + " trước" : n;
}, rp = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017
  full: "EEEE, 'ngày' d MMMM 'năm' y",
  // ngày 25 tháng 08 năm 2017
  long: "'ngày' d MMMM 'năm' y",
  // 25 thg 08 năm 2017
  medium: "d MMM 'năm' y",
  // 25/08/2017
  short: "dd/MM/y"
}, op = {
  full: "HH:mm:ss zzzz",
  long: "HH:mm:ss z",
  medium: "HH:mm:ss",
  short: "HH:mm"
}, sp = {
  // thứ Sáu, ngày 25 tháng 08 năm 2017 23:25:59
  full: "{{date}} {{time}}",
  // ngày 25 tháng 08 năm 2017 23:25
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, dp = {
  date: s({
    formats: rp,
    defaultWidth: "full"
  }),
  time: s({
    formats: op,
    defaultWidth: "full"
  }),
  dateTime: s({
    formats: sp,
    defaultWidth: "full"
  })
}, up = {
  lastWeek: "eeee 'tuần trước vào lúc' p",
  yesterday: "'hôm qua vào lúc' p",
  today: "'hôm nay vào lúc' p",
  tomorrow: "'ngày mai vào lúc' p",
  nextWeek: "eeee 'tới vào lúc' p",
  other: "P"
}, mp = (e, a, t, n) => up[e], lp = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["trước CN", "sau CN"],
  wide: ["trước Công Nguyên", "sau Công Nguyên"]
}, cp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"]
}, hp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  // I notice many news outlet use this "quý II/2018"
  wide: ["quý I", "quý II", "quý III", "quý IV"]
}, fp = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
  abbreviated: [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12"
  ],
  wide: [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai"
  ]
}, gp = {
  narrow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ],
  abbreviated: [
    "thg 1",
    "thg 2",
    "thg 3",
    "thg 4",
    "thg 5",
    "thg 6",
    "thg 7",
    "thg 8",
    "thg 9",
    "thg 10",
    "thg 11",
    "thg 12"
  ],
  wide: [
    "tháng 01",
    "tháng 02",
    "tháng 03",
    "tháng 04",
    "tháng 05",
    "tháng 06",
    "tháng 07",
    "tháng 08",
    "tháng 09",
    "tháng 10",
    "tháng 11",
    "tháng 12"
  ]
}, pp = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  wide: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy"
  ]
}, vp = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  }
}, bp = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm"
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "giữa trưa",
    morning: "vào buổi sáng",
    afternoon: "vào buổi chiều",
    evening: "vào buổi tối",
    night: "vào ban đêm"
  }
}, wp = (e, a) => {
  const t = Number(e), n = a == null ? void 0 : a.unit;
  if (n === "quarter")
    switch (t) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  else if (n === "day")
    switch (t) {
      case 1:
        return "thứ 2";
      // meaning 2nd day but it's the first day of the week :D
      case 2:
        return "thứ 3";
      // meaning 3rd day
      case 3:
        return "thứ 4";
      // meaning 4th day and so on
      case 4:
        return "thứ 5";
      case 5:
        return "thứ 6";
      case 6:
        return "thứ 7";
      case 7:
        return "chủ nhật";
    }
  else {
    if (n === "week")
      return t === 1 ? "thứ nhất" : "thứ " + t;
    if (n === "dayOfYear")
      return t === 1 ? "đầu tiên" : "thứ " + t;
  }
  return String(t);
}, yp = {
  ordinalNumber: wp,
  era: r({
    values: lp,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: cp,
    defaultWidth: "wide",
    formattingValues: hp,
    defaultFormattingWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: r({
    values: fp,
    defaultWidth: "wide",
    formattingValues: gp,
    defaultFormattingWidth: "wide"
  }),
  day: r({
    values: pp,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: vp,
    defaultWidth: "wide",
    formattingValues: bp,
    defaultFormattingWidth: "wide"
  })
}, Pp = /^(\d+)/i, kp = /\d+/i, Mp = {
  narrow: /^(tcn|scn)/i,
  abbreviated: /^(trước CN|sau CN)/i,
  wide: /^(trước Công Nguyên|sau Công Nguyên)/i
}, $p = {
  any: [/^t/i, /^s/i]
}, Wp = {
  narrow: /^([1234]|i{1,3}v?)/i,
  abbreviated: /^q([1234]|i{1,3}v?)/i,
  wide: /^quý ([1234]|i{1,3}v?)/i
}, zp = {
  any: [/(1|i)$/i, /(2|ii)$/i, /(3|iii)$/i, /(4|iv)$/i]
}, jp = {
  // month number may contain leading 0, 'thg' prefix may have space, underscore or empty before number
  // note the order of '1' since it is a sub-string of '10', so must be lower priority
  narrow: /^(0?[2-9]|10|11|12|0?1)/i,
  // note the order of 'thg 1' since it is sub-string of 'thg 10', so must be lower priority
  abbreviated: /^thg[ _]?(0?[1-9](?!\d)|10|11|12)/i,
  // note the order of 'Mười' since it is sub-string of Mười Một, so must be lower priority
  wide: /^tháng ?(Một|Hai|Ba|Tư|Năm|Sáu|Bảy|Tám|Chín|Mười|Mười ?Một|Mười ?Hai|0?[1-9](?!\d)|10|11|12)/i
}, Dp = {
  narrow: [
    /0?1$/i,
    /0?2/i,
    /3/,
    /4/,
    /5/,
    /6/,
    /7/,
    /8/,
    /9/,
    /10/,
    /11/,
    /12/
  ],
  abbreviated: [
    /^thg[ _]?0?1(?!\d)/i,
    /^thg[ _]?0?2/i,
    /^thg[ _]?0?3/i,
    /^thg[ _]?0?4/i,
    /^thg[ _]?0?5/i,
    /^thg[ _]?0?6/i,
    /^thg[ _]?0?7/i,
    /^thg[ _]?0?8/i,
    /^thg[ _]?0?9/i,
    /^thg[ _]?10/i,
    /^thg[ _]?11/i,
    /^thg[ _]?12/i
  ],
  wide: [
    /^tháng ?(Một|0?1(?!\d))/i,
    /^tháng ?(Hai|0?2)/i,
    /^tháng ?(Ba|0?3)/i,
    /^tháng ?(Tư|0?4)/i,
    /^tháng ?(Năm|0?5)/i,
    /^tháng ?(Sáu|0?6)/i,
    /^tháng ?(Bảy|0?7)/i,
    /^tháng ?(Tám|0?8)/i,
    /^tháng ?(Chín|0?9)/i,
    /^tháng ?(Mười|10)/i,
    /^tháng ?(Mười ?Một|11)/i,
    /^tháng ?(Mười ?Hai|12)/i
  ]
}, xp = {
  narrow: /^(CN|T2|T3|T4|T5|T6|T7)/i,
  short: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  abbreviated: /^(CN|Th ?2|Th ?3|Th ?4|Th ?5|Th ?6|Th ?7)/i,
  wide: /^(Chủ ?Nhật|Chúa ?Nhật|thứ ?Hai|thứ ?Ba|thứ ?Tư|thứ ?Năm|thứ ?Sáu|thứ ?Bảy)/i
}, Np = {
  narrow: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  short: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  abbreviated: [/CN/i, /2/i, /3/i, /4/i, /5/i, /6/i, /7/i],
  wide: [/(Chủ|Chúa) ?Nhật/i, /Hai/i, /Ba/i, /Tư/i, /Năm/i, /Sáu/i, /Bảy/i]
}, Tp = {
  narrow: /^(a|p|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  abbreviated: /^(am|pm|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i,
  wide: /^(ch[^i]*|sa|nửa đêm|trưa|(giờ) (sáng|chiều|tối|đêm))/i
}, Sp = {
  any: {
    am: /^(a|sa)/i,
    pm: /^(p|ch[^i]*)/i,
    midnight: /nửa đêm/i,
    noon: /trưa/i,
    morning: /sáng/i,
    afternoon: /chiều/i,
    evening: /tối/i,
    night: /^đêm/i
  }
}, Vp = {
  ordinalNumber: u({
    matchPattern: Pp,
    parsePattern: kp,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: o({
    matchPatterns: Mp,
    defaultMatchWidth: "wide",
    parsePatterns: $p,
    defaultParseWidth: "any"
  }),
  quarter: o({
    matchPatterns: Wp,
    defaultMatchWidth: "wide",
    parsePatterns: zp,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: o({
    matchPatterns: jp,
    defaultMatchWidth: "wide",
    parsePatterns: Dp,
    defaultParseWidth: "wide"
  }),
  day: o({
    matchPatterns: xp,
    defaultMatchWidth: "wide",
    parsePatterns: Np,
    defaultParseWidth: "wide"
  }),
  dayPeriod: o({
    matchPatterns: Tp,
    defaultMatchWidth: "wide",
    parsePatterns: Sp,
    defaultParseWidth: "any"
  })
}, ze = {
  code: "vi",
  formatDistance: ip,
  formatLong: dp,
  formatRelative: mp,
  localize: yp,
  match: Vp,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 1
  }
}, je = {
  en: z,
  "en-US": z,
  "en-us": z,
  fr: G,
  "fr-FR": G,
  de: Q,
  "de-DE": Q,
  es: Y,
  "es-ES": Y,
  it: K,
  "it-IT": K,
  pt: T,
  "pt-PT": T,
  "pt-BR": T,
  ru: Z,
  "ru-RU": Z,
  ja: U,
  "ja-JP": U,
  zh: S,
  "zh-CN": S,
  "zh-cn": S,
  ar: te,
  "ar-SA": te,
  nl: ae,
  "nl-NL": ae,
  pl: ie,
  "pl-PL": ie,
  tr: re,
  "tr-TR": re,
  ko: oe,
  "ko-KR": oe,
  sv: se,
  "sv-SE": se,
  da: de,
  "da-DK": de,
  nb: ue,
  "nb-NO": ue,
  fi: ge,
  "fi-FI": ge,
  cs: pe,
  "cs-CZ": pe,
  el: ve,
  "el-GR": ve,
  he: be,
  "he-IL": be,
  hi: we,
  "hi-IN": we,
  hu: Pe,
  "hu-HU": Pe,
  id: ke,
  "id-ID": ke,
  ro: Me,
  "ro-RO": Me,
  th: $e,
  "th-TH": $e,
  uk: We,
  "uk-UA": We,
  vi: ze,
  "vi-VN": ze
};
function Cp(e) {
  return je[e] ?? je[e.toLowerCase()] ?? z;
}
function qp({ config: e }) {
  const a = Oe(() => ({
    id: e.id ?? `pixelfactory-${e.town}`,
    timezone: e.timezone,
    town: e.town,
    locale: e.locale ?? "en",
    showTown: e.showTown ?? !0,
    showTimezone: e.showTimezone ?? !0,
    showDate: e.showDate ?? !0,
    meridiem: e.meridiem ?? !1
  }), [e]), t = (D, Ce, He) => {
    const p = new Qe(/* @__PURE__ */ new Date(), D), x = Cp(Ce), Xe = N(p, "zzz", { locale: x }), Ee = N(p, "EEEE", { locale: x }), Fe = Ye(p), qe = N(p, "MMMM", { locale: x }), Le = Re(p), Ae = _e(p);
    let w = Je(p);
    const L = w < 12 ? "AM" : "PM";
    w = He && L === "PM" ? w - 12 : w;
    const A = Ke(p), O = Be(p);
    return {
      day: Fe,
      dayName: Ee,
      month: Le,
      monthName: qe,
      year: Ae,
      hours: (w < 10 ? "0" : "") + w,
      minutes: (A < 10 ? "0" : "") + A,
      seconds: (O < 10 ? "0" : "") + O,
      meridiem: L,
      timezone: Xe
    };
  }, [n, i] = Ge(() => t(
    a.timezone,
    a.locale,
    a.meridiem
  ));
  Ie(() => {
    const D = setInterval(() => {
      i(
        t(a.timezone, a.locale, a.meridiem)
      );
    }, 1e3);
    return () => {
      clearInterval(D);
    };
  }, [a.timezone, a.locale, a.meridiem]);
  const {
    timezone: m,
    hours: d,
    minutes: l,
    seconds: g,
    meridiem: f,
    dayName: v,
    day: P,
    monthName: Se,
    year: Ve
  } = n;
  return /* @__PURE__ */ k("div", { id: a.id, className: "clock", children: [
    a.showTown && /* @__PURE__ */ y("h1", { className: "town", children: a.town }),
    a.showTimezone && /* @__PURE__ */ k("h2", { className: "timezone", children: [
      a.timezone,
      " ",
      m
    ] }),
    /* @__PURE__ */ k("ul", { className: "time", children: [
      /* @__PURE__ */ y("li", { className: "hours", children: d }),
      /* @__PURE__ */ y("li", { className: "points", children: ":" }),
      /* @__PURE__ */ y("li", { className: "minutes", children: l }),
      /* @__PURE__ */ k("li", { className: "sectional", children: [
        /* @__PURE__ */ y("sup", { className: "seconds", children: g }),
        a.meridiem && /* @__PURE__ */ y("sub", { className: "meridiem", children: f })
      ] })
    ] }),
    a.showDate && /* @__PURE__ */ k("h1", { className: "date", children: [
      v,
      " ",
      P,
      " ",
      Se,
      " ",
      Ve
    ] })
  ] });
}
export {
  qp as default
};
//# sourceMappingURL=Clock.js.map
