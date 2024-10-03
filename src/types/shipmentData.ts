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

interface State {
  state: string;
  timestamp: string;
  hub?: string;
}

interface Day {
  dayDate: string;
  dayName: string;
}
