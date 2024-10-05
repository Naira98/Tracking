import { useQuery } from "@tanstack/react-query";
import { trackShipment } from "../services/shipments";
import { Shipment } from "../types/shipmentData";

export const useGetShipment = (trackingNumber: string | undefined) => {
  const {data, isPending, error} = useQuery<Shipment>({
    queryKey: ["shipment", trackingNumber],
    queryFn: () => trackShipment(trackingNumber),
    retry: false,
  });
  return  {data, isPending, error};
};
