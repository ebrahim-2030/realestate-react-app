import React, { useState } from "react";
import Property from "../../components/Property";

const PropertiesList = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;

  // Calculate indexes
  const indexOfLast = currentPage * propertiesPerPage;
  const indexOfFirst = indexOfLast - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div id="sec" className="flex-1">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {properties.length === 0 && <p>No properties found.</p>}

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:gap-10 lg:gap-4 xl:grid-cols-3">
        {currentProperties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <a
              href="#sec"
              key={num}
              onClick={() => goToPage(num)}
              className={`cursor-pointer px-3 py-1 rounded ${
                currentPage === num
                  ? "bg-brand-secandary  text-white"
                  : "bg-gray-100"
              }`}
            >
              {num}
            </a>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PropertiesList;
