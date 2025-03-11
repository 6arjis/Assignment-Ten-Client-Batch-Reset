import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Product = ({ data }) => {
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
          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Click Here To See Details!"
            to={`/details/${_id}`}
            className="btn btn-primary"
          >
            View Details
          </Link>
          <Tooltip />
        </div>
      </div>
    </div>
  );
};

export default Product;
