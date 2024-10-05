import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t } = useTranslation();
  return (
    <div className="border-slate-secondary flex rounded-md border-2 bg-white p-2 shadow-md">
      <div>
        <div className="hover:bg-slate-primary block p-2 text-sm hover:cursor-pointer">
          {t("NAVBAR.LARGE_COMPANY")}
        </div>
        <div className="hover:bg-slate-primary block p-2 text-sm hover:cursor-pointer">
          {t("NAVBAR.SMALL_COMPANY")}
        </div>
      </div>
    </div>
  );
};

export default Prices;
