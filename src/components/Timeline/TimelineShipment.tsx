import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";
import { GoPackageDependencies } from "react-icons/go";
import { FaTruckFast } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import Timeline from "./Timeline";
import { useShipment } from "../../context/useShipment";
import { TransitStateEnum } from "../../types/shipmentData";
import { getStateColor } from "../../utils/stateColor";

const transitStateStepMap: Partial<Record<TransitStateEnum, number>> = {
  PACKAGE_RECEIVED: 1,
  AVAILABLE_FOR_PICKUP: 2,
  OUT_FOR_DELIVERY: 2,
  DELIVERED: 3,
};

const TimelineShipment = () => {
  const { shipment } = useShipment();
  const { t } = useTranslation();

  const [step, reason] = useMemo(() => {
    let step = 0;
    let reason: string | undefined;

    for (const event of shipment!.TransitEvents) {
      step = transitStateStepMap[event.state] ?? step;
      if (event.reason) reason = t(`REASONS.${event.reason}`);
    }

    return [step, reason];
  }, [shipment, t]);

  return (
    <div className="px-10 py-7">
      <Timeline
        color={getStateColor(shipment!.CurrentStatus.state)}
        steps={[
          {
            icon: <FaCheck size={24} />,
            text: t("TIMELINE.TICKET_CREATED"),
            state: step == 0 ? "IN PROGRESS" : "DONE",
            subtext: step == 0 ? reason : undefined,
          },
          {
            icon: <GoPackageDependencies size={24} />,
            text: t("TIMELINE.PACKAGE_RECEIVED"),
            subtext: step == 1 ? reason : undefined,
            state: step < 1 ? "UPCOMING" : step == 1 ? "IN PROGRESS" : "DONE",
          },
          {
            icon: <FaTruckFast size={24} />,
            text: t("TIMELINE.OUT_FOR_DELIVERY"),
            subtext: step == 2 ? reason : undefined,
            state: step < 2 ? "UPCOMING" : step == 2 ? "IN PROGRESS" : "DONE",
          },
          {
            icon: <LuPackageCheck size={24} />,
            text: t("TIMELINE.DELIVERED"),
            state: step < 3 ? "UPCOMING" : "DONE",
          },
        ]}
      />
    </div>
  );
};

export default TimelineShipment;
