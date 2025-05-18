import verify from "../assets/icons/verify.png";
import expert from "../assets/icons/expert-assistant.png";
import search from "../assets/icons/smart search.png";
import deal from "../assets/icons/deal.png";
import security from "../assets/icons/security.png";
import coverage from "../assets/icons/coverage.png";

// why-choose-us data array 
const whyChooseUs = [
  {
    id: "01",
    image: verify,
    title: "Verified Listings",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
  {
    id: "02",
    image: expert,
    title: "Expert Assistance",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
  {
    id: "03",
    image: search,
    title: "Smart Search",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
  {
    id: "04",
    image: deal,
    title: "Best Deals",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
  {
    id: "05",
    image: security,
    title: "Secure Transactions",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
  {
    id: "06",
    image: coverage,
    title: "Wide Coverage",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquest. pretiumets ut imperdiet.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-white py-10 sm:py-16">
      {/* title and description */}
      <div className=" flex flex-col items-start opacity-90">
        <h2 className="text-2xl md:text-4xl font-bold sm:font-semibold">
          Why Choose Us
        </h2>
        <p className="text-sm md:text-base mt-2 lg:mt-4  pb-3  opacity-70">
          Trusted experts helping you find your perfect home with ease and
          confidence.
        </p>
      </div>

      {/* features grid */}
      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3  gap-4 sm:gap-8 lg:gap-12 ">
        {whyChooseUs.map((item) => (
          <li key={item.id} className="flex gap-3 opacity-90">
            <img src={item.image} className="h-10  w-10  o" alt="" />
            <div className="">
              <h4 className="font-bold">{item.title}</h4>
              <p className="opacity-70 text-sm mt-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseUs;
