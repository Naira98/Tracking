import { useContext } from "react";
import { TrackingNumberContext } from "./TrackigNumberContext";

export const useTrackingNumber = () => {
  const context = useContext(TrackingNumberContext);
  if (context === null)
    throw new Error("Tracking Number Context was used outside the Provider");
  return context;
};
