import house from "../assets/icons/smart search.png";
import user from "../assets/icons/user.png";
import deal from "../assets/icons/deal.png";
import experience from "../assets/icons/expert-assistant.png";

const Achivements = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-10 md:py-16 text-4xl font-bold grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-0 ">
      <div className="flex gap-2 justify-center border-r">
        <img src={house} className="h-10 w-10" alt="" />
        <div className="flex flex-col gap-1">
          <span>10K+</span>
          <span className="text-sm font-normal opacity-70">Properties</span>
        </div>
      </div>
      <div className="flex gap-2 justify-center border-r ">
        <img src={user} className="h-10 w-10" alt="" />
        <div className="flex flex-col gap-1">
          <span>300+</span>
          <span className="text-sm font-normal opacity-70">Happy Clients</span>
        </div>
      </div>
      <div className="flex gap-2 justify-center border-r ">
        <img src={deal} className="h-10 w-10" alt="" />
        <div className="flex flex-col gap-1">
          <span>80%</span>
          <span className="text-sm font-normal opacity-70">Faster Deals</span>
        </div>
      </div>
      <div className="flex gap-2 justify-center ">
        <img src={experience} className="h-10 w-10" alt="" />
        <div className="flex flex-col gap-1">
          <span>12+</span>
          <span className="text-sm font-normal opacity-70">Experience</span>
        </div>
      </div>
      {/* <div className="flex flex-col gap-1">
        <span>300+</span>
        <span className="text-sm font-normal">Happy Clients</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>80%</span>
        <span className="text-sm font-normal">Faster Deals</span>
      </div>
      <div className="flex flex-col gap-1">
        <span>12K+</span>
        <span className="text-sm font-normal">Experience</span>
      </div> */}
    </div>
  );
};

export default Achivements;
