import house from "../assets/icons/smart search.png";
import user from "../assets/icons/user.png";
import deal from "../assets/icons/deal.png";
import experience from "../assets/icons/expert-assistant.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Achivements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="max-w-screen-xl mx-auto py-10 md:py-16 text-4xl font-bold grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0 "
    >
      <div className=" flex gap-2 justify-center border-r ">
        <img src={house} className="h-10 w-10" alt="" />
        <div className="flex flex-col gap-1">
          <span>10K+</span>
          <span className="text-sm font-normal opacity-70">Properties</span>
        </div>
      </div>
      <div className="flex gap-2 justify-center lg:border-r ">
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
    </motion.div>
  );
};

export default Achivements;
