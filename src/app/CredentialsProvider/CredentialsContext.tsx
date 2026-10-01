import {
  createContext,
} from "react";
import type { CredentialsContextValue } from "./types";



export const CredentialsContext = createContext<CredentialsContextValue | null>(
  null,
);
