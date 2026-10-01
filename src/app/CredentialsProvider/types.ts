export interface Credentials {
  idInstance: string;
  apiTokenInstance: string;
}

export interface CredentialsContextValue {
  credentials: Credentials | null;
  isAuthenticated: boolean;
  setCredentials: (creds: Credentials) => void;
  clearCredentials: () => void;
}
