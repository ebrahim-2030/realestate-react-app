import Header from "../components/Header";
import hero from "../assets/images/hero.jpg";
import achivements from "../assets/images/achivements.jpg";
import AboutSection from "../components/AboutSection";
import Discount from "../components/Discount";
import Achivements from "../components/Achivements";
import Apartments from "../components/Apartments";
import Houses from "../components/Houses";

const Home = () => {
  return (
    <div className="">
      {/* header section  */}
      <section
        style={{ backgroundImage: `url(${hero})` }}
        className="px-4 xl:px-0 h-[100vh] pt-[8vh] lg:pt-[9.5vh] bg-cover bg-center bg-brand-primary/90 bg-blend-overlay "
      >
        <Header />
      </section>

      {/* about section */}
      <section className=" px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 bg-white">
        <AboutSection />
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
        className="px-4 xl:px-0 mt-12 md:mt-20 lg:mt-24 bg-black/60 bg-blend-overlay"
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
      {/* rest */}
      <section className="max-w-screen-xl mx-auto ">Rest</section>
    </div>
  );
};

export default Home;
