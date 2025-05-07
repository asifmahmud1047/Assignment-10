import { useContext } from "react";
import {Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const Header = () => {
    const { user, signout } = useContext(AuthContext);

  return (
    <div className="navbar bg-[#00255c] shadow-md justify-between md:px-4 font-font">
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
              <NavLink to="/visaapplication">My Visa Applications</NavLink>
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
      <div className="navbar-center hidden lg:flex items-center justify-center">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allvisa"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            All Visas
          </NavLink>
          <NavLink
            to="/addvisa"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            Add Visa
          </NavLink>
          <NavLink
            to="/addedvisa"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            My Added Visas
          </NavLink>
          <NavLink
            to="/visaapplication"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
                : "text-white font-bold border-2 px-4 py-2 rounded-xl"
            }
          >
            My Visa Applications
          </NavLink>
        </ul>
      </div>

      <div className="navbar-end flex  items-center gap-2">
        {user && user.email ? (
          <div className="flex items-center gap-2">
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-blue-700"
                src={user.photoURL}
                alt="User Avatar"
              />
              <div className="absolute top-full mt-2 transform -translate-x-1/2 hidden group-hover:flex flex-col items-center bg-gray-800 text-white text-sm rounded-lg px-4 py-3 shadow-lg z-50">
                {user.displayName ? (
                  <>
                    <p className="font-bold mb-2">{user.displayName}</p>
                    <Link
                      onClick={signout}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-1 rounded"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <p className="text-gray-400">User Name Not Found</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link to="/login" className="btn btn-primary">
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
