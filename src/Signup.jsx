import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";
import { toast } from "react-toastify";

const Signup = () => {
  const { createNewUser, setUser, signInWithGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const handleSignUp = (e) => {
    e.preventDefault();
    const formElement = e.target;
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    const pattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (pattern.test(password)) {
      console.log("Password is valid");
    } else {
      toast.error(
        `Password Must Contain At least 6 Character, A Uppercase And A Lowercase alphabet  To Create An Account!`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      return;
    }

    console.log(name, email, photoURL, password);
    formElement.reset();

    createNewUser(email, password)
      .then((res) => {
        const user = res.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photoURL })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            const errorCode = err.code;
            const errorMessage = err.message;
            console.log(errorCode, errorMessage);
          });

        toast.success("User Successfully Signed Up and Logged in", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`Please Use Valid Credentials To Create An Account!`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.log(errorCode, errorMessage);
      });
  };
  const handleSignInWithGoogleBtn = () => {
    signInWithGoogle().then((res) => {
      const user = res.user;
      setUser(user);
      navigate("/");
      toast.success("Successfully Signed Up With Google");
    });
  };
  return (
    <>
      <div className="fieldset mx-auto md:w-lg w-s bg-base-200 border border-base-300 p-4 rounded-box my-5">
        <h1 className="text-center md:text-3xl text-xl my-5">
          Create An Account To Explore More
        </h1>
        <form onSubmit={handleSignUp}>
          <label className="fieldset-label">Name</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Enter Username"
            name="name"
            required
          />

          <label className="fieldset-label">Email</label>
          <input
            type="email"
            className="input  w-full"
            placeholder="Enter Email"
            name="email"
            required
          />

          <label className="fieldset-label">PhotoURL</label>
          <input
            type="text"
            className="input  w-full"
            placeholder="Enter PhotoURL"
            name="photoURL"
            required
          />

          <label className="fieldset-label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Enter Password"
            name="password"
            required
          />

          <button className="btn btn-neutral w-full mt-4">Signup</button>
        </form>
        <button
          onClick={handleSignInWithGoogleBtn}
          className="btn bg-white text-black border-[#e5e5e5]"
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Signup with Google
        </button>
        <p className="md:text-lg text-sm">
          Already have an account?{" "}
          <span className="text-orange-700">
            <NavLink to="/auth/signin">Login </NavLink>
          </span>
          here{" "}
        </p>
      </div>
    </>
  );
};

export default Signup;
