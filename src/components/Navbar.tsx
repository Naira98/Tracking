import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { useLang } from "../context/useLang";
import ContactUs from "./ContactUs";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import TrackForm from "./TrackForm";
import Prices from "./Prices";

const Navbar = () => {
  const { t } = useTranslation();
  const { lang, setLang } = useLang();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleChangeLang = () => {
    const newLang = lang === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  return (
    <nav className="border-slate-primary bg-sky sticky top-0 z-20 flex h-16 items-center justify-between border-b-2 p-10 lg:px-20">
      <div className="flex items-center justify-center px-3">
        <Link to="/">
          <img
            className="h-14 w-14"
            src="/bosta-logo.png"
            alt={t("NAVBAR.TITLE")}
          />
        </Link>
        <Link to="/">
          <span className="text-red-primary text-[22px] font-extrabold lg:text-[24px]">
            {t("NAVBAR.TITLE")}
          </span>
        </Link>
      </div>

      <div className="hidden md:block">
        <div className="flex gap-6 text-sm font-extrabold lg:text-base">
          <Link to={"/"}>
            <span className={styles["nav-item"]}>{t("NAVBAR.HOME")} </span>
          </Link>
          <DropDownMenu content={<Prices />}>
            <span className={styles["nav-item"]}>{t("NAVBAR.PRICES")}</span>
          </DropDownMenu>
          <button
            onClick={() => setIsOpen(true)}
            className={styles["nav-item"]}
          >
            {t("NAVBAR.CALL_SALES")}
          </button>
        </div>
      </div>
      <ContactUs isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex gap-6 text-sm font-extrabold md:gap-3 lg:gap-8 lg:text-base">
        <DropDownMenu content={<TrackForm />}>
          <div className={styles["nav-item"]}>{t("NAVBAR.TRACK_SHIPMENT")}</div>
        </DropDownMenu>
        <span className={styles["nav-item"]}>{t("NAVBAR.SIGN_UP")}</span>
        <button className="text-red-primary" onClick={handleChangeLang}>
          {t("NAVBAR.LANG")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
