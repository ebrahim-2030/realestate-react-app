import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    // header container 
    <div className=" mt-14 sm:mt-20 max-w-screen-xl mx-auto text-white flex flex-col items-center gap-4">
      {/* title and subtitle */}
      <div className="text-center ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
          Looking For Your Dream <br />
          <span className="text-brand-secandary  block mt-2 sm:mt-3 ">Home?</span>{" "}
        </h1>
        <p className="mt-2 sm:mt-4 text-white/75  text-sm ">
          Explore the best properties in your desired
          location <br/> with ease.
        </p>
      </div>
      {/* CTA buttons */}
      <div className="mt-4 flex items-center gap-4 text-sm">
        <button className="px-6 py-2.5 border-2 bg-brand-secandary/90 rounded-sm hover:bg-transparent transition-all duration-200 ">
          Browse Now
        </button>
        <button className="px-6 py-2.5 border-2 bg-brand-primary rounded-sm hover:bg-transparent hovertransition-all duration-200  ">
          Learn More
        </button>
      </div>

      {/* search bar section */}
      <SearchBar />
    </div>
  );
};

export default Header;
