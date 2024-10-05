import { useTranslation } from "react-i18next";

const Prices = () => {
  const { t } = useTranslation();
  return (
    <div className="font-medium flex rounded-md border-2 border-slate-secondary bg-white p-2 shadow-md">
      <div>
        <div className="block p-2 text-sm hover:cursor-pointer hover:bg-slate-primary">
          {t("NAVBAR.LARGE_COMPANY")}
        </div>
        <div className="block p-2 text-sm hover:cursor-pointer hover:bg-slate-primary">
          {t("NAVBAR.SMALL_COMPANY")}
        </div>
      </div>
    </div>
  );
};

export default Prices;
