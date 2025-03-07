import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleAddEquipment = (e) => {
    e.preventDefault();
    // const formElement = e.target();
    const form = new FormData(e.target);
    const imageURL = form.get("imageURL");
    const productName = form.get("proName");
    const categoryName = form.get("catName");
    const description = form.get("description");
    const customDetails = form.get("customDetails");
    const price = form.get("price");
    const rating = form.get("rating");
    const deliveryTime = form.get("time");
    const availability = form.get("stock");
    const newItem = {
      imageURL,
      productName,
      categoryName,
      description,
      customDetails,
      price,
      rating,
      deliveryTime,
      availability,
    };
    console.log(newItem);
  };
  return (
    <>
      <h1 className="text-center md:text-3xl text-xl my-5">
        Add Equipment To This Website
      </h1>
      <form
        onSubmit={handleAddEquipment}
        className="fieldset mx-auto md:w-5xl w-s bg-base-200 border border-base-300 p-4 rounded-box my-5 "
      >
        <div className="grid md:grid-cols-12 grid-cols-1 gap-2">
          <div className=" col-span-6">
            <label className="fieldset-label">ImageURL</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Product Image"
              name="imageURL"
            />
          </div>
          <div className="col-span-6">
            <label className="fieldset-label">Products Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Products Name"
              name="proName"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className=" col-span-4">
            <label className="fieldset-label">Category</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Category Name"
              name="catName"
            />
          </div>
          <div className="col-span-8">
            <label className="fieldset-label">Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Description"
              name="description"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className=" col-span-12">
            <label className="fieldset-label">Customization</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Customization Details"
              name="customDetails"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-3">
            <label className="fieldset-label">Price</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Price"
              name="price"
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Rating</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Ratings"
              name="ratings"
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Delivery(days)</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Delivery Time"
              name="time"
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Availability</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Available Stock"
              name="stock"
            />
          </div>
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-2">
          <div className=" col-span-6">
            <label className="fieldset-label">Name</label>
            <input
              type="text"
              className="input w-full"
              value={user.displayName}
            />
          </div>
          <div className="col-span-6">
            <label className="fieldset-label">Email</label>
            <input type="text" className="input w-full" value={user.email} />
          </div>
        </div>

        <button className="btn btn-neutral mt-4">Add Item</button>
      </form>
    </>
  );
};

export default AddEquipment;
