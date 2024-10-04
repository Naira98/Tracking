export interface Shipment {
  provider: string;
  CurrentStatus: State;
  PromisedDate: string;
  TrackingNumber: string;
  TrackingURL: string;
  SupportPhoneNumbers: string[];
  TransitEvents: State[];
  CreateDate: string;
  isEditableShipment: boolean;
  nextWorkingDay: Day[];
}

export interface Error {
  error: string;
  status: string;
}

export interface State {
  state: string;
  timestamp: string;
  hub?: string;
  reason?: string;
}

interface Day {
  dayDate: string;
  dayName: string;
}
