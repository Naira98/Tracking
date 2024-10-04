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
    <nav className="sticky top-0 flex h-16 items-center justify-between border-b-2 border-slate bg-white p-10 px-20">
      <div className="flex items-center justify-center">
        <Link to="/">
          <img
            className="h-14 w-14"
            src="/bosta-logo.png"
            alt={t("NAVBAR.TITLE")}
          />
        </Link>
        <Link to="/">
          <span className="text-red-primary text-2xl font-extrabold">
            {t("NAVBAR.TITLE")}
          </span>
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="flex gap-6 font-extrabold">
          <span className="nav-item">{t("NAVBAR.HOME")} </span>
          <span className="nav-item">{t("NAVBAR.PRICES")}</span>
          <span className="nav-item">{t("NAVBAR.CALL_SALES")}</span>
        </div>
      </div>

      <div className="flex gap-6 font-extrabold">
        <span className="nav-item">{t("NAVBAR.TRACK_SHIPMENT")}</span>
        <span className="nav-item">{t("NAVBAR.SIGN_UP")}</span>
        <button className="text-red-primary" onClick={handleChangeLang}>
          {t("NAVBAR.LANG")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
