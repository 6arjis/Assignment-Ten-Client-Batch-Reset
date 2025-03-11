import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TableRow from "./tableRow";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();
  const [allEquipments, setAllEquipments] = useState(equipments);
  const [sortType, setSortType] = useState(true);

  const handleSortButton = () => {
    // const sortedData = allEquipments.sort((a, b) => a.price - b.price);
    // setAllEquipments(sortedData);
    const sortedData = [...allEquipments].sort((a, b) => {
      return sortType ? a.price - b.price : b.price - a.price;
    });
    setAllEquipments(sortedData);
    setSortType(!sortType);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="w-11/12 my-5 mx-auto">
          <button
            onClick={() => handleSortButton()}
            className="btn btn-neutral w-full mx-auto "
          >
            {sortType
              ? "Sort By Price (Currently Items Showing in high to low order)"
              : "Sort By Price (Currently Items Showing in low to high order)"}
          </button>
        </div>
        <table className="table w-full md:w-11/12 lg:w-9/12 xl:w-8/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th className="hidden md:table-cell">Product Name</th>
              <th className="hidden md:table-cell">Seller Name</th>
              <th className="hidden md:table-cell">Availability</th>
              {/* <th className="md:hidden">Details</th> */}
            </tr>
            <tr className="md:hidden">
              <th colSpan={4} className="text-center">
                Product Details
              </th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {allEquipments.map((equipment) => (
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
