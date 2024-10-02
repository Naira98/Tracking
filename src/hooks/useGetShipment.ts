import { useQuery } from "@tanstack/react-query";
import { trackShipment } from "../services/shipments";
import { Shipment } from "../types/shipmentData";

export const useGetShipment = (trackingNumber: string) => {
  const { data, isPending, error } = useQuery<Shipment>({
    queryKey: ["shipment", trackingNumber],
    queryFn: () => trackShipment(trackingNumber),
  });
  return [data, isPending, error];
};
