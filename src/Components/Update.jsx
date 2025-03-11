import React, { useContext } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Update = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const equipment = useLoaderData(AuthContext);
  console.log(equipment);
  const handleUpdateEquipment = (e) => {
    e.preventDefault();
    // const formElement = e.target();
    const form = new FormData(e.target);
    const imageURL = form.get("imageURL");
    const productName = form.get("proName");
    const categoryName = form.get("catName");
    const description = form.get("description");
    const customDetails = form.get("customDetails");
    const price = form.get("price");
    const rating = form.get("ratings");
    const deliveryTime = form.get("time");
    const availability = form.get("stock");
    const sellerName = form.get("name");
    const email = form.get("email");
    const newUpdatedItem = {
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
    };
    console.log(newUpdatedItem);
    //Send Data To The Server
    fetch(`http://localhost:3000/equipment/${equipment._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUpdatedItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          toast.success("Item has been updated successfully");
          navigate(`/details/${equipment._id}`);
        }
      });
  };
  return (
    <>
      <h1 className="text-center md:text-3xl text-xl my-5">
        Update Equipment Information
      </h1>
      <form
        onSubmit={handleUpdateEquipment}
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
              defaultValue={equipment.imageURL}
            />
          </div>
          <div className="col-span-6">
            <label className="fieldset-label">Products Name</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Products Name"
              name="proName"
              defaultValue={equipment.productName}
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
              defaultValue={equipment.categoryName}
            />
          </div>
          <div className="col-span-8">
            <label className="fieldset-label">Description</label>
            <input
              type="text"
              className="input w-full"
              placeholder="Enter Description"
              name="description"
              defaultValue={equipment.description}
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
              defaultValue={equipment.customDetails}
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
              defaultValue={equipment.price}
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Rating</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Ratings"
              name="ratings"
              defaultValue={equipment.rating}
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Delivery(days)</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Delivery Time"
              name="time"
              defaultValue={equipment.deliveryTime}
            />
          </div>
          <div className="col-span-3">
            <label className="fieldset-label">Availability</label>
            <input
              type="number"
              className="input w-full"
              placeholder="Enter Available Stock"
              name="stock"
              defaultValue={equipment.availability}
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
              name="name"
              Value={user.displayName}
            />
          </div>
          <div className="col-span-6">
            <label className="fieldset-label">Email</label>
            <input
              type="text"
              className="input w-full"
              value={user.email}
              name="email"
            />
          </div>
        </div>

        <button className="btn btn-neutral mt-4">Update Item</button>
      </form>
    </>
  );
};

export default Update;
