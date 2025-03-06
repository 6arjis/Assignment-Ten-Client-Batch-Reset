import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import SportsCategories from "./SportsCategories";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <section className="w-9/11 mx-auto mt-2 bg-red-200 p-3">
        <Banner></Banner>
      </section>
      <section className="w-11/12 mx-auto mt-2 ">
        <Products></Products>
      </section>
      <section className="w-11/12 mx-auto mt-2 ">
        <SportsCategories></SportsCategories>
      </section>
    </div>
  );
};

export default Home;
