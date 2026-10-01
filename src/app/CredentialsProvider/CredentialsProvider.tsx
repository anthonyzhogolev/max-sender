import { useCallback, useMemo, useState, type ReactNode } from "react";
import { CredentialsContext } from "./CredentialsContext";
import type { Credentials, CredentialsContextValue } from "./types";

export function CredentialsProvider({ children }: { children: ReactNode }) {
  const [credentialsState, setCredentialsState] = useState<Credentials | null>(
    null,
  );

  const setCredentials = useCallback((creds: Credentials) => {
    setCredentialsState(creds);
  }, []);

  const clearCredentials = useCallback(() => {
    setCredentialsState(null);
  }, []);

  const value = useMemo<CredentialsContextValue>(
    () => ({
      credentials: credentialsState,
      isAuthenticated: credentialsState !== null,
      setCredentials,
      clearCredentials,
    }),
    [credentialsState, setCredentials, clearCredentials],
  );

  return (
    <CredentialsContext.Provider value={value}>
      {children}
    </CredentialsContext.Provider>
  );
}
