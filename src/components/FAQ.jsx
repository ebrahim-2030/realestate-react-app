import { FAQs } from "../data/general";
import faq from "../assets/icons/faq.svg";
import { useRef, useState } from "react";
import { FaRegWindowMinimize, FaWindowMinimize } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { motion, useInView } from "framer-motion";

const FAQ = () => {
  // faq categories
  const categories = ["General", "Buying", "Selling", "Renting"];

  //   state for selected category and opened question
  const [selectedCategory, setSelectedCategory] = useState("General");
  const [openedId, setOpenedId] = useState(null);

  //   ref for access dynamic height for animation
  const contentRef = useRef(null);

  //   filter faqs based on selected category
  const filteredItems = FAQs.filter(
    (item) => item.category === selectedCategory
  );

  //   toggle fas answer visibility
  const handleToggle = (id) => {
    setOpenedId(openedId === id ? null : id);
  };

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
      className="max-w-screen-xl mx-auto py-20  bg-gradient-to-b from-emerald-50/50 to-transparent "
    >
      <div className="max-w-screen-md mx-auto flex flex-col items-center px-4 sm:px-8">
        {/* image and heading */}
        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between gap-8">
          <div className="sm:w-1/2">
            <img src={faq} alt="" />
          </div>
          <div className=" sm:text-start  flex flex-col sm:items-end ">
            <h3 className="text-3xl lg:text-4xl  font-medium sm:font-semibold lg:font-bold leading-10 lg:leading-[50px] text-brand-primary ">
              Frequently asked questions
            </h3>
            <p className="mt-2 text-xs lg:text-sm font-semibold text-brand-primary/80 ">
              Your real estate questions—answered.
            </p>

            {/* category buttons */}
            <div className="flex items-center sm:justify-start  gap-2 my-6 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border-2 border-brand-primary py-1 px-3 rounded text-xs lg:text-sm transition-colors duration-200 font-medium
              ${
                category === selectedCategory
                  ? "bg-brand-primary text-white"
                  : "hover:bg-brand-primary hover:text-white"
              }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* faq items list */}
        <ul className="mt-4 sm:mt-8 w-full ">
          {filteredItems.map((item, index) => (
            <li
              key={item.id}
              className={`${
                index < filteredItems.length - 1
                  ? "border-b border-custom_black/15"
                  : ""
              } px-4`}
            >
              <button
                onClick={() => handleToggle(item.id)}
                className="outline-none w-full cursor-pointer flex items-end  justify-between py-4  text-left "
              >
                <h3 className="text-sm font-semibold md:text-[17px]">
                  {item.title}
                </h3>
                <MdOutlineKeyboardArrowDown
                  className={` ${
                    openedId === item.id ? "rotate-180" : ""
                  } transition-all duration-500 text-2xl `}
                />
              </button>
              <div
                ref={contentRef}
                style={{
                  height:
                    openedId === item.id
                      ? `${contentRef.current?.scrollHeight}px`
                      : "0px",
                }}
                className="overflow-hidden transition-all duration-500"
              >
                <p className="pb-4 text-xs md:text-sm font-medium leading-5 text-custom_black/70">
                  {item.content}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FAQ;
