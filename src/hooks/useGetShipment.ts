import { useQuery } from "@tanstack/react-query";
import { trackShipment } from "../services/shipments";
import { Error, Shipment } from "../types/shipmentData";

export const useGetShipment = (trackingNumber: string, enabled: boolean) => {
  const { data, isPending, error } = useQuery<Shipment | Error>({
    queryKey: ["shipment", trackingNumber],
    queryFn: () => trackShipment(trackingNumber),
    enabled: enabled,
  });
  return [data, isPending, error];
};
