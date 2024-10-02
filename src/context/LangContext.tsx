import React, { createContext, ReactNode, useState } from "react";
import cookies from "js-cookie";

interface IAuth {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

export const LangContext = createContext<IAuth | null>(null);

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<string>(() => {
    return cookies.get("i18next") || "ar";
  });
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};
