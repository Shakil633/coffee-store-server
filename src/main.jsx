import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import SingUp from "./components/SingUp.jsx";
import SIngIn from "./components/SIngIn.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffe-store-server-ezgez9yzi-shakil-ahmeds-projects.vercel.app/coffee"),
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`https://coffe-store-server-ezgez9yzi-shakil-ahmeds-projects.vercel.app/coffee/${params.id}`),
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "/singIn",
    element: <SIngIn></SIngIn>,
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader: ()=> fetch('https://coffe-store-server-ezgez9yzi-shakil-ahmeds-projects.vercel.app/user')
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
