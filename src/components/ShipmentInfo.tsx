import { useTranslation } from "react-i18next";
import { useLang } from "../context/useLang";
import { useShipment } from "../context/useShipment";
import { useGetShipment } from "../hooks/useGetShipment";
import { formatDateWithDay, formatDateWithTime } from "../utils/dateFormat";
import { getStateColor } from "../utils/stateColor";
import { useEffect } from "react";

const ShipmentInfo = () => {
  const { trackingNumber, setStateColor } = useShipment();
  const { data } = useGetShipment(trackingNumber!);
  const { t } = useTranslation();
  const { lang } = useLang();

  const lastUpdateDate =
    data!.TransitEvents[data!.TransitEvents.length - 1].timestamp;

  const shipmentState = data!.CurrentStatus.state;
  const stateColor = getStateColor(shipmentState);
  useEffect(() => {
    setStateColor(stateColor);
  }, [stateColor, setStateColor]);

  return (
    <div className="flex items-center justify-between border-b-2 border-slate px-10 py-7">
      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">
          {t("TRACKING_INFO.SHIPMENT_NUMBER")} # {data!.TrackingNumber}
        </h1>
        <h1 className={`font-bold ${stateColor}`}>
          {t(`CURRENT_STATE.${data!.CurrentStatus.state}`)}
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">{t("TRACKING_INFO.LAST_UPDATE")}</h1>
        <h1 className="font-bold">
          {formatDateWithTime(lastUpdateDate, lang)}
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">{t("TRACKING_INFO.SOLD_BY")}</h1>
        <h1 className="font-bold">{t("TRACKING_INFO.SOLD_BY_EXAMPLE")}</h1>
      </div>

      <div className="flex flex-col gap-3">
        <h1 className="text-gray-primary">
          {t("TRACKING_INFO.ARRIVING_DATE")}
        </h1>
        <h1 className="font-bold">
          {formatDateWithDay(data!.PromisedDate, lang)}
        </h1>
      </div>
    </div>
  );
};

export default ShipmentInfo;
