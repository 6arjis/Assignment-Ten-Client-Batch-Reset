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

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/allSportsEquipment",
        element: <AllSportsEquipment></AllSportsEquipment>,
      },
      {
        path: "/addEquipment",
        element: <AddEquipment></AddEquipment>,
      },
      {
        path: "/myEquipmentList",
        element: <MyEquipmentList></MyEquipmentList>,
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
