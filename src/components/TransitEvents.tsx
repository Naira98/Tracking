import { useTranslation } from "react-i18next";
import { useShipment } from "../context/useShipment";
import { useGetShipment } from "../hooks/useGetShipment";
import TransitRow from "./TransitRow";

const TransitEvents = () => {
  const { trackingNumber } = useShipment();
  const { data } = useGetShipment(trackingNumber!);
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-3">
      <h1>{t("TRANSIT_EVENTS.TITLE")}</h1>

      <div className="bg-gray-secondary grid grid-cols-[1fr_1fr_1fr_2fr] rounded-md border-2 border-slate">
        <div className="text-gray-primary">{t("TRANSIT_EVENTS.BRANCH")}</div>
        <div className="text-gray-primary">{t("TRANSIT_EVENTS.DATE")}</div>
        <div className="text-gray-primary">{t("TRANSIT_EVENTS.TIME")}</div>
        <div className="text-gray-primary">{t("TRANSIT_EVENTS.DETAILS")}</div>
        {data!.TransitEvents.map((row, i) => (
          <TransitRow key={i} row={row} />
        ))}
      </div>
    </div>
  );
};

export default TransitEvents;
