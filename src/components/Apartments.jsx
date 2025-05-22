import React, { useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import { useProperties } from "../contexts/PropertiesContext";
import Property from "./Property";
import { BiArrowToRight } from "react-icons/bi";

const Apartments = () => {
  const navigate = useNavigate();

  // navigate to more properties
  const handleNavigate = () => {
    navigate("/search-result?propertyType=apartment");
    window.scrollTo(0, 0);
  };

  //   get all properties from context
  const { allProperties } = useProperties();

  //   filter apartment-type properties
  const filteredProperties = allProperties.filter(
    (property) => property.propertyType === "Apartment"
  );

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-end justify-between">
        {/* title and description */}
        <div className=" flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
            Modern Apartments
          </h2>
          <p className=" text-sm md:text-base mt-2 lg:mt-2  pb-3 text-custom_black/70 font-medium">
            Stylish and well-located apartments, perfect for city living with
            top-tier amenities..
          </p>
        </div>
        {/* navigate to more properties */}
        <button
          onClick={handleNavigate}
          className="hidden mt-6 p-2 text-sm  font-bold text-brand-primary/80  sm:flex items-center"
        >
          View More <IoIosArrowDroprightCircle className="text-lg ml-1" />
        </button>
      </div>

      {/* grid of apartment properties */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-10 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProperties.slice(3, 7).map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>

      {/* view more button for small screen */}
      <div className="flex sm:hidden justify-center">
        <button
          onClick={handleNavigate}
          className=" mt-6 p-2  font-bold border-2  border-brand-primary/70 text-brand-primary/80 text-xs flex items-center"
        >
          View More <BiArrowToRight className="ml-1 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Apartments;
