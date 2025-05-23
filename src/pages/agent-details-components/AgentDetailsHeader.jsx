import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const AgentDetailsHeader = ({ agent }) => {
  const navigate = useNavigate();
  // navigate to search page
  const handleNavigate = () => {
    navigate("/auth");
    scrollTo(0, 0);
  };
  return (
    <div className="max-w-screen-xl mx-auto h-full  text-brand-secandary flex flex-col items-center ">
      <div className="flex flex-col lg:flex-row gap-8 items-start sm:items-start justify-start sm:justify-start h-full ">
        {/* agent picture */}
        <div className=" flex items-end justify-center sm:justify-start lg:justify-center sm:items-end  gap-6 bg-brand-secandary pt-2  h-[380px] w-full lg:w-[400px]    rounded rounded-b-none ">
          <img
            src={agent.agentImage}
            className="h-80 w-80 lg:h-[360px] lg:w-[350px]"
            alt=""
          />
        </div>
        <div className="flex-1 sm:pt-4">
          {/* agent name */}
          <h2 className="text-2xl sm:text-3xl text-white ">
            {" "}
            Expert Real Estate Guidance <br /> with{" "}
            <span className="text-brand-secandary font-bold">
              {agent.name}
            </span>{" "}
          </h2>

          {/* agent info */}
          <div>
            <div className="mt-4  flex flex-col gap-2 text-brand-secandary/70 text-sm font-medium">
              <p className="flex items-center gap-2">
                <HiMiniBuildingOffice /> {agent.agency}
              </p>
              <p className="flex items-center gap-2">
                <MdEmail />
                {agent.email}
              </p>
              <p className="flex items-center gap-2">
                <FaPhoneAlt />
                {agent.phone}
              </p>
            </div>
            <p className="mt-8 max-w-[650px] text-white/60 text-sm font-medium ">
              {agent.bio}
            </p>
            <button
              onClick={handleNavigate}
              className="px-6 py-2 border text-sm font-medium bg-white text-custom_black rounded-sm hover:bg-transparent transition-all duration-200 mt-4"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDetailsHeader;
