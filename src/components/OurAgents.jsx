import React from "react";
import agents from "../data/agents";
import Agent from "./Agent";
const OurAgents = () => {
  const order = [0, 4, 2, 3, 7, 1, 5, 6];
  const reorderedAgent = order.map((index) => agents[index]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        {/* title and description */}
        <div className=" flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
            Meet Our Agents
          </h2>
          <p className=" text-sm md:text-base mt-2 lg:mt-2  pb-3 text-custom_black/70 font-medium">
            Connect with experienced professionals ready to guide you through
            every step of your real estate
          </p>
        </div>

        {/* grid of agents  */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2  lg:gap-4 lg:grid-cols-3 xl:grid-cols-4 ">
          {reorderedAgent.map((agent) => (
            <Agent key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAgents;
