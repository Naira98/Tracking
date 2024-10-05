export interface Shipment {
  provider: string;
  CurrentStatus: CurrentState;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: TransitState[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: Day[];
}

export interface Error {
  error: string;
  status: string;
}

export enum CurrentStateEnum {
  DELIVERED_TO_SENDER = "DELIVERED_TO_SENDER",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED",
}

export interface CurrentState {
  state: CurrentStateEnum;
  timestamp: string;
}

export enum TransitStateEnum {
  AVAILABLE_FOR_PICKUP = "AVAILABLE_FOR_PICKUP",
  CANCELLED = "CANCELLED",
  DELIVERED_TO_SENDER = "DELIVERED_TO_SENDER",
  DELIVERED = "DELIVERED",
  DELIVERY_FAILED = "DELIVERY_FAILED",
  IN_TRANSIT = "IN_TRANSIT",
  NOT_YET_SHIPPED = "NOT_YET_SHIPPED",
  OUT_FOR_DELIVERY = "OUT_FOR_DELIVERY",
  PACKAGE_RECEIVED = "PACKAGE_RECEIVED",
  TICKET_CREATED = "TICKET_CREATED",
  WAITING_FOR_CUSTOMER_ACTION = "WAITING_FOR_CUSTOMER_ACTION",
}

export interface TransitState {
  state: TransitStateEnum;
  timestamp: string;
  hub?: string;
  reason?: string;
}

interface Day {
  dayDate: string;
  dayName: string;
}
