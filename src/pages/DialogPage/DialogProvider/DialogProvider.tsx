import { useState } from "react";
import { DialogContext } from "./DialogContext";
import type { DisplayedMessage } from "./types";

export const DialogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [messages, setMessages] = useState<DisplayedMessage[]>([]);

  const pushMessage = (newMessage: DisplayedMessage) => {
    setMessages((oldMessages) => [...oldMessages, newMessage]);
  };
  return (
    <DialogContext.Provider
      value={{ phoneNumber, setPhoneNumber, pushMessage, messages }}
    >
      {children}
    </DialogContext.Provider>
  );
};
