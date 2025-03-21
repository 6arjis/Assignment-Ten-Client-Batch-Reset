import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import { useTheme } from "../ThemeContext";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const handleLogOutBtn = () => {
    logOutUser()
      .then(() => {
        toast.success("User Successfully  Logged Out", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allSportsEquipment">All Sports Equipments</NavLink>
            </li>
            <li>
              <NavLink to="/addEquipment">Add Equipment</NavLink>
            </li>
            <li>
              <NavLink to="/myEquipmentList">My Equipment List</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FitGearHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/allSportsEquipment">All Sports Equipments</NavLink>
          </li>
          <li>
            <NavLink to="/addEquipment">Add Equipment</NavLink>
          </li>
          <li>
            <NavLink to="/myEquipmentList">My Equipment List</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex  gap-2">
        {user ? (
          <div className="avatar flex gap-2">
            <div className="w-8 rounded-full">
              <img id="my-anchor-element" src={user.photoURL} />
              <Tooltip
                style={{ zIndex: 9999 }}
                anchorSelect="#my-anchor-element"
                content={user.displayName}
              />
            </div>
            <button onClick={handleLogOutBtn} className="btn btn-sm">
              Logout
            </button>
          </div>
        ) : (
          <div className="join join-vertical lg:join-horizontal">
            <NavLink to="/auth/signin" className="btn btn-sm join-item">
              Login
            </NavLink>
            <NavLink to="/auth/signup" className="btn btn-sm join-item">
              Sign Up
            </NavLink>
          </div>
        )}
        <button onClick={toggleTheme} className="btn btn-sm theme-toggle">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      </div>
    </div>
  );
};

export default Header;
