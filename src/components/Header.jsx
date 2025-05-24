import React, { useRef } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { motion, useInView } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  // navigate to search page
  const handleNavigate = () => {
    navigate("/search-result");
    scrollTo(0, 0);
  };

  const transition = {
    duration: 0.8,
    delay: 0.3,
    ease: "easeOut",
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    // header container
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={transition}
      className=" mt-14 sm:mt-20 max-w-screen-xl mx-auto text-white flex flex-col items-center gap-4"
    >
      {/* title and subtitle */}
      <div ref={ref} className="text-center ">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10 sm:leading-[50px] lg:leading-[60px]">
          Find a Place You’ll Love <br /> to Call{" "}
          <span className="text-brand-secandary mt-2 sm:mt-3 ">Home.</span>
        </h1>
        <p className=" text-white/75  text-sm leading-6 mt-2">
          From cozy apartments to spacious family homes, we help <br /> you
          settle into the perfect neighborhood.
        </p>
      </div>
      {/* CTA buttons */}
      <div className="mt-4 flex items-center gap-4 text-sm">
        <button
          onClick={handleNavigate}
          className="px-6 py-2.5 border-2 bg-brand-secandary/90 rounded-sm hover:bg-transparent transition-all duration-200 "
        >
          Browse Now
        </button>
        <Link
          to="about"
          offset={-150}
          className="cursor-pointer px-6 py-2.5 border-2 bg-white/10 rounded-sm hover:bg-transparent hovertransition-all duration-200  "
        >
          Learn More
        </Link>
      </div>

      {/* search bar section */}
      <SearchBar />
    </motion.div>
  );
};

export default Header;
