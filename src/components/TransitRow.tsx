import { useTranslation } from "react-i18next";
import { State } from "../types/shipmentData";
import { formatDate, formatTime } from "../utils/dateFormat";
import { useLang } from "../context/useLang";
import { useShipment } from "../context/useShipment";

const TransitRow = ({ row }: { row: State }) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { stateColor } = useShipment();
  return (
    <>
      <h1 className="bg-white">{row.hub ? t(`HUB.${row.hub}`) : "-"}</h1>
      <h1 className="bg-white">{formatDate(row.timestamp, lang)}</h1>
      <h1 className="bg-white">{formatTime(row.timestamp, lang)}</h1>
      <div>
        <h1 className="bg-white">{t(`TRANSIT_EVENTS.${row.state}`)}</h1>
        {row.reason && (
          <h1 className={`bg-white ${stateColor}`}>{t(`REASONS.${row.reason}`)}</h1>
        )}
      </div>
    </>
  );
};

export default TransitRow;
