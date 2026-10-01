import "@maxhub/max-ui/dist/styles.css";

import { MaxUI, Typography } from "@maxhub/max-ui";
import { CredentialsProvider } from "./CredentialsProvider";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <MaxUI>
      <ErrorBoundary
        fallback={<Typography.Label>Произошла ошибка</Typography.Label>}
      >
        <CredentialsProvider>
          <RouterProvider router={router} />
        </CredentialsProvider>
      </ErrorBoundary>
    </MaxUI>
  );
}

export default App;
