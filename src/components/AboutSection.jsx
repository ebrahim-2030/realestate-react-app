import about_sec from "../assets/images/about-sec.png";

const AboutSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto  font-medium flex flex-col md:flex-row-reverse     gap-6 sm:gap-12">
      <div className="flex flex-col md:w-1/2">
        {/* title and description */}
        <div className=" flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
            How it Works?
          </h2>
          <p className="text-sm md:text-base mt-2 lg:mt-4  pb-3 text-custom_black/70 ">
            {" "}
            A simple process to finde your perfect home
          </p>
          <hr className="h-[3px] w-full lg:w-[370px] border  bg-gradient-to-r from-brand-primary via-brand-primary/60 to-brand-primary/30" />
        </div>

        {/* steps grid */}
        <div className="grid sm:grid-cols-2 gap-6  font-medium mt-8 lg:mt-12 text-custom_black/80 text-xs lg:text-sm">
          <div className="flex flex-col items-start gap-4 ">
            <h3
              className="text-center w-40 py-2 bg-gradient-to-t from-brand-primary via-brand-primary/90 to-brand-primary/80
 text-white "
            >
              Search & Filter
            </h3>
            <p className="  w-full  lg:w-64 leading-5">
              Find your dream home by filtering properties based on location,
              price, and type.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <h3
              className="text-center w-40 py-2 bg-gradient-to-t from-brand-primary via-brand-primary/90 to-brand-primary/80
 text-white  "
            >
              View & Explore
            </h3>
            <p className="w-full  lg:w-64 leading-5">
              Check out high-quality images, virtual tours, and property
              details.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <h3
              className=" text-center w-40 py-2 bg-gradient-to-t from-brand-primary via-brand-primary/90 to-brand-primary/80
 text-white "
            >
              Connect with Agents
            </h3>
            <p className="w-full  lg:w-64 leading-5">
              Get in touch with property owners or real estate agents
              effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 ">
            <h3 className="text-center w-40 py-2 bg-gradient-to-t from-brand-primary via-brand-primary/90 to-brand-primary/80 text-white ">
              Seal the Deal
            </h3>
            <p className="w-full  lg:w-64 leading-5">
              Complete the paperwork, make payments, and move into your new
              home!
            </p>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="md:w-1/2 flex items-end justify-center bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent pt-4">
        <img src={about_sec} className="w-96 md:w-[500px]" />
      </div>
    </div>
  );
};

export default AboutSection;
