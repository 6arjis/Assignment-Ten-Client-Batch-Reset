import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Product from "./Product";
import { Fade } from "react-awesome-reveal";
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
          <Fade cascade>
            <Product key={equipment._id} data={equipment}></Product>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Products;
