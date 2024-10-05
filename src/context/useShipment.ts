import { useContext } from "react";
import { ShipmentContext } from "./ShipmentContext";

export const useShipment = () => {
  const context = useContext(ShipmentContext);
  if (context === null)
    throw new Error("Shipment Context was used outside the Provider");
  return context;
};
