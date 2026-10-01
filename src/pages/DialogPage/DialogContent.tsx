import { Panel } from "@maxhub/max-ui";
import { useDialogContext } from "./hooks/useDialogContext";
import { PhoneForm } from "./components/PhoneForm";

import { useSendMessage } from "./hooks/useSendMessage";
import { useReceiveNotification } from "./hooks/useReceiveNotification";
import styles from "./DialogPage.module.css";
import { MessagesList } from "./components/MessagesList";
import { MessageForm } from "./components/MessageForm";

export const DialogContent = () => {
  const { phoneNumber, messages } = useDialogContext();

  const send = useSendMessage();
  useReceiveNotification();

  if (!phoneNumber) {
    return <PhoneForm />;
  }

  return (
    <Panel mode="secondary" className={styles.dialogWrapper}>
      <MessagesList messages={messages} />
      <MessageForm onSend={send} />
    </Panel>
  );
};
