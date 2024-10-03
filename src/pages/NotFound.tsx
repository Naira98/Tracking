import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();


  return (
    <div className="flex h-screen flex-col items-center gap-5 py-20">
      <h1 className="text-red-primary text-3xl font-bold">{t("404")}</h1>
      <h2>{t("404-quote")}</h2>
      <button
        className="border-red-primary bg-red-primary rounded-lg px-4 py-2 text-white"
        onClick={() => navigate(-1)}
      >
        {t("goBack")}
      </button>
    </div>
  );
};

export default NotFound;
