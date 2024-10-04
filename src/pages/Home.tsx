import { useTranslation } from "react-i18next";
import SearchShipment from "../components/SearchShipment";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-10">
      <div className="bg-sky flex flex-col items-center rounded-xl py-3">
        <img src="/location.png" alt="location" />
        <h1 className="mb-6 text-3xl font-bold">
          {t("TRACK_FORM.TRACK_SHIPMENT")}
        </h1>
        <h1 className="text-md mb-6">{t("TRACK_FORM.TRACKING_QUOTE")}</h1>
        <SearchShipment height={16} width={96} />
      </div>
    </div>
  );
};

export default Home;
