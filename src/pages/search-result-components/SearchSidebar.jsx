import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";

// sidebar for search filters
const SearchSidebar = ({ filters, onFilter }) => {
  // default filter values
  const initialFilters = {
    location: "all",
    bedrooms: "all",
    bathrooms: "all",
    priceMin: "",
    priceMax: "",
    propertyType: "all",
    listingType: "all",
    discountedOnly: false,
  };

  // local filter state
  const [localFilters, setLocalFilters] = useState(initialFilters);

  // update local filters when props change
  useEffect(() => {
    if (filters) setLocalFilters(filters);
  }, [filters]);

  // handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFilters((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(localFilters);

    // then scroll to the section programmatically
    scroller.scrollTo("property-list", {
      offset: -80,
    });
  };

  // reset filters to default
  const handleReset = () => {
    setLocalFilters(initialFilters);
    onFilter(initialFilters);
  };

  // dropdown options
  const bedroomOptions = ["all", 1, 2, 3, 4, 5];
  const bathroomOptions = ["all", 1, 2, 3, 4];

  return (
    <aside className="w-80 pr-8 rounded">
      <h2 className="text-2xl font-bold mb-4">Search Filters</h2>
      <form
        onSubmit={handleSubmit}
        className="opacity-90 flex flex-col gap-4 text-brand-primary accent-brand-primary"
      >
        {/* property and listing type */}
        <div className="flex flex-col gap-4">
          {/* property type */}
          <div className="border-b pb-1 border-brand-primary/20">
            <label className="block mb-1 font-medium text-brand-primary">
              Property Type
            </label>
            <div className="flex gap-1">
              {["all", "house", "apartment"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={localFilters.propertyType.toLowerCase() === type}
                    onChange={handleChange}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>

          {/* listing type */}
          <div className="border-b pb-1 border-brand-primary/20">
            <label className="block mb-1 font-medium text-brand-primary">
              Listing Type
            </label>
            <div className="flex gap-1">
              {["all", "sale", "rent"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="listingType"
                    value={type}
                    checked={localFilters.listingType.toLowerCase() === type}
                    onChange={handleChange}
                  />
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* bedrooms */}
        <div className="border-b pb-1 border-brand-primary/20">
          <label className="block mb-1 font-medium text-brand-primary">
            Bedrooms
          </label>
          <div className="flex flex-wrap gap-2">
            {bedroomOptions.map((option) => (
              <label key={option} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="bedrooms"
                  value={String(option)}
                  checked={localFilters.bedrooms === String(option)}
                  onChange={handleChange}
                />
                {option === "all" ? "All" : `${option}+`}
              </label>
            ))}
          </div>
        </div>

        {/* bathrooms */}
        <div className="border-b pb-1 border-brand-primary/20">
          <label className="block mb-1 font-medium text-brand-primary">
            Bathrooms
          </label>
          <div className="flex flex-wrap gap-2">
            {bathroomOptions.map((option) => (
              <label key={option} className="flex items-center gap-1">
                <input
                  type="radio"
                  name="bathrooms"
                  value={String(option)}
                  checked={localFilters.bathrooms === String(option)}
                  onChange={handleChange}
                />
                {option === "all" ? "All" : `${option}+`}
              </label>
            ))}
          </div>
        </div>

        {/* price range */}
        <div className="flex gap-4">
          <div>
            <label className="text-brand-primary font-medium">Price Min</label>
            <input
              type="number"
              name="priceMin"
              value={localFilters.priceMin}
              onChange={handleChange}
              className="bg-transparent w-full px-2 border-b border-brand-primary/20 outline-none"
              min={0}
            />
          </div>

          <div>
            <label className="text-brand-primary font-medium">Price Max</label>
            <input
              type="number"
              name="priceMax"
              value={localFilters.priceMax}
              onChange={handleChange}
              className="bg-transparent w-full px-2 border-b border-brand-primary/20 outline-none"
              min={0}
            />
          </div>
        </div>

        {/* location */}
        <div>
          <label className="text-brand-primary font-medium">City</label>
          <input
            type="text"
            name="location"
            value={localFilters.location === "all" ? "" : localFilters.location}
            onChange={handleChange}
            placeholder="e.g. Kunduz"
            className="w-full px-2 border-b outline-none border-brand-primary/20 bg-transparent"
          />
        </div>

        {/* discounted only */}
        <div className="flex items-center gap-2">
          <input
            className="accent-red-600"
            type="checkbox"
            name="discountedOnly"
            checked={localFilters.discountedOnly}
            onChange={handleChange}
            id="discountedOnly"
          />
          <label htmlFor="discountedOnly">Discounted Only</label>
        </div>

        {/* action buttons */}
        <div className="flex gap-3 mt-2">
          <button
            type="submit"
            className="bg-brand-secandary/90 text-white w-1/2 border-2 borderpri py-2 rounded hover:scale-95 transition-all duration-200"
          >
            Search
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="bg-brand-primary text-white w-1/2 border-2 py-2 rounded hover:scale-95 transition-all duration-200"
          >
            Reset
          </button>
        </div>
      </form>
    </aside>
  );
};

export default SearchSidebar;
