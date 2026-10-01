import type {
  DeleteNotificationResponse,
  ReceiveNotificationResponse,
  SendMessageRequest,
  SendMessageResponse,
} from "./types";

// const API_URL = "https://4100.api.green-api.com";
const API_URL = import.meta.env.VITE_API_URL;

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    throw new Error(
      `Request failed: ${response.status}. Data:${JSON.stringify(data)}`,
    );
  }
  if (response.status === 204) return undefined as T;
  return response.json();
}

export const api = {
  send: (
    idInstance: string,
    apiTokenInstance: string,
    data: SendMessageRequest,
  ) =>
    request<SendMessageResponse>(
      `/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,

      {
        method: "POST",
        body: JSON.stringify(data),
      },
    ),
  receiveNotification: (
    idInstance: string,
    apiTokenInstance: string,
    receiveTimeout: number = import.meta.env.VITE_RECEIVE_TIMEOUT,
  ) =>
    request<ReceiveNotificationResponse>(
      `/waInstance${idInstance}/receiveNotification/${apiTokenInstance}?receiveTimeout=${receiveTimeout}`,
    ),
  deleteNotification: (
    idInstance: string,
    apiTokenInstance: string,
    receiptId: number,
  ) =>
    request<DeleteNotificationResponse>(
      `/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`,
      {
        method: "DELETE",
      },
    ),
};
