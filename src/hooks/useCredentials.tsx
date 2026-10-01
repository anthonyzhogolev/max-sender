import { useContext } from "react";
import { CredentialsContext } from "@app/CredentialsProvider/CredentialsContext";

export function useCredetials() {
  const ctx = useContext(CredentialsContext);
  if (!ctx) {
    throw new Error("useCredetials must be used within <CredentialsContext>");
  }
  return ctx;
}
