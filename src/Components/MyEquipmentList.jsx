import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Product from "./Product";
import MyEquipmentDetails from "./MyEquipmentDetails";

const MyEquipmentList = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const allEquipments = useLoaderData();
  const usersEquipment = allEquipments.filter(
    (equipment) => equipment.email == userEmail
  );
  console.log(allEquipments, userEmail);
  return (
    <div className="my-5 w-11/12 mx-auto grid grid-cols-3 gap-5">
      {usersEquipment.map((equipment) => (
        <MyEquipmentDetails
          data={equipment}
          key={equipment._id}
        ></MyEquipmentDetails>
      ))}
    </div>
  );
};
export default MyEquipmentList;
