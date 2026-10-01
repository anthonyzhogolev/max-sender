import { Outlet } from "react-router-dom";
import { Spinner } from "@maxhub/max-ui";
import { Suspense } from "react";
import styles from "./Layout.module.css";

export function Layout() {
  console.log("render Layout");
  return (
    <div className={styles.app}>
      
      <main className={styles.main}>
        <Suspense fallback={<Spinner appearance="primary" size={20} />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}
