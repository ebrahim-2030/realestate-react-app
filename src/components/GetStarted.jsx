import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const GetStarted = () => {
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
      className="max-w-screen-xl mx-auto  relative "
    >
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 px-4 w-full bg-brand-secandary rounded flex flex-col items-center py-10 md:flex-row md:justify-center md:gap-10 lg:gap-64 ">
        {/* title */}
        <div>
          <h2 className="text-2xl  font-medium text-center md:text-start text-brand-primary leading-10 lg:leading-[50px]  md:text-3xl lg:text-4xl ">
            Browse Properties or <br className="sm:hidden md:block" /> Join Our
            Team
          </h2>
        </div>
        {/* buttons */}
        <div className="flex items-center gap-4 mt-8 text-sm lg:text-base ">
          <button className=" px-8 md:px-16 border py-2 md:py-3 border-brand-primary bg-brand-primary text-white  rounded">
            Browse
          </button>
          <button className=" px-8 md:px-16 border py-2 md:py-3 border-brand-primary text-brand-primary font-medium rounded">
            Join
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GetStarted;
