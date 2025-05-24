import user1 from "../assets/images/user1.jpg";
import user2 from "../assets/images/user2.jpg";
import user3 from "../assets/images/user3.jpg";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useRef } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import { RiStarSFill } from "react-icons/ri";
import { TiStarFullOutline } from "react-icons/ti";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    id: 1,
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: "Michael Brown",
    image: user2,
    rating: 5,
  },
  {
    id: 2,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    author: "Emily White",
    image: user1,
    rating: 4,
  },
  {
    id: 3,
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Emily White",
    image: user3,
    rating: 4,
  },
  {
    id: 4,
    text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.",
    author: "Emily White",
    image: user2,
    rating: 4,
  },
  {
    id: 5,
    text: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: "Michael Brown",
    image: user1,
    rating: 5,
  },
];

const stars = [1, 2, 3, 4, 5];

const Testimonials = () => {
  // refs for buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
      className=" relative max-w-screen-lg  mx-auto"
    >
      <div className="w-full flex flex-col sm:flex-row sm:justify-between gap-6 ">
        {/* title and description */}
        <div className="flex-1">
          <h3 className="text-3xl lg:text-4xl">
            Here From Our{" "}
            <span className="block font-bold text-teal-700 mt-1 sm:mt-2">
              Happy Homeowners.
            </span>
          </h3>
          <p className="mt-2 sm:mt-6 text-custom_black/80 text-sm font-medium max-w-96">
            Real people, real experiences. Discover how our platform has helped
            buyers and sellers achieve their property goals
          </p>
        </div>
        {/* testimonials slider */}
        <div className="max-w-[350px]">
          {/* navigation buttons */}
          <div className="text-xl  absolute -bottom-2 sm:-bottom-12 md:-bottom-2   right-0 sm:left-0 z-10 flex items-center gap-4">
            {/* custom Prev Button */}
            <button
              className="p-2 bg-teal-700 text-white rounded-full hover:scale-105 transition-all duration-100"
              ref={prevRef}
              aria-label="Previous Slide"
            >
              <MdKeyboardArrowLeft />
            </button>

            {/* custom Next Button */}
            <button
              className="p-2 bg-teal-700 text-white rounded-full hover:scale-105 transition-all duration-100"
              ref={nextRef}
              aria-label="Next Slide"
            >
              <MdKeyboardArrowRight />
            </button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // Connect refs to swiper navigation
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            loop={true}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <ImQuotesLeft className="text-4xl text-teal-700 " />
                <blockquote className="">
                  <p className="mb-4 sm:mb-6 sm:text-lg italic mt-4 font-semibold text-custom_black/80">
                    "{item.text}"
                  </p>
                  <footer className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className=" w-12
                   rounded-full"
                      alt=""
                    />
                    <div>
                      <span className="text-base font-bold text-teal-700">
                        {item.author}
                      </span>
                      <div className="flex">
                        {stars.map((star) => {
                          return (
                            <TiStarFullOutline
                              key={star}
                              className={`text-base  ${
                                star <= item.rating
                                  ? "text-teal-700"
                                  : "text-gray-300"
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
