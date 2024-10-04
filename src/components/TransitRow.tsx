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
      <h1 className="table-row">{row.hub ? t(`HUB.${row.hub}`) : "-"}</h1>
      <h1 className="table-row">{formatDate(row.timestamp, lang)}</h1>
      <h1 className="table-row">{formatTime(row.timestamp, lang)}</h1>
      <div className="table-row">
        <h1 >{t(`TRANSIT_EVENTS.${row.state}`)}</h1>
        {row.reason && (
          <h1 className={`text-${stateColor}`}>{t(`REASONS.${row.reason}`)}</h1>
        )}
      </div>
    </>
  );
};

export default TransitRow;
