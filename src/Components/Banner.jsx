import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full ">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://ik.imagekit.io/6arjis/Sport%20Equipment%20%20Website%20Image/istockphoto-534943055-612x612.jpg?updatedAt=1741293903096"
          className="w-full h-[500px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://ik.imagekit.io/6arjis/Sport%20Equipment%20%20Website%20Image/istockphoto-898711156-612x612.jpg?updatedAt=1741293903220"
          className="w-full h-[500px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://ik.imagekit.io/6arjis/Sport%20Equipment%20%20Website%20Image/istockphoto-466169394-612x612.jpg?updatedAt=1741293903235"
          className="w-full h-[500px]"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
