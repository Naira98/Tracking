import { useTranslation } from "react-i18next";
import { useShipment } from "../context/useShipment";
import { formatDateWithDay, formatDateWithTime } from "../utils/dateFormat";
import { getStateColor } from "../utils/stateColor";

const InfoShipment = () => {
  const { shipment } = useShipment();
  const { t, i18n } = useTranslation();

  const lastUpdateDate =
    shipment!.TransitEvents[shipment!.TransitEvents.length - 1].timestamp;

  const currentState = shipment!.CurrentStatus.state;
  const textColorClass = getStateColor(currentState).text;

  return (
    <div className="flex flex-col gap-4 border-b-2 border-slate-primary px-10 py-7 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col lg:gap-3">
        <h1 className="text-gray-primary">
          {t("TRACKING_INFO.SHIPMENT_NUMBER")} # {shipment!.TrackingNumber}
        </h1>
        <h1 className={`font-bold ${textColorClass}`}>
          {t(`CURRENT_STATE.${shipment!.CurrentStatus.state}`)}
        </h1>
      </div>

      <div className="flex flex-col lg:gap-3">
        <h1 className="text-gray-primary">{t("TRACKING_INFO.LAST_UPDATE")}</h1>
        <h1 className="font-bold">
          {formatDateWithTime(lastUpdateDate, i18n.language)}
        </h1>
      </div>

      <div className="flex flex-col lg:gap-3">
        <h1 className="text-gray-primary">{t("TRACKING_INFO.SOLD_BY")}</h1>
        <h1 className="font-bold">{t("TRACKING_INFO.SOLD_BY_EXAMPLE")}</h1>
      </div>

      <div className="flex flex-col lg:gap-3">
        <h1 className="text-gray-primary">
          {t("TRACKING_INFO.ARRIVING_DATE")}
        </h1>
        <h1 className="font-bold">
          {formatDateWithDay(shipment!.PromisedDate, i18n.language)}
        </h1>
      </div>
    </div>
  );
};

export default InfoShipment;
