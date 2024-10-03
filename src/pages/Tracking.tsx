import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { trackShipment } from "../services/shipments";
// import NotFound from "./NotFound";
// import { Shipment } from "../types/shipmentData";
import ShipmentInfo from "../components/ShipmentInfo";
import ShipmentGraph from "../components/ShipmentGraph";
import ShipmentAddress from "../components/ShipmentAddress";
import ReportProblem from "../components/ReportProblem";

const Tracking = () => {
  const { trackingNumber } = useParams();
  console.log(trackingNumber);

  useEffect(() => {
    (async function () {
      if (trackingNumber) {
        const data = await trackShipment(trackingNumber);
        // if (data.error) return <NotFound />
        console.log(data);
      }
    })();
  }, [trackingNumber]);
  //   const [enabled, setEnabled] = useState<boolean>(false);

  //   const { data, isPending, error } = useGetShipment(trackingNumber, enabled);
  //   const handleClick = () => {
  //     if (!isDisabled) setEnabled(true);
  //   };
  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);
  //   if (error) {
  //     navigate("/not-found");
  //   }

  //   if (isPending)
  //     return (
  //       <div
  //         style={{
  //           display: "flex",
  //           justifyContent: "center",
  //           alignItems: "center",
  //           height: "100vh",
  //         }}
  //       >
  //         <Spinner />
  //       </div>
  //     );
  //   // console.log(data);

  // const handleClick = async () => {
  //   if (!isDisabled) {
  //     // const data = await trackShipment(trackingNumber)
  //     // console.log(data)
  //     navigate(`/track-shipments/${trackingNumber}`);
  //   }
  // };
  return (
    <div className="grid grid-cols-1 gap-6 px-20 py-6 md:grid-cols-3">
      <div className="col-span-1 border-2 border-slate md:col-span-3 rounded-md">
        <ShipmentInfo />
        <ShipmentGraph />
      </div>

      <div className="col-span-1 border-2 border-slate md:col-span-2">
        <ShipmentInfo />
      </div>

      <div className="col-span-1 border-2 border-slate">
        <ShipmentAddress />
        <ReportProblem />
      </div>
    </div>
  );
};

export default Tracking;
