import { createContext, ReactNode } from "react";
import { Shipment } from "../types/shipmentData";
import { useGetShipment } from "../hooks/useGetShipment";
import { useParams } from "react-router-dom";

interface IShipment {
  shipment?: Shipment;
  isPending: boolean;
  error: Error | null;
}

export const ShipmentContext = createContext<IShipment | null>(null);

export const ShipmentProvider = ({ children }: { children: ReactNode }) => {
  const { trackingNumber } = useParams();
  const { data: shipment, isPending, error } = useGetShipment(trackingNumber);

  return (
    <ShipmentContext.Provider value={{ shipment, isPending, error }}>
      {children}
    </ShipmentContext.Provider>
  );
};
