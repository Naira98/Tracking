import { useTranslation } from "react-i18next";
import { useShipment } from "../context/useShipment";
import TransitRow from "./TransitRow";

const TransitEvents = () => {
  const { shipment } = useShipment();
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <h1 className="mb-3">{t("TRANSIT_EVENTS.TITLE")}</h1>

      <div className="border-slate-primary grid grid-cols-[1fr_1fr_1fr_2fr] overflow-y-scroll rounded-md border-2">
        {[
          t("TRANSIT_EVENTS.BRANCH"),
          t("TRANSIT_EVENTS.DATE"),
          t("TRANSIT_EVENTS.TIME"),
          t("TRANSIT_EVENTS.DETAILS"),
        ].map((name, i) => (
          <div
            key={i}
            className="bg-gray-secondary flex h-14 items-center px-4"
          >
            {name}
          </div>
        ))}
        {shipment?.TransitEvents.map((row, i) => (
          <TransitRow key={i} row={row} />
        ))}
      </div>
    </div>
  );
};

export default TransitEvents;
