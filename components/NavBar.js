import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-scroll";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  //standard nav code
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
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

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link
              href="/"
              activeClass="home"
              to="story"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Home
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/"
              activeClass="story"
              to="media"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Our Story
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/"
              activeClass="media"
              to="booking"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Media
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/"
              activeClass="booking"
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Booking
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/"
              activeClass="contact"
              to="members"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Contact Us
            </Link>
          </li>
          <li className="p-4">
            <Link
              href="/"
              activeClass="members"
              to="members"
              smooth={true}
              offset={50}
              duration={500}
              className="cursor-pointer text-white font-semibold text-md hover:font-black sm:text-sm"
            >
              Members
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${"black"}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          ref={ref}
          className={
            nav
              ? "sm:hidden absolute top-0 left-[25%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
              : "sm:hidden absolute top-0 left-[100%] right-0 bottom-0 flex items-start text-justify w-full h-screen bg-white text-black  ease-in duration-300"
          }
        >
          <ul className="my-14 px-5 border-t-2 border-b-2">
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/#gallery">Our Story</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/work">Media</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/contact">Booking</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/contact">Contact Us</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-1xl font-bold hover:text-gray-500"
            >
              <Link href="/contact">Members</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
