import { useTranslation } from "react-i18next";
import SearchShipment from "./SearchShipment";

const TrackForm = () => {
  const { t } = useTranslation();
  return (
    <div className="border-slate-secondary flex w-fit flex-col justify-center gap-4 rounded-md border-2 bg-white px-7 py-5 shadow-md font-medium mt-5">
      <h1 className="">{t("TRACK_FORM.TRACK_SHIPMENT")}</h1>
      <SearchShipment height="2rem" width="12rem" searchSize={16} />
    </div>
  );
};

export default TrackForm;
