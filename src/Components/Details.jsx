import React from "react";

import { useLoaderData } from "react-router-dom";
const Details = () => {
  const equipmentDetails = useLoaderData();
  console.log(equipmentDetails);
  const {
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
  } = equipmentDetails;

  const formattedPrice = parseInt(price).toLocaleString("en-IN");

  // Create rating stars
  const renderRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < parseInt(rating) ? "text-yellow-400" : "text-gray-300"}
        >
          ⭐
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 m-4">
      <div className="md:flex">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            className="w-full h-64 object-cover md:h-full"
            src={imageURL}
            alt={productName}
          />
        </div>

        {/* Product Details */}
        <div className="p-6 md:w-1/2 space-y-4">
          {/* Category and Price */}
          <div className="flex justify-between items-start">
            <span className="text-sm text-gray-500 uppercase">
              {categoryName}
            </span>
            <span className="text-2xl font-bold text-emerald-600">
              ৳{formattedPrice}
            </span>
          </div>

          {/* Product Name and Rating */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {productName}
            </h2>
            <div className="flex items-center">
              {renderRating()}
              <span className="ml-2 text-gray-600">({rating})</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

          {/* Custom Details */}
          <div className="flex flex-wrap gap-2">
            {customDetails.split(",").map((detail, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {detail.trim()}
              </span>
            ))}
          </div>

          {/* Delivery and Availability */}
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <span className="mr-1">⏳</span>
              <span>{deliveryTime} days delivery</span>
            </div>
            <div className="flex items-center">
              <span className="mr-1">✅</span>
              <span
                className={
                  availability === "In Stock"
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {availability} in stock
              </span>
            </div>
          </div>

          {/* Seller Information */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-2">
              <span>👤</span>
              <span className="font-medium text-gray-700">{sellerName}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <a
                href={`mailto:${email}`}
                className="text-blue-600 hover:underline text-sm"
              >
                {email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
