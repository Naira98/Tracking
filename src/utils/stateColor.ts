import { CurrentStateEnum } from "../types/shipmentData";

interface Color {
  text: string;
  background: string;
}

const colors = {
  yellow: { text: "text-yellow", background: "background-yellow" },
  green: { text: "text-green", background: "background-green" },
  red: { text: "text-red-primary", background: "background-red-primary" },
};

const classes: Record<CurrentStateEnum, Color> = {
  DELIVERED_TO_SENDER: colors.yellow,
  DELIVERED: colors.green,
  CANCELLED: colors.red,
};

export const getStateColor = (state: keyof typeof classes) => classes[state];
