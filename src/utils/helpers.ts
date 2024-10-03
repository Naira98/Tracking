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

export const getStateColor = (state: string) => {
  if (state === "DELIVERED_TO_SENDER") {
    return "text-yellow";
  } else if (state === "DELIVERED") {
    return "text-green";
  } else if (state === "CANCELED") {
    return "text-red-primary";
  }
};
