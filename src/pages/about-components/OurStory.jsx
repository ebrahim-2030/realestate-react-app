import story1 from "../../assets/images/story1.jpg";
import story2 from "../../assets/images/story2.jpg";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const OurStory = () => {
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
      className="max-w-screen-xl mx-auto "
    >
      <div className="flex flex-col md:flex-row md:gap-8 md:items-center md:justify-between">
        {/* title and description */}
        <div className="md:flex-1">
          <p className="uppercase text-sm font-medium">our story</p>
          <h2 className="mt-4 text-2xl md:text-3xl lg:text-[42px] font-medium lg:leading-[55px]">
            The Journey That Turns <br className="hidden lg:block" /> Dreams
            Into a Home
          </h2>
          <div className=" mt-3 text-sm md:text-base leading-6 md:text-justify flex flex-col gap-4 text-custom_black/70 font-medium">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
              nulla cum tempore adipisci aliquid magni quibusdam fugit quisquam
              explicabo, veritatis eligendi amet officia pariatur consequatur ad
              veniam? Asperiores, saepe a? Suscipit sint pariatur vero quisquam
              rerum, animi ullam at. Assumenda nam laborum soluta suscipit
              debitis laudantium iste ad aperiam autem accusantium cumque
              eveniet, magni quam ut quibusdam sequi ratione odio!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              delectus nihil labore eum optio, totam, praesentium ducimus
              consectetur accusantium vitae itaque ipsam nulla nisi maxime
              tempora in alias est unde.
            </p>
          </div>
        </div>

        {/* images */}
        <div className="h-96 md:h-[430px] lg:h-[470px] md:w-96 lg:w-1/2  p-1 relative ">
          <div className="bg-brand-primary absolute top-8 right-8 lg:top-12 lg:right-0 shadow-2xl border  max-w-96   ">
            <img
              src={story1}
              className="w-full
            "
              alt=""
            />
          </div>
          <div className="absolute bottom-8 left-8 shadow-2xl border max-w-96">
            <img
              src={story2}
              className="w-full
            "
              alt=""
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurStory;
