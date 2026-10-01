import { useCredetials } from "@/hooks/useCredentials";
import { api } from "@/lib/api";
import { useDialogContext } from "../hooks/useDialogContext";
import { getFormattedTime } from "@/lib/utils";

export const useSendMessage = () => {
  const { credentials } = useCredetials();
  const { phoneNumber, pushMessage } = useDialogContext();

  const sendMessage = async (message: string) => {
    if (!credentials) {
      throw new Error("Credentials are not set");
    }

    const { idInstance, apiTokenInstance } = credentials;
    try {
      const response = await api.send(idInstance, apiTokenInstance, {
        chatId: `${phoneNumber}@c.us`,
        message,
      });
      pushMessage({
        text: message,
        date: getFormattedTime(),
        direction: "out",
        id: response.idMessage,
      });
    } catch (e) {
      console.log("error", e);
    }
  };

  return  sendMessage ;
};
