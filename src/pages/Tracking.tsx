import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ShipmentInfo from "../components/ShipmentInfo";
import ShipmentGraph from "../components/ShipmentGraph";
import ShipmentAddress from "../components/ShipmentAddress";
import ReportProblem from "../components/ReportProblem";
import TransitEvents from "../components/TransitEvents";
import { useGetShipment } from "../hooks/useGetShipment";
import NotFound from "../components/NotFound";
import Spinner from "../components/Spinner";
import { useTrackingNumber } from "../context/useTrackingNumber";

const Tracking = () => {
  const { trackingNumber } = useParams();
  const { setTrackingNumber } = useTrackingNumber();

  useEffect(() => {
    if (trackingNumber) setTrackingNumber(trackingNumber);
  }, [trackingNumber, setTrackingNumber]);

  const { isPending, error } = useGetShipment(trackingNumber);

  if (error) return <NotFound />;
  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 px-20 py-10 md:grid-cols-3">
      <div className="col-span-1 rounded-md border-2 border-slate md:col-span-3">
        <ShipmentInfo />
        <ShipmentGraph />
      </div>

      <div className="col-span-1 border-2 border-slate md:col-span-2">
        <TransitEvents />
      </div>

      <div className="col-span-1 border-2 border-slate">
        <ShipmentAddress />
        <ReportProblem />
      </div>
    </div>
  );
};

export default Tracking;
