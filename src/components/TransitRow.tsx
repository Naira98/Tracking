import { useTranslation } from "react-i18next";
import { TransitState } from "../types/shipmentData";
import { formatDate, formatTime } from "../utils/dateFormat";
import { useLang } from "../context/useLang";
import { useShipment } from "../context/useShipment";
import styles from "../styles/TransitRow.module.css";
import { getStateColor } from "../utils/stateColor";

const TransitRow = ({ row }: { row: TransitState }) => {
  const { t } = useTranslation();
  const { lang } = useLang();
  const { shipment } = useShipment();
  const stateColor = getStateColor(shipment!.CurrentStatus.state).text;
  console.log(stateColor);
  return (
    <>
      <h1 className={styles["table-row"]}>
        {row.hub ? t(`HUB.${row.hub}`) : "-"}
      </h1>
      <h1 className={styles["table-row"]}>{formatDate(row.timestamp, lang)}</h1>
      <h1 className={styles["table-row"]}>{formatTime(row.timestamp, lang)}</h1>
      <div className={styles["table-row"]}>
        <h1>{t(`TRANSIT_EVENTS.${row.state}`)}</h1>
        {row.reason && (
          <h1 className={stateColor}>{t(`REASONS.${row.reason}`)}</h1>
        )}
      </div>
    </>
  );
};

export default TransitRow;
