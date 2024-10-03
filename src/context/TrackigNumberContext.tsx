import React, { createContext, ReactNode, useState } from "react";

interface ITrackingNumber {
  trackingNumber: string | null;
  setTrackingNumber: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TrackingNumberContext = createContext<ITrackingNumber | null>(
  null,
);

export const TrackingNumberProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [trackingNumber, setTrackingNumber] = useState<string | null>(null);
  return (
    <TrackingNumberContext.Provider
      value={{ trackingNumber, setTrackingNumber }}
    >
      {children}
    </TrackingNumberContext.Provider>
  );
};
