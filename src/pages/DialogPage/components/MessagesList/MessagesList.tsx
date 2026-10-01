import type { DisplayedMessage } from "../../DialogProvider/types";
import { MessageCard } from "../MessageCard";
import styles from "./MessagesList.module.css";

interface MessageListProps {
  messages: DisplayedMessage[];
}

export const MessagesList = ({ messages }: MessageListProps) => (
  <div className={styles.messagesList}>
    {messages.map((message) => {
      return (
        <MessageCard
          text={message.text}
          date={message.date}
          direction={message.direction}
          key={message.id}
        />
      );
    })}
  </div>
);
