import { useContext } from "react";
import { LangContext } from "./LangContext";

export const useLang = () => {
  const context = useContext(LangContext);
  if (context === null)
    throw new Error("Lang Context was used outside the Provider");
  return context;
};
