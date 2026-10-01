import { useCredetials } from "@/hooks/useCredentials";
import { api } from "@/lib/api";
import { useDialogContext } from "./useDialogContext";
import type { DisplayedMessage } from "../DialogProvider/types";
import { useEffect } from "react";
import { getFormattedTime } from "@lib/utils";

export const useReceiveNotification = () => {
  const { credentials } = useCredetials();
  const { pushMessage } = useDialogContext();

  useEffect(() => {
    if (!credentials) {
      throw new Error("Credentials are not set");
    }

    const receive = async () => {
      try {
        const { body, receiptId } = await api.receiveNotification(
          credentials?.idInstance,
          credentials?.apiTokenInstance,
        );
        if (body) {
          if (body.typeWebhook === "incomingMessageReceived") {
            const message: DisplayedMessage = {
              text: body.messageData.textMessageData.textMessage,
              date: getFormattedTime(),
              direction: "in",
              id: body.idMessage,
            };

            pushMessage(message);
          }
          const { result } = await api.deleteNotification(
            credentials?.idInstance,
            credentials?.apiTokenInstance,
            receiptId,
          );
        }
      } catch (e) {
        console.debug("polling...");
      }
    };
    const id = setInterval(
      receive,
      import.meta.env.VITE_RECEIVE_TIMEOUT * 1000 + 1,
    );
    return () => clearInterval(id);
  }, [credentials, pushMessage]);
};
