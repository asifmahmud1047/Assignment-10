import { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const Header = () => {
    const { user, signout } = useContext(AuthContext);

  return (
    <div className="navbar bg-[#00255c] shadow-md justify-between md:px-4">
      {/* Left Side: Logo */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown lg:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost"
            aria-label="Menu"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 bg-white p-2 shadow-md rounded-box z-[1]"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/allvisa">All Visas</NavLink>
            </li>
            <li>
              <NavLink to="/addvisa">Add Visa</NavLink>
            </li>
            <li>
              <NavLink to="/addedvisa">My Added Visas</NavLink>
            </li>
            <li>
              <NavLink to="/application">My Visa Applications</NavLink>
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center ">
          <h1 className="font-bold text-xl text-white px-2">WorldVisaDesk</h1>
          <img
            className=" w-10"
            src="https://img.icons8.com/?size=50&id=2487&format=png"
            alt=""
          />
        </div>
      </div>

      {/* Middle Side: Navigation Links */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "text-white font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allvisa"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "text-white font-bold"
            }
          >
            All Visas
          </NavLink>
          <NavLink
            to="/addvisa"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "text-white font-bold"
            }
          >
            Add Visa
          </NavLink>
          <NavLink
            to="/addedvisa"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "text-white font-bold"
            }
          >
            My Added Visas
          </NavLink>
          <NavLink
            to="/application"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-bold" : "text-white font-bold"
            }
          >
            My Visa Applications
          </NavLink>
        </ul>
      </div>

      {/* Right Side: Login Button */}
      <div className="navbar-end flex  items-center gap-2">
        {user && user.email ? (
          <div className="flex items-center gap-2">
            {/* <h1 className="text-white font-bold">{user.email}</h1> */}
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt="User Avatar"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-12 hidden group-hover:flex bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-lg">
                {user.displayName || "User Name Not Found"}
              </div>
            </div>
            <Link onClick={signout} className="btn btn-primary">
              Logout
            </Link>
          </div>
        ) : (
          <div className="flex  items-center gap-2">
            <Link to={"/login"} className="btn btn-primary">
              Login
            </Link>
            <Link to={"/signup"} className="btn btn-primary">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
