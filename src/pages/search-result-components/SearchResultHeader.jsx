const SearchResultHeader = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-white pt-24 ">
      <div className="flex flex-col items-center text-center gap-6">
        {/* title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
          Browse Properties Near You
          <span className="text-brand-secandary  mt-2 sm:mt-3 block ">
            Find Your Home
          </span>
        </h2>
        {/* description
        <p className=" text-white/75  text-sm leading-6">
          From cozy apartments to spacious family homes, we help <br /> you
          settle into the perfect neighborhood.
        </p> */}
      </div>
    </div>
  );
};

export default SearchResultHeader;
