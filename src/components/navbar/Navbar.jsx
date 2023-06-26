import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const Random = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="">
          <div className="">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[8vh] bg-red-50 w-[100%]">
      <input
        className="h-[2rem] ml-4 w-[18rem]"
        type="text "
        placeholder="Enter"
      />
      <ul className=" flex items-center justify-evenly bg-yellow-50 w-[30%]">
        <li className="flex items-center">
          <LanguageOutlinedIcon className="icon" />
          English
        </li>
        <li>
          <FullscreenExitOutlinedIcon className="" />
        </li>
        <li className="flex">
          <NotificationsNoneOutlinedIcon className=" " />
          <div className="text-xs">1</div>
        </li>
        <li className="flex">
          <ChatBubbleOutlineOutlinedIcon className="" />
          <div className="text-xs">2</div>
        </li>
        <li>
          <ListOutlinedIcon className="icon" />
        </li>
        <li>
          <img
            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="w-[2rem] rounded-full"
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
