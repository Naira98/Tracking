export const formatDateWithTime = (date: string, lang: string) => {
  return new Intl.DateTimeFormat([`${lang === "ar" ? "ar" : "en"}`], {
    dateStyle: "long",
    timeStyle: "short",
  }).format(Date.parse(date));
};

export const formatDateWithDay = (date: string, lang: string) => {
  return new Intl.DateTimeFormat([`${lang === "ar" ? "ar-AE" : "en-GB"}`], {
    day: "numeric",
    month: "long",
    weekday: "long",
    year: "numeric",
  }).format(Date.parse(date));
};

