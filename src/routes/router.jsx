import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllSportsEquipment from "../Components/AllSportsEquipment";
import AddEquipment from "../Components/AddEquipment";
import MyEquipmentList from "../Components/MyEquipmentList";
import Signin from "../Signin";
import Signup from "../Signup";
import Home from "../Components/Home";
import Details from "../Components/Details";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Update from "../Components/Update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`http://localhost:3000/equipment`),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipment/${params.id}`),
      },
      {
        path: "/allSportsEquipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch(`http://localhost:3000/equipment`),
      },
      {
        path: "/addEquipment",
        element: (
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/equipment/${params.id}`),
      },

      {
        path: "/myEquipmentList",
        element: (
          <PrivateRoute>
            <MyEquipmentList></MyEquipmentList>
          </PrivateRoute>
        ),
        loader: () => fetch(`http://localhost:3000/equipment`),
      },
      {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
          {
            path: "/auth/signin",
            element: <Signin></Signin>,
          },
          {
            path: "/auth/signup",
            element: <Signup></Signup>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
export default router;
