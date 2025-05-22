import React, { useState } from "react";
import Property from "../../components/Property";
import { Element, Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

// Component to display a list of properties with pagination
const PropertiesList = ({ properties }) => {
  // State to track current page
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6; // Number of properties per page

  // Calculate slice indexes for current page
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;

  // Slice properties array to get current page items
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  // Calculate total pages
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Navigate to a specific page, with boundary check
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  // navigate to agents page
  const handleNavigate = () => {
    navigate("/agents");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex-1 ">
      <Element name="property-list" className="text-2xl font-bold mb-4">
        Search Results
      </Element>
      {properties.length === 0 && (
        <p>
          {" "}
          No properties found. Talk to one of our {" "}
          <p onClick={handleNavigate} className="underline cursor-pointer">
            agents
          </p>{" "}
          .
        </p>
      )}

      {/* Properties grid */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-10 lg:gap-4 xl:grid-cols-3">
        {currentProperties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          {/* Prev Button */}
          <Link
            to="property-list"
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
              to="property-list"
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
            to="property-list"
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

export default PropertiesList;
