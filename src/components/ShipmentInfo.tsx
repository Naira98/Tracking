import { useTranslation } from "react-i18next";
import { useLang } from "../context/useLang";
import { useTrackingNumber } from "../context/useTrackingNumber";
import { useGetShipment } from "../hooks/useGetShipment";
import {
  formatDateWithDay,
  formatDateWithTime,
  getStateColor,
} from "../utils/helpers";

const ShipmentInfo = () => {
  const { trackingNumber } = useTrackingNumber();
  const { data } = useGetShipment(trackingNumber!);
  const { t } = useTranslation();
  const { lang } = useLang();

  const lastUpdateDate =
    data!.TransitEvents[data!.TransitEvents.length - 1].timestamp;

  const shipmentState = data!.CurrentStatus.state;
  const stateColor = getStateColor(shipmentState);

  return (
    <div className="flex items-center justify-between border-b-2 border-slate px-10 py-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">
          {t("shipmentNumber")} # {data!.TrackingNumber}
        </h1>
        <h1 className={`font-bold ${stateColor}`}>{t(`STATE_${shipmentState}`)}</h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">{t("lastUpdate")}</h1>
        <h1 className="font-bold">
          {formatDateWithTime(lastUpdateDate, lang)}
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">{t("soldBy")}</h1>
        <h1 className="font-bold">{t("soldByExample")}</h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">{t("arrivingDate")}</h1>
        <h1 className="font-bold">
          {formatDateWithDay(data!.PromisedDate, lang)}
        </h1>
      </div>
    </div>
  );
};

export default ShipmentInfo;