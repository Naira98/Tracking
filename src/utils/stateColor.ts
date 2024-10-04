export const getStateColor = (state: string) => {
    if (state === "DELIVERED_TO_SENDER") {
      return "yellow";
    } else if (state === "DELIVERED") {
      return "green";
    } else if (state === "CANCELLED") {
      return "red-primary";
    }
    return null;
  };