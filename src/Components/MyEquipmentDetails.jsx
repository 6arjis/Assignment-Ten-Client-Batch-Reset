import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentDetails = ({ data }) => {
  const navigate = useNavigate();
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
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/equipment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              navigate(`/myEquipmentList`);
            }
          });
      }
    });
  };
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
          <Link onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentDetails;
