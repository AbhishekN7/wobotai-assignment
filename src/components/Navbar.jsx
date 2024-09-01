import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import wobotailogo from "../assests/wobotailogo.png"
// import { logoutAction } from "../redux/actions/authAction";

export default function Navbar() {
  return (
    <div>
      <nav className="">
        <div className="container">
          <div className="mx-auto w-100 text-3xl font-bold flex justify-center items-center">
            <img src={wobotailogo} alt="Wobot AI Logo" className="filter brightness-80" />
          </div>
        </div>
      </nav>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
