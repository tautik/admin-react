import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className=" flex-2 shadow-md p-4">
      <div className=" flex items-center justify-between text-gray-500">
        <h1 className="title text-base font-medium">Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-4 p-4">
        <div className=" w-24 h-24">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className=" font-medium text-gray-500">Total sales made today</p>
        <p className=" text-3xl">$420</p>
        <p className=" text-sm font-light text-gray-500">
          Previous transactions processing. Last payments may not be included.
        </p>
        <div className=" w-full flex items-center justify-between">
          <div className="item text-center">
            <div className=" text-sm text-gray-500">Target</div>
            <div className="itemesult positive flex items-center mt-2 text-sm">
              <KeyboardArrowDownIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className=" text-sm text-gray-500">Last Week</div>
            <div className="itemResult positive flex items-center mt-2 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
          <div className="item text-center">
            <div className=" text-sm text-gray-500">Last Month</div>
            <div className="itemResult positive flex items-center mt-2 text-sm">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
              <div className="resultAmount">$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
