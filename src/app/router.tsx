/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createHashRouter, Navigate, Outlet } from "react-router-dom";
import { Layout } from "./Layout";
import { useCredetials } from "@hooks/useCredentials";

const CredetialPage = lazy(async () => import("@pages/CredetialPage"));
const DialogPage = lazy(async () => import("@pages/DialogPage"));
const NotFoundPage = lazy(async () => import("@pages/NotFoundPage"));

function ProtectedRoute() {
  const { isAuthenticated } = useCredetials();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}

export const router = createHashRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <ProtectedRoute />,
        children: [{ index: true, element: <DialogPage /> }],
      },
      { path: "login", element: <CredetialPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
