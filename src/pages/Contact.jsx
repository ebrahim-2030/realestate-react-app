import React, { useRef } from "react";
import ContactForm from "../components/ContactForm";
import contactImage from "../assets/images/contact.jpg";
import ContactInformation from "../components/ContactInformation";
import OurAgents from "../components/OurAgents";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";
import { motion, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div>
      {/* hero section with background image */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,37,42, 0.8), rgba(15,37,42, 1)) , url(${contactImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 h-[80vh] pt-[12vh]  lg:pt-[20vh] text-white flex"
      >
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="max-w-screen-xl mx-auto w-full mt-24"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium">
            <span className="text-brand-secandary">#Contact</span> Us
          </h2>
        </motion.div>{" "}
      </section>

      {/* contact form */}
      <motion className="px-4 xl:px-0">
        <ContactForm />
      </motion>

      {/* contact information */}
      <section className="px-4 xl:px-0 mt-12 ">
        <ContactInformation />
      </section>

      {/* our agents */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-28">
        <OurAgents />
      </section>

      {/* faq section */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 ">
        <FAQ />
      </section>

      {/* getstarted section */}
      <section className="px-4 xl:px-0 mt-20 md:mt-40 lg:mt-24">
        <GetStarted />
      </section>
    </div>
  );
};

export default Contact;
