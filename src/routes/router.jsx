import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import AllSportsEquipment from "../Components/AllSportsEquipment";
import AddEquipment from "../Components/AddEquipment";
import MyEquipmentList from "../Components/MyEquipmentList";
import Signin from "../Signin";
import Signup from "../Signup";
import Home from "../Components/Home";

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
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);
export default router;
