import Header from "../components/Header";
import hero from "../assets/images/hero.jpg";

const Home = () => {
  return (
    <div className="">
      <section
        style={{ backgroundImage: `url(${hero})`}}
        className="h-[100vh] pt-[8vh] lg:pt-[9.5vh] bg-cover bg-center bg-brand-primary/90 bg-blend-overlay "
      >
        <Header />
      </section>
      <section className="max-w-screen-xl mx-auto ">Reset</section>
    </div>
  );
};

export default Home;
