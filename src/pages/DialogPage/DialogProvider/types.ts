export interface DisplayedMessage {
  text: string;
  date: string;
  direction: "in" | "out";
  id: string;
}

export interface DialogContextValue {
  phoneNumber: string;
  setPhoneNumber: (phone: string) => void;
  messages: DisplayedMessage[];
  pushMessage: (message: DisplayedMessage) => void;
}
