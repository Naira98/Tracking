import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-router-dom";
import { useLang } from "../context/useLang";

const Navbar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();

  const handleChangeLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <nav className="flex h-16 items-center justify-between border-b-2 border-slate p-10 px-20">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img
            className="h-14 w-14"
            src="/bosta-logo.png"
            alt={`${t("title")}`}
          />
        </Link>
        <Link to="/">
          <span className="text-2xl font-extrabold text-red">{t("title")}</span>
        </Link>
      </div>

      <div className="flex gap-6 font-extrabold">
        <span className="nav-item">
          {t("Home")}{" "}
        </span>
        <span className="nav-item">
          {t("Prices")}
        </span>
        <span className="nav-item">
          {t("Call sales")}
        </span>
      </div>

      <div className="flex gap-6 font-extrabold">
        <span className="nav-item">
          {t("Track shipment")}
        </span>
        <span className="nav-item">
          {t("Sign up")}
        </span>
        <button className="text-red" onClick={handleChangeLang}>
          {t("Lang")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
