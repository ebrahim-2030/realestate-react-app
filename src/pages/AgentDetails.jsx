import bg from "../assets/images/bg.avif";
import { useParams } from "react-router-dom";
import agents from "../data/agents";
import AgentDetailsHeader from "./agent-details-components/AgentDetailsHeader";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import MoreAgents from "./agent-details-components/MoreAgents";

const AgentDetails = () => {
  const { agentId } = useParams();

  const foundAgent = agents.find((agent) => agent.id === agentId);

  console.log(foundAgent);

  return (
    <div>
      {/* hero section with background image */}
      <section
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 pt-[12vh] sm:pt-[16vh] lg:pt-[20vh] xl:pt-[20vh]  bg-brand-primary text-white  py-12  pb-72 lg:pb-32 xl:pb-32  "
      >
        <AgentDetailsHeader agent={foundAgent} />
      </section>

      {/* section */}

      {/* our agents */}
      <section className="relative  max-w-screen-xl mx-4 xl:mx-auto    ">
        <div className="w-full absolute left-1/2 -translate-x-1/2 top-1/4 -translate-y-1/4  ">
          <div className="bg-white border shadow-2xl shadow-custom_black/20  pt-8 px-4 sm:px-10 lg:px-12 xl:px-16 pb-4 md:py-16 ">
            <MoreAgents agent={foundAgent} />
          </div>
        </div>
      </section>

      {/* testimonials section */}
      <section
        className=" px-4 xl:px-0 mt-[720px] pb-24 md:pb-16 
      sm:mt-[450px] md:mt-[530px] lg:mt-[450px] xl:mt-[480px] "
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

export default AgentDetails;
