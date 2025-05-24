import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactForm = () => {
  // prevent submit default action
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Sent");
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const formRef = useRef(null);
  const formView = useInView(formRef, { once: true });
  return (
    <div className="max-w-screen-xl mx-auto bg-white ">
      <div className="flex flex-col-reverse lg:flex-row  lg:items-center gap-8 lg:gap-10">
        {/* text box */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex-1  flex flex-col gap-3   md:pt-6"
        >
          <span className="uppercase font-medium text-sm ">Contact Us</span>
          <h2 className=" text-3xl lg:text-4xl xl:text-5xl font-semibold xl:leading-[66px]">
            Let’s Connect and <br /> Begin Your Journey Today
          </h2>
          <p className="font-medium  text-custom_black/60 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            perspiciatis saepe nostrum nihil ipsum qui harum dicta enim placeat
            necessitatibus debitis, est quidem, eius vel velit officia ab quia
            doloremque!
          </p>
        </motion.div>

        {/* contact form */}
        <motion.div
          ref={formRef}
          initial={{ opacity: 0, y: 50 }}
          animate={formView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="w-full lg:w-1/2  bg-white lg:pb-20"
        >
          <div className="w-full sm:max-w-screen-sm sm:mx-auto py-12 px-6 md:py-14 md:px-10 shadow-2xl -mt-64 sm:-mt-44 lg:-mt-24  bg-white rounded-tl-3xl">
            <h2 className="text-3xl font-semibold mb-3">
              Fill out for contact
            </h2>
            <p className="font-medium text-sm text-custom_black/40">
              Lorem ipsum dolor sit amet consectetur libero donec.
            </p>
            <form
              onSubmit={handleSubmit}
              className="w-full mt-8 flex flex-col items-start   gap-4 text-custom_black/70"
              action="
            "
            >
              <input
                className="w-full border outline-none px-6 py-3 rounded-sm placeholder:text-custom_black/30"
                type="text"
                name="name"
                placeholder="Your name*"
              />
              <input
                className="w-full border outline-none px-6 py-3 rounded-sm placeholder:text-custom_black/30"
                type="emial"
                name="email"
                placeholder="Your email*"
              />
              <input
                className="w-full border outline-none px-6 py-3 rounded-sm placeholder:text-custom_black/30"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="w-full border outline-none px-6 pt-6 h-32 resize-y    rounded-sm placeholder:text-custom_black/30"
                name="message"
                placeholder="Your message*"
              ></textarea>
              <p className="flex items-center gap-2 font-medium text-custom_black/40">
                <input
                  type="checkbox"
                  name="save-info"
                  className="accent-brand-secandary"
                />
                Save information for the next time comment.
              </p>
              <button
                type="submit"
                className="bg-black/90 text-white font-medium px-8 py-3 rounded mt-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
