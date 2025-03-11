import React from "react";
import { Link } from "react-router-dom";

const MyEquipmentDetails = ({ data }) => {
  const {
    _id,
    imageURL,
    productName,
    categoryName,
    description,
    customDetails,
    price,
    rating,
    deliveryTime,
    availability,
    sellerName,
    email,
  } = data;
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img className="h-[400px]" src={imageURL} alt={productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`} className="btn btn-primary">
            View Details
          </Link>
          <Link to={`/update/${_id}`} className="btn btn-primary">
            Update
          </Link>
          <Link to={`/details/${_id}`} className="btn btn-primary">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentDetails;
