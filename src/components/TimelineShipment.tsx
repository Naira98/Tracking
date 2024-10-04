import { FaCheck } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { FiSave } from "react-icons/fi";
import { useShipment } from "../context/useShipment";
import { useTranslation } from "react-i18next";

const TimelineShipment = () => {
  const { stateColor } = useShipment();
  const { t } = useTranslation();
  return (
    <div className="relative px-10 py-7">
      {/* TIMELINE
      <div className={`h-2 rounded-md bg-${stateColor}`}></div> */}
      
      {/* LABELS */}
      <div className="flex ">
        <div className="flex flex-col">
          <div className={`rounded bg-${stateColor} w-2`}>hi</div>
          <h1>{t("TIMELINE.TICKET_CREATED")}</h1>
        </div>
        <div className="flex flex-col">
          <div className={`rounded bg-${stateColor} w-2`}>hi</div>
          <h1>{t("TIMELINE.PACKAGE_RECEIVED")}</h1>
        </div>
        <div className="flex flex-col">
          <div className={`rounded bg-${stateColor} w-2`}>hi</div>
          <h1>{t("TIMELINE.OUT_FOR_DELIVERY")}</h1>
        </div>
        <div className="flex flex-col">
          <div className={`rounded bg-${stateColor} w-2`}>hi</div>
          <h1>{t("TIMELINE.DELIVERED")}</h1>
        </div>
      </div>
    </div>
  );
};

export default TimelineShipment;
