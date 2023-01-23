import Link from "next/link";
import { useState, useEffect } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NavBarCustom(props) {
  //FRONT END
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
        <Link href="/" className=" md:pl-10">
          {/* <h1
            style={{ color: `${textColor}` }}
            className={`font-bold text-4xl`}
          >
            BROOKLYN
          </h1> */}
          <Image src={logo} width={100} height={50} />
        </Link>
        <ul style={{ color: `${textColor}` }}>
          <li className="p-4">
            <Link
              className="cursor-pointer font-semibold text-md hover:font-black sm:text-sm"
              href={props.back}
            >
              <IoChevronBackCircleSharp size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
