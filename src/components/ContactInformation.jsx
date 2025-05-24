import { RiContactsBookLine, RiHomeOfficeLine } from "react-icons/ri";
import { TfiAlarmClock } from "react-icons/tfi";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactInformation = () => {
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
      className="max-w-screen-lg mx-auto "
    >
      <div className="flex flex-col items-center w-full">
        {/* title and description */}
        <div className="text-center">
          <span className="font-medium ">Contact Details</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-medium">
            Find Our Location{" "}
          </h2>
        </div>

        {/* contact options */}
        <div className="mt-10 grid md:grid-cols-3  w-full gap-4">
          <div className="flex flex-col items-center gap-2 ">
            <RiHomeOfficeLine className="text-5xl text-custom_black/80" />
            <div>
              <h2 className="font-medium text-center text-custom_black/80   ">
                Area location
              </h2>
              <span className="mt-2 block text-center text-sm  font-medium text-custom_black/60">
                123 Main Street Kunduz, <br /> AFG
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <RiContactsBookLine className="text-5xl text-custom_black/80" />
            <div className="text-center flex flex-col items-center">
              <h2 className="font-medium text-custom_black/80   ">
                Contact details
              </h2>
              <span className="block mt-2 text-sm text-custom_black/60 font-medium">
                0-987-654-321
              </span>
              <span className=" text-sm text-custom_black/60 font-medium">
                info@gmail.com
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 ">
            <TfiAlarmClock className="text-5xl text-custom_black/80" />
            <div className="text-center">
              <h2 className="font-medium text-custom_black/80   ">
                Opening hours{" "}
              </h2>
              <span className="text-sm block mt-2 text-custom_black/60 font-medium">
                Saturday - Tursday
              </span>
              <span className=" text-sm text-custom_black/60 font-medium">
                08:30a.m - 04:00p.m
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInformation;
