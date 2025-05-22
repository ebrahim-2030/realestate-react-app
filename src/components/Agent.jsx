import React from "react";

const Agent = ({ agent }) => {
  return (
    <div className="group  flex items-center justify-between border border-custom_black/10 shadow-sm p-3">
      <div className="flex items-center gap-3">
        {/* agent picture */}
        <img
          src={agent.profileImage}
          className="h-16 w-16 rounded-sm object-cover shadow"
          alt={agent.name}
        />
        <div>
          {/* agent name */}
          <h2 className="text-base font-semibold text-custom_black">
            {agent.name}
          </h2>
          {/* agent agency */}
          <p className="text-xs font-medium mt-1 text-custom_black/60">
            {agent.agency}
          </p>
        </div>
      </div>

      {/* contact button */}
      <button
        onClick={() => navigate(`/agent-details/${agent.id}`)}
        className="border border-custom_black/20 px-3 py-1.5 text-sm font-medium text-custom_black transition hover:bg-custom_black hover:text-white hover:border-custom_black"
      >
        Contact
      </button>
    </div>
  );
};

export default Agent;
