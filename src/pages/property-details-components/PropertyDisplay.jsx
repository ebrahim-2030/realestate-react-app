import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadecrumb from "./Breadecrumb";
import { IoLocation } from "react-icons/io5";
import { MdOutlineArrowRightAlt, MdOutlineChair } from "react-icons/md";
import { BiBath, BiBed } from "react-icons/bi";
import agents from "../../data/agents";
import Agent from "../../components/Agent";

import { motion, useInView } from "framer-motion";

// Component to display detailed information about a property
const PropertyDisplay = ({ property }) => {
  if (!property) {
    return <div className="text-center py-10">Loading property...</div>;
  }

  // Ref for image container to add/remove animation classes
  const displayRef = useRef(null);
  // State to keep track of currently displayed main image
  const [currentImage, setCurrentImage] = useState(null);
  // Hook to navigate programmatically
  const navigate = useNavigate();

  // Effect to reset and animate the main image when property changes
  useEffect(() => {
    setCurrentImage(null);

    const timer = setTimeout(() => {
      setCurrentImage(property.images[0]);
      if (displayRef.current) {
        displayRef.current.classList.add("animate-img");
        setTimeout(() => {
          displayRef.current.classList.remove("animate-img");
        }, 600);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [property.id]);

  // Find the agent associated with the property
  const agent = agents.find((agent) => agent.id === property.agent);

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div>
      <Breadecrumb title={property.title} />

      {/* Main property display and sidebar info */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="px-4 lg:px-0 max-w-screen-xl mx-auto py-4 md:py-8"
      >
        <div className="flex flex-col gap-4 lg:gap-8 lg:items-center lg:flex-row">
          {/* Image gallery and thumbnails */}
          <div className="lg:flex-1 flex flex-col md:flex-row-reverse items-center gap-4">
            <div className="h-[68vh] md:h-[75vh] lg:h-[88vh] md:flex-1 p-4 border flex items-center justify-center rounded-sm">
              {currentImage ? (
                <img
                  key={property.id}
                  ref={displayRef}
                  className="max-h-full rounded-sm"
                  src={currentImage}
                  alt="Property Cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 animate-pulse rounded-sm" />
              )}
            </div>

            <div className="w-full md:h-[88vh] md:w-[18%] lg:w-[25%] p-3 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1 gap-4 border rounded-sm">
              {property.images.map((img) => (
                <div key={img} className="h-[17vh] lg:h-[19vh]">
                  <img
                    className="h-full rounded-sm border-brand-primary/40 p-[2px] active:scale-95 transition-all duration-300 w-full cursor-pointer hover:brightness-50"
                    onClick={() => setCurrentImage(img)}
                    src={img}
                    alt="Thumbnail"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property information and agent contact */}
          <div className="md:w-[30%] lg:w-[35%]">
            <div className="flex justify-between">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                  {property.title}
                </h2>
                <p className="font-medium text-custom_black/60 mt-2 lg:mt-4  flex items-center gap-1 text-sm">
                  <IoLocation className="text-blue-400" />
                  <span>{property.location}</span>
                  <MdOutlineArrowRightAlt className="text-lg" />
                  <span className="uppercase text-xs bg-red-500 px-2 text-white">
                    {property.listingType === "sale" ? "for sale" : "for rent"}
                  </span>
                </p>
              </div>
              <div>
                {property.discount.isDiscounted && (
                  <span className="rounded-full bg-red-500 text-white text-lg font-bold flex justify-center items-center w-11 h-11 text-center border-2 border-brand-secandary">
                    %{property.discount.discountPercentage}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-4 text-lg font-semibold flex items-center gap-4">
              <p
                className={`${
                  property.discount.isDiscounted
                    ? "line-through text-custom_black/50"
                    : ""
                }`}
              >
                ${property.price}
              </p>
              {property.discount.isDiscounted && (
                <p className="text-red-500">
                  ${property.discount.discountedPrice}
                </p>
              )}
            </div>

            <p className="mt-8 text-sm leading-6 text-custom_black/60 font-medium">
              {property.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-white">
              <div className="flex items-center gap-0.5 bg-brand-secandary px-2 py-0.5 rounded-sm">
                <span>{property.features.bedrooms}</span> <BiBed size={18} />
              </div>
              <div className="flex items-center gap-0.5 bg-red-500 px-2 py-0.5 rounded-sm">
                <span>{property.features.bathrooms}</span> <BiBath size={18} />
              </div>
              <div className="flex items-center gap-1 bg-blue-500 px-2 py-0.5 rounded-sm">
                <span>{property.features.furnishing}</span>{" "}
                <MdOutlineChair size={18} />
              </div>
              <div className="flex items-center gap-0.5 bg-green-500 px-2 py-0.5 rounded-sm">
                <span>{property.features.areaSqFt}</span>
                <span className="text-xs font-medium">
                  m<sup>2</sup>
                </span>
              </div>
            </div>

            {/* Agent contact section */}
            <div className="mt-16">
              <p className="text-sm mb-2 font-semibold text-custom_black/80">
                Contact With Our Agent
              </p>
              <Agent agent={agent} />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PropertyDisplay;
