import agents from "../assets/images/agents.jpg";
import GetStarted from "../components/GetStarted";
import OurAgents from "../components/OurAgents";
import Testimonials from "../components/Testimonials";

const Agents = () => {
  return (
    <div className="">
      
      {/* hearo section with bg image */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,37,42, 0.7), rgba(15,37,42, 1)) , url(${agents})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 h-[80vh] pt-[8vh] lg:pt-[9.5vh]  "
      >
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 text-white pt-6 lg:pt-32 ">
          <div className="flex flex-col items-start text-start gap-6">
            {/* title */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold lg:leading-[70px]">
              Find The Right Agent
              <span className="text-brand-secandary  mt-2 sm:mt-3 block ">
                For You.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* our agents */}
      <section className="relative  max-w-screen-2xl mx-auto    ">
        <div className="w-full px-4  md:px-8 lg:px-12 xl:px-16 absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4  ">
          <div className="bg-white border shadow-2xl shadow-custom_black/20  pt-8 px-4 sm:px-10 lg:px-12 xl:px-16 pb-4 md:py-16 ">
            <OurAgents />
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section
        className=" px-4 xl:px-0 mt-[780px] pb-24 md:pb-16 
      sm:mt-[450px] md:mt-[530px] lg:mt-[450px] xl:mt-[400px] "
      >
        <Testimonials />
      </section>

      {/* getstarted section */}
      <section className="px-4 xl:px-0 mt-20 lg:mt-24 ">
        <GetStarted />
      </section>
    </div>
  );
};

export default Agents;
