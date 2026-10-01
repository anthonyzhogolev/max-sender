import { useState } from "react";
import { Flex, IconButton, Textarea } from "@maxhub/max-ui";
import arrowUp from "@assets/arrow-up.svg";
import styles from "./MessageForm.module.css";

interface MessageFormProps {
  onSend: (message: string) => void;
}

export const MessageForm = ({ onSend }: MessageFormProps) => {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSend(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="row" gap={12} className={styles.messageInputWrapper}>
        <Textarea
          defaultValue=""
          placeholder="Сообщение"
          onChange={handleChange}
          className={styles.messageInput}
          rows={1}
          autoFocus
        />
        <IconButton variant="primary" type="submit" disabled={!message}>
          <img src={arrowUp} className="arrow-up" alt="Arrow up" />
        </IconButton>
      </Flex>
    </form>
  );
};
