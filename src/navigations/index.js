import App from "@/App";
import SignInPage from "@/auth/sign-in";

export const navigations = [
  {
    padth: "/",
    element: <App />,
  },
  {
    padth: "/auth/sign-in",
    element: <SignInPage />,
  },
];
