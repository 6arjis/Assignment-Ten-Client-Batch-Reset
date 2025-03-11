import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  const equipments = useLoaderData();
  console.log(equipments);
  return (
    <div className="">
      <h1 className="text-3xl text-center mb-3">
        Product({equipments.length})
      </h1>
      <div className="grid grid-cols-3 gap-3">
        {equipments.slice(0, 6).map((equipment) => (
          <Product key={equipment._id} data={equipment}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
