import { Link } from "react-router-dom";
import { SiHomebridge } from "react-icons/si";

const AuthNavbar = () => {
  return (
    <nav className="h-[8.5vh] lg:h-[9.5vh]h w-full mx-auto  px-4 fixed top-0 left-0  text-white  ">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center  ">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <SiHomebridge className="text-4xl text-brand-secandary" />
          <h2 className="font-medium">RealEstate</h2>
        </Link>
      </div>
    </nav>
  );
};

export default AuthNavbar;
