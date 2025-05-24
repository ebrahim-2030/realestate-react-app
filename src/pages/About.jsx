import bgImage from "../assets/images/bg.avif";
import aboutImage from "../assets/images/about.jpg";
import AboutSection from "../components/AboutSection";
import Achivements from "../components/Achivements";
import AboutHeader from "./about-components/AboutHeader";
import WhyChooseUs from "../components/WhyChooseUs";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import GetStarted from "../components/GetStarted";
import OurStory from "./about-components/OurStory";
import OurAgents from "../components/OurAgents";

const About = () => {

  return (
    <div>
      {/* hero section with background image */}
      <section
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15,37,42, 0.8), rgba(15,37,42, 1)) , url(${aboutImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="px-4 xl:px-0 h-[80vh] pt-[8vh] lg:pt-[9.5vh]"
      >
        <AboutHeader />
      </section>

      {/* achievements section */}
      <section className="max-w-screen-xl mx-auto relative px-4 xl:px-0 text-white">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-y border-white shadow-2xl shadow-brand-primary bg-brand-primary w-full">
          <Achivements />
        </div>
      </section>

      {/* our story */}
      <section className="  px-4 xl:px-0 pt-44 md:pt-48 lg:pt-48 ">
        <OurStory />
      </section>

      {/* about section */}
      <section className="  px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 ">
        <div>
          <AboutSection />
        </div>
      </section>

      {/* our agents */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24">
        <OurAgents />
      </section>

      {/* testimonials section */}
      <section className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24  py-10">
        <Testimonials />
      </section>

      {/* whychooseus */}
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

      {/* faq section */}
      <section className="px-4 xl:px-0 ">
        <FAQ />
      </section>

      {/* getstarted section */}
      <section className="px-4 xl:px-0 mt-16 lg:mt-24">
        <GetStarted />
      </section>
    </div>
  );
};

export default About;
