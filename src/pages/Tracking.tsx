import InfoShipment from "../components/InfoShipment";
import TimelineShipment from "../components/TimelineShipment";
import AddressShipment from "../components/AddressShipment";
import ReportProblem from "../components/ReportProblem";
import TransitEvents from "../components/TransitEvents";
import NotFoundComponent from "../components/NotFoundComponent";
import Spinner from "../components/Spinner";
import { useShipment } from "../context/useShipment";

const Tracking = () => {
  const { isPending, error } = useShipment();

  if (error) return <NotFoundComponent location="ORDER" />;
  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 px-20 py-10 lg:grid-cols-3">
      <div className="border-slate-primary col-span-1 rounded-lg border-2 lg:col-span-3">
        <InfoShipment />
        <TimelineShipment />
      </div>

      <div className="col-span-1 lg:col-span-2">
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
