import Link from "next/link";
import { useState, useEffect } from "react";
import { IoChevronBackCircleSharp } from "react-icons/io5";

export default function NavBarCustom(props) {
  //FRONT END
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [padding, setPadding] = useState("p-4");

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 60) {
        setColor("#ffffff");
        setTextColor("black");
        setPadding("p-2 sm:pt-0 sm:px-2 ");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setPadding("p-2");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div
        className={`max-w-[1240px] m-auto flex justify-between items-center ${padding} text-white`}
      >
        <Link href="/">
          <h1
            style={{ color: `${textColor}` }}
            className={`font-bold text-4xl`}
          >
            Captur
          </h1>
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
    </div>
  );
}
