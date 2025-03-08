import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({ data }) => {
  const { _id, imageURL, productName, price, availability, sellerName } = data;

  return (
    <tr>
      <td className="md:hidden text-center">Product Details</td>
      <td className="md:hidden">
        <div className="flex flex-col items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">{price}</div>
            <div>{sellerName}</div>
            <div>{availability}</div>
          </div>
          <button className="btn btn-ghost btn-xs">details</button>
        </div>
      </td>
      <td className="hidden md:table-cell">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={imageURL} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">{price} BDT</div>
          </div>
        </div>
      </td>
      <td className="hidden md:table-cell">{sellerName}</td>
      <td className="hidden md:table-cell">{availability}</td>
      <th className="hidden md:table-cell">
        <Link to={`/details/${_id}`} className="btn  btn-sm">
          details
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
