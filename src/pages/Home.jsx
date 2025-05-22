import Header from "../components/Header";
import hero from "../assets/images/hero.jpg";
import achivements from "../assets/images/achivements.jpg";
import bgImage from "../assets/images/bg.avif";
import AboutSection from "../components/AboutSection";
import Discount from "../components/Discount";
import Achivements from "../components/Achivements";
import Apartments from "../components/Apartments";
import Houses from "../components/Houses";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import GetStarted from "../components/GetStarted";
import { Element } from "react-scroll";
import OurAgents from "../components/OurAgents";

const Home = () => {
  return (
    <div className="">
      {/* header section  */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,37,42, 1), rgba(15,37,42, 0.8)), url(${hero})`,
        }}
        className="px-4 xl:px-0 h-[100vh] pt-[8vh] lg:pt-[9.5vh] bg-cover bg-center  "
      >
        <Header />
      </section>

      {/* about section */}
      <section className=" px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 bg-white">
        <Element name="about">
          <AboutSection />
        </Element>
      </section>

      {/* discount section */}
      <section className=" px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 bg-white">
        <Discount />
      </section>

      {/* achivements section */}
      <section
        style={{
          backgroundImage: `url(${achivements})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 text-white bg-black/60 bg-blend-overlay"
      >
        <Achivements />
      </section>

      {/* houses section */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24">
        <Houses />
      </section>

      {/* apartments section */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24">
        <Apartments />
      </section>

      {/* our agents */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24">
        <OurAgents />
      </section>

      {/* WhyChooseUs section */}
      <section
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 bg-brand-primary"
      >
        <WhyChooseUs />
      </section>

      {/* testimonials section */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 ">
        <Testimonials />
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

export default Home;
