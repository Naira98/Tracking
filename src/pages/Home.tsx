import { useTranslation } from "react-i18next";
import SearchShipment from "../components/TrackShipment/SearchShipment";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="px-5 py-10">
      <div className="flex flex-col items-center rounded-xl bg-sky py-3">
        <img src="/location.png" alt="location" />
        <h1 className="mb-6 text-3xl font-bold">
          {t("TRACK_FORM.TRACK_SHIPMENT")}
        </h1>
        <h1 className="text-md mb-6">{t("TRACK_FORM.TRACKING_QUOTE")}</h1>
        <SearchShipment height="4rem" width="24rem" searchSize={32} />
      </div>
    </div>
  );
};

export default Home;
