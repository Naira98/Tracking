import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const NotFoundComponent = ({
  location,
}: {
  location: "PAGE" | "ORDER";
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center gap-5 py-20">
      <h1 className="text-red-primary text-3xl font-bold">
        {t("404_PAGE.404")}
      </h1>
      <h2>{t(`404_PAGE.404_${location}_QUOTE`)}</h2>
      <button
        className="border-red-primary bg-red-primary rounded-lg px-4 py-2 text-white"
        onClick={() => navigate(-1)}
      >
        {t("404_PAGE.GO_BACK")}
      </button>
    </div>
  );
};

export default NotFoundComponent;
