import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  return (
    <Link
      to={`/property-details/${property.id}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      <div className="group max-w-[350px] mx-auto relative border border-custom_black/10 p-4">
        <div className="overflow-hidden">
          <img
            src={property.images[0]}
            className="h-52 w-full group-hover:scale-110 transition-all duration-500"
            alt=""
          />
          {property.discount.isDiscounted && (
            <span
              className="absolute top-0 left-0  bg-red-500 text-white text-lg  font-bold flex justify-center items-center w-11 h-11
                 text-center border-2 border-brand-secandary"
            >
              %{property.discount.discountPercentage}
            </span>
          )}
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-bold text-brand-primary/80 truncate">
            {property.title}
          </h3>
          <p className="font-medium text-custom_black/60 my-2 flex items-center gap-2 text-sm justify-between">
            <IoLocation className="text-blue-400" />
            <span className="truncate flex-1">{property.location}</span>
            <span className="uppercase px-2 text-center text-xs flex-nowrap bg-green-500  text-white">
              {property.listingType === "sale" ? "for sale" : "for rent"}
            </span>
          </p>
          <div className="flex items-center justify-between mt-6 mb-8">
            <div className=" ">
              <span className="font-bold text-lg text-brand-primary/80 ">
                $ {property.price}
              </span>
              <span className="text-sm text-custom_black/50">
                {property.listingType === "For Rent" ? "/month" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2  text-white ">
              <div className="flex  items-center gap-0.5 bg-brand-secandary px-2 py-0.5 rounded-sm">
                <span>{property.features.bedrooms}</span> <BiBed size={18} />
              </div>
              <div className="flex  items-center gap-0.5 bg-red-500 px-2 py-0.5 rounded-sm">
                <span>{property.features.bathrooms}</span> <BiBath size={18} />
              </div>
            </div>
          </div>
          <button className="bg-brand-primary/90 hover:bg-brand-primary transition-all duration-100 text-white w-full py-2 text-sm">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Property;
