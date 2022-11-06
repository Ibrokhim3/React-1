import { useRoutes } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <SuggestionsPage />,
  },
  {
    path: "",
  },
];

export const Routes = () => {
  useRoutes();
};
