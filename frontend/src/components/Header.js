import React, { useState } from "react";
import { IoMdSearch, IoIosLogOut } from "react-icons/io";
//import { IoLogOut } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { API_END_POINT } from "../utils/constant";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";
import cmlogo from "./../../src/asset/cm logo.png";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector((store) => store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleHandler = () => {
    dispatch(setToggle());
  };

  return (
    <div className="absolute z-10 flex w-full items-center justify-between px-6 bg-black">
      <div className="flex items-center">
        <img className="w-20" src={cmlogo} alt="cmlogo" />
        <div className="ml-4 flex">
          {user && (
            <>
              <h1 className="text-lg font-medium text-white mr-4">Home</h1>
              <h1 className="text-lg font-medium text-white mr-4">Movies</h1>
              <a
                href="https://in.bookmyshow.com/"
                className="text-lg font-medium text-white"
              >
                Ticket booking
              </a>
            </>
          )}
        </div>
      </div>
      {user ? (
        <div className="flex items-center">
          <h1 className="text-lg font-medium text-white">{user.fullName}</h1>
          <div className="ml-4">
            <button
              onClick={toggleHandler}
              className="bg-blue-800 text-white px-4 py-2 rounded"
            >
              {toggle ? "Home" : "Search"}
            </button>
            <button className="bg-blue-800 text-white px-4 py-2 ml-2 rounded">
              <a href="https://ferr-nu.vercel.app/" className="text-white">
                Tryme
              </a>
            </button>
            <button
              className="bg-blue-800 text-white px-4 py-2 ml-2 rounded"
              onClick={handleMenuOpen}
            >
              Filter
            </button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Happy</MenuItem>
              <MenuItem onClick={handleMenuClose}>Surprise</MenuItem>
              <MenuItem onClick={handleMenuClose}>Joyful</MenuItem>
            </Menu>
            <button
              onClick={logoutHandler}
              className="text-white px-2 py-3 ml-2 rounded"
              style={{ fontSize: "24px" }}
            >
              <IoIosLogOut />
            </button>
          </div>
        </div>
      ) : (
        <div className="ml-4">
          <Link to="/login">
            <button className="bg-blue-800 text-white px-6 py-2 rounded">
              Sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
