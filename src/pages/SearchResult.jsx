// import required assets and components
import bgImage from "../assets/images/properties-hero.jpg";
import Achivements from "../components/Achivements";
import SearchResultHeader from "./search-result-components/SearchResultHeader";
import PropertiesList from "./search-result-components/PropertiesList";

import { useEffect, useMemo, useState } from "react";
import { useProperties } from "../contexts/PropertiesContext";
import SearchSidebar from "./search-result-components/SearchSidebar";
import { useLocation, useNavigate } from "react-router-dom";
import GetStarted from "../components/GetStarted";

import { Link, Element } from "react-scroll";

const SearchResult = () => {
  // get all properties from context
  const { allProperties } = useProperties();

  // get current url location and navigation function
  const location = useLocation();
  const navigate = useNavigate();

  // extract initial filters from url query string
  const initialFilters = useMemo(() => {
    const query = new URLSearchParams(location.search);

    return {
      title: query.get("title") || "",
      location: query.get("location") || "all",
      bedrooms: query.get("bedrooms") || "all",
      bathrooms: query.get("bathrooms") || "all",
      priceMin: query.get("priceMin") || "",
      priceMax: query.get("priceMax") || "",
      propertyType: query.get("propertyType") || "all",
      listingType: query.get("listingType") || "all",
      discountedOnly: query.get("discountedOnly") === "true",
    };
  }, [location.search]);

  // set filters in component state
  const [filters, setFilters] = useState(initialFilters);

  // update filters when url changes
  useEffect(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  // update url when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    // add only active filters to the url
    Object.entries(filters).forEach(([key, value]) => {
      if (
        (value !== "" && value !== "all" && value !== false) ||
        (key === "discountedOnly" && value === true)
      ) {
        params.set(key, value);
      }
    });

    // replace url without pushing to browser history
    navigate({ search: params.toString() }, { replace: true });
  }, [filters, navigate]);

  // filter properties based on current filters
  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      // title match (case-insensitive)
      if (
        filters.title &&
        !property.title.toLowerCase().includes(filters.title.toLowerCase())
      ) {
        return false;
      }

      // match property type
      if (
        filters.propertyType.toLowerCase() !== "all" &&
        property.propertyType.toLowerCase() !==
          filters.propertyType.toLowerCase()
      ) {
        return false;
      }

      // match listing type
      if (
        filters.listingType !== "all" &&
        property.listingType.toLowerCase() !== filters.listingType.toLowerCase()
      ) {
        return false;
      }

      // match location
      if (
        filters.location !== "all" &&
        !property.location.toLowerCase().includes(filters.location)
      ) {
        return false;
      }

      // match bedrooms
      if (
        filters.bedrooms !== "all" &&
        property.features.bedrooms !== Number(filters.bedrooms)
      ) {
        return false;
      }

      // match bathrooms
      if (
        filters.bathrooms !== "all" &&
        property.features.bathrooms !== Number(filters.bathrooms)
      ) {
        return false;
      }

      // match price min
      if (
        filters.priceMin !== "" &&
        property.price < Number(filters.priceMin)
      ) {
        return false;
      }

      // match price max
      if (
        filters.priceMax !== "" &&
        property.price > Number(filters.priceMax)
      ) {
        return false;
      }

      // filter discounted only
      if (filters.discountedOnly && !property.discount.isDiscounted) {
        return false;
      }

      // if all checks pass
      return true;
    });
  }, [allProperties, filters]);

  return (
    <div>
      {/* hero section with background image */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,37,42, 1), rgba(15,37,42, 0.8)) , url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 h-[60vh] pt-[8vh] lg:pt-[9.5vh]"
      >
        <SearchResultHeader />
      </section>

      {/* achievements section */}
      <section className="max-w-screen-xl mx-auto relative px-4 xl:px-0 text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-y border-white shadow-2xl shadow-brand-primary bg-brand-primary w-full">
          <Achivements />
        </div>
      </section>

      {/* main section with sidebar and property list */}
      <div className="px-4 xl:px-0 pt-40 md:pt-44 lg:pt-32">
        <div className="relative max-w-screen-xl mx-auto flex flex-col items-center sm:flex-row sm:items-start gap-8 pb-8 lg:pb-20">
          {/* sidebar for filters */}
          <div className="sm:sticky top-[11vh] left-0">
            <SearchSidebar filters={filters} onFilter={setFilters} />
          </div>

          {/* list of filtered properties */}
          <div>
            <PropertiesList properties={filteredProperties} />
          </div>
        </div>
      </div>

      {/* getstarted section */}
      <section className="px-4 xl:px-0 mt-32 lg:mt-24">
        <GetStarted />
      </section>
    </div>
  );
};

export default SearchResult;
