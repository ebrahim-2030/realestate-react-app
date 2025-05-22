import React from "react";

const AboutHeader = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-white pt-24 ">
      <div className="flex flex-col items-center text-center gap-6">
        {/* title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
          Experience You Can Count On
          <span className="text-brand-secandary  mt-2 sm:mt-3 lg:block ">
            Learn About Us
          </span>
        </h2>
        {/* description */}
        <p className=" text-white/75  text-sm leading-6">
          Years of Real Estate Expertise, Delivered with Care
        </p>
      </div>
    </div>
  );
};

export default AboutHeader;
