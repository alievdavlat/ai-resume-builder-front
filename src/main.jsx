import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInPage from "./auth/sign-in/index.jsx";
import ViewResume from "./my-resume/[resumeId]/view/index.jsx";
import EditResume from "./dashboard/resume/[resumeId]/edit/index.jsx";
import Dashboard from "./dashboard/index.jsx";
import HomePage from "./home/index.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/resume/:resumeId/edit",
        element: <EditResume />,
      },
    ],
  },
  ,
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/my-resume/:resumeId/view",
    element: <ViewResume />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
