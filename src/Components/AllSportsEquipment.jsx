import React from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "./tableRow";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:table-cell">Product Name</th>
              <th className="hidden md:table-cell">Seller Name</th>
              <th className="hidden md:table-cell">Availability</th>
              <th className="md:hidden">Details</th>
            </tr>
            <tr className="md:hidden">
              <th colSpan={4} className="text-center">
                Product Details
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {equipments.map((equipment) => (
              <TableRow data={equipment} key={equipment._id}></TableRow>
            ))}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th className="hidden md:table-cell">Product Name</th>
              <th className="hidden md:table-cell">Seller Name</th>
              <th className="hidden md:table-cell">Availability</th>
              <th className="md:hidden">Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
