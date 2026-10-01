interface ImportMetaEnv {
  VITE_API_URL: string;
  VITE_RECEIVE_TIMEOUT: number;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
