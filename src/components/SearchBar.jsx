import React, { useState } from "react";
import { IoSearchCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [form, setForm] = useState({
    propertyType: "",
    listingType: "",
    location: "",
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();

    Object.entries(form).forEach(([key, value]) => {
      if (value && value.trim().toLowerCase() !== "all") {
        queryParams.append(key, value.trim());
      }
    });

    navigator(`/search-result?${queryParams.toString()}`);
  };

  return (
    <div className="mt-16">
      <p className="text-center mb-4 text-white/80">
        What are you looking for?
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-screen-sm text-custom_black/70 text-sm bg-white p-4 pt-6 sm:pt-4 rounded flex flex-col sm:flex-row gap-3"
      >
        {/* property and Listing Type */}
        <div className="flex items-center gap-3">
          <div className="">
            <label className="font-medium">Property Type</label>
            <input
              type="text"
              name="propertyType"
              placeholder="House / Apartment"
              value={form.propertyType}
              onChange={handleChange}
              className="mt-2 border-2 w-full p-2 rounded outline-none focus:border-brand-primary/30 text-custom_black/60"
            />
          </div>
          <div className="">
            <label className="font-medium">Listing Type</label>
            <input
              type="text"
              name="listingType"
              placeholder="Rent / Sale"
              value={form.listingType}
              onChange={handleChange}
              className="mt-2 border-2 w-full p-2 rounded outline-none text-custom_black/60 focus:border-brand-primary/30"
            />
          </div>
        </div>

        {/* location and Search Button */}
        <div className="flex items-end gap-3 ">
          <div className="">
            <label className="font-medium">City</label>
            <input
              type="text"
              name="location"
              placeholder="e.g. Kabul"
              value={form.location}
              onChange={handleChange}
              className="mt-2 text-custom_black/60 w-full border-2 p-2 rounded outline-none focus:border-brand-primary/30"
            />
          </div>
          <button className="group mb-[0.5px] flex pl-3 pr-2 py-[6px] items-center text-white bg-custom_black rounded-sm border border-custom_black text-sm">
            Search
            <IoSearchCircleSharp className="text-2xl text-white ml-2 group-hover:rotate-90 transition-all duration-200" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
