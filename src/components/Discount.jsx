import React from "react";
import { useEffect } from "react";

import { useProperties } from "../contexts/PropertiesContext";
import { BiArrowFromRight, BiArrowToRight } from "react-icons/bi";
import Property from "./Property";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Discount = () => {
  const { filteredProperties, applyFilters } = useProperties();

  // apply discount filter on component mount
  useEffect(() => {
    applyFilters({ discountedOnly: true });
  }, []);

  const navigate = useNavigate();

  return (
    <div className=" max-w-screen-xl mx-auto">
      <div className="flex items-end justify-between">
        {/* title and description */}
        <div className=" flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
            Discounted Properties
          </h2>
          <p className=" text-sm md:text-base mt-2 lg:mt-4  pb-3 text-custom_black/70 font-medium">
            Stylish and well-located apartments, perfect for city living with
            top-tier amenities.
          </p>
        </div>

        {/* navigate to more properties */}
        <button
          onClick={() => navigate("properties/all?discountedOnly=true")}
          className=" mt-6 p-2 text-sm  font-bold text-brand-primary/80  flex items-center"
        >
          View More <IoIosArrowDroprightCircle className="text-lg ml-1" />
        </button>
      </div>

      {/* grid of discounted properties */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {filteredProperties.slice(0, 4).map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>

      {/* view more button for small screen */}
      <div className="flex sm:hidden justify-center">
        <button
          onClick={() => navigate("/properties/all?discountedOnly=true")}
          className=" mt-6 p-2  font-bold border-2  border-brand-primary/70 text-brand-primary/80 text-xs flex items-center"
        >
          View More <BiArrowToRight className="ml-1 text-lg " />
        </button>
      </div>
    </div>
  );
};

export default Discount;
