import { useEffect } from "react";
import { useParams } from "react-router-dom";
import InfoShipment from "../components/InfoShipment";
import TimelineShipment from "../components/TimelineShipment";
import AddressShipment from "../components/AddressShipment";
import ReportProblem from "../components/ReportProblem";
import TransitEvents from "../components/TransitEvents";
import NotFoundComponent from "../components/NotFoundComponent";
import Spinner from "../components/Spinner";
import { useGetShipment } from "../hooks/useGetShipment";
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

  if (error) return <NotFoundComponent location="ORDER" />;
  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 px-20 py-10 md:grid-cols-3">
      <div className="col-span-1 rounded-md border-2 border-slate-primary md:col-span-3">
        <InfoShipment />
        <TimelineShipment />
      </div>

      <div className="col-span-1 md:col-span-2">
        <TransitEvents />
      </div>

      <div className="col-span-1">
        <AddressShipment />
        <ReportProblem />
      </div>
    </div>
  );
};

export default Tracking;
