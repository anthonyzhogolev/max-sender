export interface SendMessageRequest {
  chatId: string;
  message: string;
  quotedMessageId?: string;
  typingTime?: number;
  typingType?: string;
}

export interface SendMessageResponse {
  idMessage: string;
}

export interface ReceiveNotificationResponse {
  body: Body;
  receiptId: number;
}

export interface Body {
  idMessage: string;
  instanceData: InstanceData;
  messageData: MessageData;
  senderData: SenderData;
  timestamp: number;
  typeWebhook: string;
}

export interface InstanceData {
  idInstance: number;
  typeInstance: string;
  wid: string;
}

export interface MessageData {
  textMessageData: TextMessageData;
  typeMessage: string;
}

export interface TextMessageData {
  textMessage: string;
}

export interface SenderData {
  chatId: string;
  sender: string;
  senderName: string;
}

export interface DeleteNotificationResponse {
  reason: string;
  result: boolean;
}
