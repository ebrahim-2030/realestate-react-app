import React from "react";
import { BiBath, BiBed } from "react-icons/bi";
import { Link } from "react-router-dom";

const Property = ({ property }) => {
  return (
    <Link to={`/properties/${property.id}`}>
      <div className="group max-w-[320px] mx-auto relative border border-custom_black/10 p-4">
        <div className="overflow-hidden">
          <img src={property.images[0]} className="h-52 w-full group-hover:scale-110 transition-all duration-200" alt="" />
          {property.discount.isDiscounted && (
            <span className="absolute top-0 left-0 rounded-br bg-red-500 italic text-white  border-r-1  text-lg p-1 font-bold w-14 text-center">
              %{property.discount.discountPercentage}
            </span>
          )}
        </div>
        <div className="pt-4">
          <h3 className="text-xl font-bold text-brand-primary/80">
            {property.title}
          </h3>
          <p className="my-2 text-sm text-custom_black/80">
            {property.location}
          </p>
          <div className="flex items-center justify-between mb-8">
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
