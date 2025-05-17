import Header from "../components/Header";
import hero from "../assets/images/hero.jpg";
import AboutSection from "../components/AboutSection";
import Discount from "../components/Discount";
import Achivements from "../components/Achivements";

const Home = () => {
  return (
    <div className="px-4 sm:px-0">
      {/* header section  */}
      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="h-[100vh] pt-[8vh] lg:pt-[9.5vh] bg-cover bg-center bg-brand-primary/90 bg-blend-overlay "
      >
        <Header />
      </section>

      {/* about section */}
      <section className="mt-12 md:mt-20 lg:mt-24 bg-white">
        <AboutSection />
      </section>

      {/* discount section */}
      <section className="mt-12 md:mt-20 lg:mt-24 bg-white">
        <Discount />
      </section>

      {/* achivements section */}
      <section className="mt-12 md:mt-20 lg:mt-24 bg-white">
        <Achivements />
      </section>
      {/* rest */}
      <section className="max-w-screen-xl mx-auto ">Rest</section>
    </div>
  );
};

export default Home;
