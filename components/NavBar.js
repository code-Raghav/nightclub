import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RiMenu4Line } from "react-icons/ri";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import Image from "next/image";
import { useRouter } from "next/router";
import { Dropdown } from "@nextui-org/react";

const Navbar = () => {
  //standard nav code
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [padding, setPadding] = useState("p-4");
  const [logo, setLogo] = useState("/Logo/mainLogo.png");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor("#c4cacb");
        setTextColor("black");
        setPadding("p-2 sm:py-1 sm:px-2 ");
        setLogo("/Logo/altLogo.png");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setPadding("p-2");
        setLogo("/Logo/mainLogo.png");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  //implementing clicking outside nav comp to close
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (nav && ref.current && !ref.current.contains(e.target)) {
        setNav(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [nav]);

  const router = useRouter();
  const goToMember = (e) => {
    e.preventDefault();
    router.push("/Members");
  };

  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.1,
      }}
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div
        className={`max-w-[1240px] m-auto flex justify-between items-center ${padding} text-white`}
      >
        <Link
          activeClass="active"
          to="home"
          smooth={true}
          offset={0}
          duration={500}
          className=" md:pl-10"
        >
          {/* <h1
            style={{ color: `${textColor}` }}
            className={`font-bold text-4xl`}
          >
            BROOKLYN
          </h1> */}
          <Image
            src={logo}
            width={100}
            height={50}
            styles="height: 'auto'"
            alt="BROOKLYN"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className={`hidden sm:flex`}>
          <li className="p-4">
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group"
            >
              <span>Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="about"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
            >
              <span>Our Story</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="gallery"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
            >
              <span>Media</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-4">
            <Link
              activeClass="active"
              to="booking"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
            >
              <span>Booking</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          </li>
          <li className="p-2 pt-[10px]">
            {/* <Link
              activeClass="active"
              to="contact"
              smooth={true}
              offset={-63}
              duration={500}
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
            >
              <span>Contact Us</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link> */}
            <Dropdown>
              <Dropdown.Button light color={textColor}>
                <div className="cursor-point font-semibold text-md sm:text-sm lg:text-lg relative group ">
                  Info
                </div>
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                css={{ minWidth: "max-content" }}
              >
                <Dropdown.Item key="new">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Our Location</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="copy">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>Contact Us</span>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item key="edit">
                  <Link
                    activeClass="active"
                    to="contact"
                    smooth={true}
                    offset={-63}
                    duration={500}
                    className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
                  >
                    <span>FAQ</span>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="p-4">
            <div
              className="cursor-pointer font-semibold text-md sm:text-sm lg:text-lg relative group "
              onClick={goToMember}
            >
              <span>Members</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </div>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${"black"}` }} />
          ) : (
            <AiOutlineMenu size={24} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          ref={ref}
          className={
            nav
              ? "sm:hidden absolute top-0 left-[50%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
          }
        >
          <ul className="my-14 px-5 border-t-2 border-b-2">
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="home"
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="about"
                smooth={true}
                offset={-63}
                duration={500}
              >
                Our Story
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="gallery"
                smooth={true}
                offset={-63}
                duration={500}
              >
                Media
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="booking"
                smooth={true}
                offset={-63}
                duration={500}
              >
                Booking
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500 cursor-pointer"
            >
              <Link
                activeClass="active"
                to="contact"
                smooth={true}
                offset={-63}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <div onClick={goToMember}>Members</div>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
// function Navbar() {
//   const ref = useRef();
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const checkIfClickedOutside = (e) => {
//       // If the menu is open and the clicked target is not within the menu,
//       // then close the menu
//       if (isOpen && ref.current && !ref.current.contains(e.target)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", checkIfClickedOutside);

//     return () => {
//       // Cleanup the event listener
//       document.removeEventListener("mousedown", checkIfClickedOutside);
//     };
//   }, [isOpen]);

//   return (
//     <div>
//       <nav className=" shadow-sm fixed w-full z-10">
//         <div className="w-full">
//           <div
//             className={`flex items-center h-20 w-full ${
//               isOpen ? "hidden" : "block"
//             }`}
//           >
//             <div className="flex items-center  mx-20  justify-between w-full">
//               <div className="flex justify-center items-center flex-shrink-0 ">
//                 <h1 className=" font-bold text-xl cursor-pointer">
//                   Stream<span className="text-blue-500">line</span>
//                 </h1>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link
//                     activeClass="Home"
//                     to="about"
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
//                   >
//                     Home
//                   </Link>
//                   <Link
//                     activeClass="about"
//                     to="about"
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     About
//                   </Link>
//                   <Link
//                     activeClass="work"
//                     to="work"
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Projects
//                   </Link>

//                   <Link
//                     activeClass="Services"
//                     to="work"
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     className="cursor-pointer hover:bg-blue-600 text-black hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//                   >
//                     Services
//                   </Link>

//                   <Link
//                     activeClass="contact"
//                     to="contact"
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                     className="cursor-pointer bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black"
//                   >
//                     Contact
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             {/* Mobile Screen Nav Button */}
//             <div className="mr-10 flex md:hidden ">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className={`bg-blue-600 ${
//                   isOpen ? " hidden" : "inlineflex"
//                 } items-center justify-center p-2 rounded-md text-white  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white`}
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <div></div>
//                   //   <svg
//                   //     className="block h-6 w-6"
//                   //     xmlns="http://www.w3.org/2000/svg"
//                   //     fill="none"
//                   //     viewBox="0 0 24 24"
//                   //     stroke="currentColor"
//                   //     aria-hidden="true"
//                   //   >
//                   //     <path
//                   //       strokeLinecap="round"
//                   //       strokeLinejoin="round"
//                   //       strokeWidth="2"
//                   //       d="M6 18L18 6M6 6l12 12"
//                   //     />
//                   //   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           ref={ref}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           {
//             <div className="md:hidden" id="mobile-menu">
//               <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link
//                   href="/home"
//                   activeClass="home"
//                   to="home"
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   href="/about"
//                   activeClass="about"
//                   to="about"
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   About
//                 </Link>

//                 <Link
//                   href="/work"
//                   activeClass="work"
//                   to="work"
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Projects
//                 </Link>
//                 <Link
//                   href="/services"
//                   activeClass="services"
//                   to="services"
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Services
//                 </Link>

//                 <Link
//                   href="/contact"
//                   activeClass="work"
//                   to="work"
//                   smooth={true}
//                   offset={50}
//                   duration={500}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Contact
//                 </Link>
//               </div>
//             </div>
//           }
//         </Transition>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
