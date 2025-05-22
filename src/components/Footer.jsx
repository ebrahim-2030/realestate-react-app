import { Link } from "react-router-dom";
import bg3 from "../assets/images/bg3.webp";
import logo from "../assets/icons/logo.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" bg-brand-primary pt-48   text-white/95"
    >
      <div className="max-w-screen-2xl  px-4 mx-auto grid sm:grid-cols-3 lg:grid-cols-6 gap-y-20  ">
        {/* about & newsletter */}
        <div className="col-span-2 ">
          {/* about */}
          <div className="">
            <Link
              to="/"
              className="flex items-center gap-4 text-2xl font-medium -mt-3"
            >
              <img src={logo} className="h-10 md:h-12" alt="" />
              <span>RealEstate</span>
            </Link>
            <p className="text-sm my-4 opacity-60 ">
              Lorem ipsum dolor sit amet consectetur. <br /> Posuere vitae lacus
              quis eget amet ut tristique cras.
            </p>
          </div>

          {/* newsletter */}
          <div className="mt-8">
            <h2 className="text-2xl font-medium">Newsletter</h2>
            <p className="text-sm my-2 opacity-60">
              Subscripe our newsletter and stay update
            </p>
            <form className="h-12 mt-4 max-w-[330px]  bg-transparent border-2 rounded border-white text-white flex items-center">
              <input
                type="text"
                className="flex-1 h-full bg-transparent px-4 border-none outline-none placeholder:text-sm placeholder:font-medium "
                placeholder="example@gmail.com"
              />
              <button
                type="submit"
                className="bg-white text-curren text-brand-primary w-20    text-sm font-medium h-full border-none"
              >
                Subscripe
              </button>
            </form>
          </div>
        </div>

        {/* quick links */}
        <div>
          <h3 className="text-xl font-medium">Quick Links</h3>
          <ul className="mt-6 flex flex-col items-start gap-4 ">
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Buy</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Rent</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Sell</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Find Agents</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* policies */}
        <div>
          <h3 className="text-xl font-medium">Policies</h3>
          <ul className="mt-6 flex flex-col items-start gap-4">
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Privacy Policy</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Terms & Services</Link>
            </li>
            <li className="opacity-60 hover:text-brand-secandary hover:opacity-100">
              <Link to="#">Refaund Policy</Link>
            </li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="text-xl font-medium">Need Help?</h3>
          <div className="mt-6 flex flex-col items-start gap-6">
            <div className="">
              <p className="opacity-60">Call Us</p>
              <Link
                to="https://wa.me/0123456789"
                className="text-xl font-medium hover:text-brand-secandary"
              >
                0-123-456-789
              </Link>
            </div>
            <div>
              <p className="opacity-60">Need Support</p>
              <Link
                className="text-xl font-medium hover:text-brand-secandary"
                to="mailto:info@example.com"
              >
                info@example.com
              </Link>
            </div>
          </div>
        </div>

        {/* social media links */}
        <div>
          <h3 className="text-xl font-medium">Follow Us</h3>
          <ul className="mt-6 flex items-center text-xl gap-4">
            <li className="hover:text-brand-secandary">
              <Link to="#">
                <FaFacebookF />
              </Link>
            </li>
            <li className="hover:text-brand-secandary">
              <Link to="#">
                <FaInstagram />
              </Link>
            </li>
            <li className="hover:text-brand-secandary">
              <Link to="#">
                <FaLinkedinIn />
              </Link>
            </li>
            <li className="hover:text-brand-secandary">
              <Link to="#">
                <BsTwitterX />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* white line */}
      <hr className="mt-16 opacity-70" />

      {/* copyright section */}
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row  gap-2 md:items-center justify-between py-4 opacity-60">
        <p>
          Design By{" "}
          <span className="text-brand-secandary opacity-100">Ebrahim Asil</span>
        </p>
        <p>&copy; 2025 Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
