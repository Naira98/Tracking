export const getStateColor = (state: string) => {
    if (state === "DELIVERED_TO_SENDER") {
      return "text-yellow";
    } else if (state === "DELIVERED") {
      return "text-green";
    } else if (state === "CANCELLED") {
      return "text-red-primary";
    }
  };