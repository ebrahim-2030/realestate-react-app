// imports
import { useEffect, useState } from "react";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsBuildingsFill } from "react-icons/bs";
import { FaHouseChimneyWindow } from "react-icons/fa6";
import { SiHomebridge } from "react-icons/si";
import { scroller } from "react-scroll";

// nav links data
const navlinks = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },

  {
    label: "properties",
    path: " ",
    submenu: [
      {
        label: "all",
        path: "/search-result",
        desc: "Discover all properties available for rent or sale",
      },
      {
        label: "apartments",
        path: "/search-result?propertyType=apartment",
        desc: "Explore a variety of apartments for rent or sale",
      },
      {
        label: "houses",
        path: "/search-result?propertyType=house",
        desc: "Find houses for rent or sale in different locations",
      },
    ],
  },
  { label: "agents", path: "/agents" },
  { label: "contact", path: "/contact" },
];

const Navbar = () => {
  // drobdown toggler state
  const [openDropdown, setOpenDropdown] = useState(false);

  // mobile menu toggler state
  const [openMenu, setOpneMenu] = useState(null);

  // scroll tracker state
  const [scrolled, setScrolled] = useState(false);

  // set scrolled state based on window scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // hook for navigation
  const navigator = useNavigate();

  // navigate to auth page and close mobile menu
  const authNavigator = () => {
    navigator("/auth");
    setOpneMenu(false);
  };

  return (
    <nav
      className={`h-[8.5vh] lg:h-[9.5vh] w-full mx-auto  px-4 fixed top-0 left-0  ${
        scrolled ? "bg-brand-primary " : "bg-transparent"
      } text-white  z-50 transition-all duration-300`}
    >
      <div
        onClick={() => window.scrollTo(0, 0)}
        className="max-w-screen-2xl mx-auto h-full flex items-center justify-between "
      >
        {/* logo */}
        <Link to="/" onClick={() => openMenu(false)} className="flex items-center gap-2">
          <SiHomebridge className="text-4xl lg:text-[40px] text-brand-secandary" />
          <h2 className="font-medium">RealEstate</h2>
        </Link>
        {/* desktop nav links */}
        <ul className="hidden flex-1 lg:flex items-center justify-center lg:ml-20 gap-10 capitalize relative">
          {navlinks.map((link) => (
            <li
              key={link.path}
              className={`relative group ${
                link.submenu ? "cursor-pointer" : ""
              }`}
              onMouseEnter={() => link.submenu && setOpenDropdown(true)}
              onMouseLeave={() => link.submenu && setOpenDropdown(null)}
            >
              <NavLink
                onClick={() => window.scrollTo(0, 0)}
                to={link.path}
                className={({ isActive }) =>
                  `flex items-center  ${
                    isActive
                      ? "text-brand-secandary font-medium"
                      : "text-white hover:text-brand-secandary"
                  } ${link.label === "properties" ? "py-6" : ""}`
                }
              >
                {link.label}
                {link.submenu && (
                  <MdKeyboardArrowDown
                    className={`ml-1 text-xl ${
                      openDropdown && "rotate-180"
                    } transition-all duration-300`}
                  />
                )}
              </NavLink>

              {/* dropdown menu */}
              {link.submenu && openDropdown && (
                <ul className=" absolute  top-full left-1/2 -translate-x-1/2 bg-white text-custom_black shadow-md rounded z-40 w-[700px] px-4 py-6 grid grid-cols-3 gap-4 border-b-4  border-brand-secandary">
                  {link.submenu.map((item) => (
                    <li
                      key={item.path}
                      className="hover:bg-brand-primary hover:text-white rounded-md p-4 transition-all duration-100"
                    >
                      <NavLink
                        onClick={() => window.scrollTo(0, 0)}
                        to={item.path}
                        className=""
                      >
                        <div className="flex items-end justify-between mb-2">
                          <span className="flex gap-2">
                            <span className="text-2xl">
                              {item.label === "all" && <BiSolidBuildingHouse />}
                              {item.label === "apartments" && (
                                <BsBuildingsFill />
                              )}
                              {item.label === "houses" && (
                                <FaHouseChimneyWindow />
                              )}
                            </span>
                            <span className="font-medium">{item.label}</span>
                          </span>
                        </div>

                        <span className="text-xs font-medium opacity-60">
                          {item.desc}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* auth buttons & mobile menu placeholder  */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex sm:mr-6 lg:mr-0 items-center gap-2">
            <button onClick={() => navigator("/auth")} className="">
              Login
            </button>
            <span className="font-semibold text-lg text-brand-secandary">
              |
            </span>
            <button
              onClick={() => navigator("/auth")}
              className="hover:text-brand_secandary"
            >
              Register
            </button>
          </div>

          {/* mobile menu placeholder */}
          <button
            onClick={() => setOpneMenu((prev) => !prev)}
            className="block lg:hidden cursor-pointer py-1"
          >
            <span
              className={` ${
                openMenu ? "-rotate-45 translate-y-[3px]" : ""
              } block h-[1.5px] w-7 bg-white transition-all duration-300 rounded-sm`}
            ></span>
            <span
              className={` ${
                openMenu ? "rotate-45 -translate-y-[6.5px]" : ""
              } block h-[1.5px] mt-2 w-7 bg-white transition-all duration-300 rounded-sm`}
            ></span>
          </button>
        </div>
      </div>

      {/* mobile menu*/}
      <div
        className={`fixed top-[8vh] left-0 w-full overflow-hidden bg-brand-primary border-brand-secandary text-white transition-all duration-500 ${
          openMenu
            ? openDropdown
              ? "h-[470px] sm:h-[430px]  border-b-2"
              : "h-[340px] sm:h-[300px]  border-b-2"
            : "h-0"
        }`}
      >
        <ul className="p-4  pt-10  capitalize flex flex-col gap-6">
          {navlinks.map((link) => (
            <li
              key={link.path}
              onClick={() => link.submenu && setOpenDropdown((prev) => !prev)}
              className=""
            >
              {!link.submenu ? (
                <NavLink
                  to={link.path}
                  onClick={() => setOpneMenu(false)}
                  className={({ isActive }) =>
                    `flex items-center  ${
                      isActive
                        ? "text-brand-secandary font-medium"
                        : "text-white hover:text-brand-secandary"
                    } `
                  }
                >
                  {link.label}
                </NavLink>
              ) : (
                // dropdown menu
                <div>
                  <div
                    className={`flex items-center justify-between cursor-pointer ${
                      openDropdown
                        ? "text-brand-secandary"
                        : "hover:text-brand-secandary"
                    } font-medium`}
                  >
                    <span>{link.label}</span>
                    <MdKeyboardArrowDown
                      className={`ml-1 text-2xl ${
                        openDropdown ? "rotate-180" : ""
                      } transition-all duration-300`}
                    />
                  </div>
                  <ul
                    className={` ${
                      openDropdown ? "h-32 pt-4" : "h-0"
                    } overflow-hidden transition-all duration-300 flex flex-col gap-4 ml-6 `}
                  >
                    {link.submenu.map((l) => (
                      <li
                        key={l.path}
                        onClick={() => {
                          setOpneMenu(false);
                          setOpenDropdown(true);
                        }}
                      >
                        <NavLink
                          to={l.path}
                          className={`flex justify-between items-center hover:text-brand-secandary `}
                        >
                          <span>{l.label}</span>
                          <span className="text-xl">
                            {l.label === "all" && <BiSolidBuildingHouse />}
                            {l.label === "apartments" && <BsBuildingsFill />}
                            {l.label === "houses" && <FaHouseChimneyWindow />}
                          </span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          {/* auth buttons */}
          <div className="flex sm:hidden  items-center justify-end gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={authNavigator}
                className="hover:text-brand_secandary"
              >
                Login
              </button>
              <span className="font-semibold text-lg text-brand-secandary">
                |
              </span>
              <button
                onClick={authNavigator}
                className="hover:text-brand_secandary"
              >
                Register
              </button>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
