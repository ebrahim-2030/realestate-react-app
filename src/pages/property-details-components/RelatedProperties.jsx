import React, { useState, useMemo } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { useProperties } from "../../contexts/PropertiesContext";
import Property from "../../components/Property";

const RelatedProperties = ({ prop }) => {
  const navigate = useNavigate();
  const { allProperties } = useProperties();

  // Memoize filtered properties to optimize performance
  const filteredProperties = useMemo(() => {
    return allProperties.filter((p) => {
      return (
        p.id !== prop.id &&
        p.propertyType === prop.propertyType &&
        p.listingType === prop.listingType &&
        p.discount?.isDiscounted === prop.discount?.isDiscounted &&
        p.city === prop.city
      );
    });
  }, [allProperties, prop]);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 8;

  // Calculate indexes for slicing
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;

  // Get current page properties slice
  const currentProperties = filteredProperties.slice(indexOfFirst, indexOfLast);

  // Total pages count
  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  // Change page handler with boundary check
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Scroll target element for react-scroll */}
      <div id="top"></div>

      <div className="flex items-end justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
            Related Properties
          </h2>
          <p className="text-sm md:text-base mt-2 lg:mt-2 pb-3 text-custom_black/70 font-medium">
            Discover related stylish, well-located homes designed for city life
          </p>
        </div>
      </div>

      {/* Properties grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-10 lg:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {currentProperties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Prev Button */}
          <Link
            to="top"
            offset={-80}
            onClick={() => currentPage > 1 && goToPage(currentPage - 1)}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-gray-200 cursor-pointer"
            }`}
          >
            Prev
          </Link>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <Link
              key={num}
              to="top"
              offset={-80}
              onClick={() => goToPage(num)}
              className={`px-3 py-1 rounded cursor-pointer ${
                currentPage === num
                  ? "bg-brand-secandary text-white"
                  : "bg-gray-100"
              }`}
            >
              {num}
            </Link>
          ))}

          {/* Next Button */}
          <Link
            to="top"
            offset={-80}
            onClick={() =>
              currentPage < totalPages && goToPage(currentPage + 1)
            }
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-200 opacity-50 cursor-not-allowed"
                : "bg-gray-200 cursor-pointer"
            }`}
          >
            Next
          </Link>
        </div>
      )}
    </div>
  );
};

export default RelatedProperties;
