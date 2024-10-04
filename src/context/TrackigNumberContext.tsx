import React, { createContext, ReactNode, useState } from "react";

interface IShipment {
  trackingNumber: string | null;
  setTrackingNumber: React.Dispatch<React.SetStateAction<string | null>>;
  stateColor: string | null;
  setStateColor: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ShipmentContext = createContext<IShipment | null>(null);

export const ShipmentProvider = ({ children }: { children: ReactNode }) => {
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  const [stateColor, setStateColor] = useState<string | null>(null);
  return (
    <ShipmentContext.Provider
      value={{ trackingNumber, setTrackingNumber, stateColor, setStateColor }}
    >
      {children}
    </ShipmentContext.Provider>
  );
};
