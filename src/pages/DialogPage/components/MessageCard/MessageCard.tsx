import type { DisplayedMessage } from "../../DialogProvider/types";
import styles from "./MessageCard.module.css";
import { cx } from "@lib/utils";

type MessageCardProps = Omit<DisplayedMessage, "id">;

export const MessageCard = ({ text, date, direction }: MessageCardProps) => (
  <div
    className={cx(styles.message, direction === "in" ? styles.in : styles.out)}
  >
    <div className={styles.textContainer}>{text}</div>
    <div className={styles.time}>{date}</div>
  </div>
);
