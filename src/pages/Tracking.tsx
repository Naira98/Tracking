import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShipmentInfo from "../components/ShipmentInfo";
import ShipmentTimeline from "../components/ShipmentTimeline";
import ShipmentAddress from "../components/ShipmentAddress";
import ReportProblem from "../components/ReportProblem";
import TransitEvents from "../components/TransitEvents";
import { useGetShipment } from "../hooks/useGetShipment";
import NotFound from "../components/NotFound";
import Spinner from "../components/Spinner";
import { useShipment } from "../context/useShipment";

const Tracking = () => {
  const { trackingNumber } = useParams();
  const { setTrackingNumber } = useShipment();

  const { isPending, error } = useGetShipment(trackingNumber);
  
  useEffect(() => {
    if (trackingNumber) {
      setTrackingNumber(trackingNumber);
    }
  }, [trackingNumber, setTrackingNumber]);

  if (error) return <NotFound />;
  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 px-20 py-10 md:grid-cols-3">
      <div className="col-span-1 rounded-md border-2 border-slate md:col-span-3">
        <ShipmentInfo />
        <ShipmentTimeline />
      </div>

      <div className="col-span-1 md:col-span-2">
        <TransitEvents />
      </div>

      <div className="col-span-1">
        <ShipmentAddress />
        <ReportProblem />
      </div>
    </div>
  );
};

export default Tracking;
