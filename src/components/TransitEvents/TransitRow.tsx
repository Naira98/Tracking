import { useTranslation } from "react-i18next";
import { TransitState } from "../../types/shipmentData";
import { formatDate, formatTime } from "../../utils/dateFormat";
import { useShipment } from "../../context/useShipment";
import { getStateColor } from "../../utils/stateColor";
import styles from "./TransitRow.module.css";

const TransitRow = ({ row }: { row: TransitState }) => {
  const { t, i18n } = useTranslation();
  const { shipment } = useShipment();
  const stateColor = getStateColor(shipment!.CurrentStatus.state).text;
  return (
    <>
      <h1 className={styles["table-cell"]}>
        {row.hub ? t(`HUB.${row.hub}`) : "-"}
      </h1>
      <h1 className={styles["table-cell"]}>
        {formatDate(row.timestamp, i18n.language)}
      </h1>
      <h1 className={styles["table-cell"]}>
        {formatTime(row.timestamp, i18n.language)}
      </h1>
      <div className={styles["table-cell"]}>
        <h1>{t(`TRANSIT_EVENTS.${row.state}`)}</h1>
        {row.reason && (
          <h1 className={stateColor}>{t(`REASONS.${row.reason}`)}</h1>
        )}
      </div>
    </>
  );
};

export default TransitRow;
