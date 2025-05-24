import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutHeader = () => {
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
      className="max-w-screen-xl mx-auto text-white pt-24 "
    >
      <div className="flex flex-col items-center text-center gap-6">
        {/* title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-10">
          Experience You Can Count On
          <span className="text-brand-secandary  mt-2 sm:mt-3 lg:block ">
            Learn About Us
          </span>
        </h2>
        {/* description */}
        <p className=" text-white/75  text-sm leading-6">
          Years of Real Estate Expertise, Delivered with Care
        </p>
      </div>
    </motion.div>
  );
};

export default AboutHeader;
