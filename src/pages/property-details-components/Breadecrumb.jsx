import React from "react";
import { MdArrowForwardIos, MdKeyboardArrowRight } from "react-icons/md";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";

// breadcrumb component showing navigation path with icons
const Breadecrumb = ({ title }) => {
  return (
    <div className="px-4 bg-brand-primary pt-[8vh] lg:pt-[9.5vh] text-white/60">
      {/* container for breadcrumb links and icons */}
      <div className="max-w-screen-xl text-sm font-medium mx-auto mt border-t border-white/40 py-6 flex items-center  gap-1">
        <Link to="/" className="">
          Home{" "}
        </Link>
        <MdArrowForwardIos className="text-lg" />
        <span className="flex text-nowrap">Property Details</span>
        <MdArrowForwardIos className="text-lg" />
        <span className="truncate">{title}</span>
      </div>
    </div>
  );
};

export default Breadecrumb;
