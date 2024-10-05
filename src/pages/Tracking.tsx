import InfoShipment from "../components/Info/InfoShipment";
import TimelineShipment from "../components/Timeline/TimelineShipment";
import AddressShipment from "../components/Address/AddressShipment";
import ReportProblem from "../components/Problem/ReportProblem";
import TransitEvents from "../components/TransitEvents/TransitEvents";
import NotFoundComponent from "../components/NotFound/NotFoundComponent";
import Spinner from "../components/Spinner/Spinner";
import { useShipment } from "../context/useShipment";

const Tracking = () => {
  const { isPending, error } = useShipment();

  if (error) return <NotFoundComponent location="ORDER" />;
  if (isPending) return <Spinner />;

  return (
    <div className="grid grid-cols-1 gap-6 p-10 py-10 lg:grid-cols-3 lg:px-20">
      <div className="col-span-1 rounded-lg border-2 border-slate-primary lg:col-span-3">
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
