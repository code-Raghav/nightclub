import Link from "next/link";
import Image from "next/image";
import { GrFacebook, GrInstagram, GrTwitter } from "react-icons/gr";

export default function Footer() {
  return (
    <div className="min-w-max bg-black p-8 grid grid-rows-2 grid-flow-row gap-4 sm:gap-0 md:mx-32 lg:mx-52 xl:mx-64  2xl:mx-96 lg:grid-cols-2 ">
      <div className="grid justify-center">
        <div>
          <h1 className=" font-sansSerif font-bold text-[rgb(255, 255, 255)] text-md lg:text-lg tracking-wide py-2 pb-8">
            FIND US HERE
          </h1>
          <Link
            href="https://www.google.com/maps/place/Delhi/data=!4m2!3m1!1s0x390cfd5b347eb62d:0x37205b715389640?sa=X&ved=2ahUKEwjTgYSAhd78AhUGTGwGHZwiDP8Q8gF6BAgSEAI"
            rel="noopener noreferrer"
            target="blank"
          >
            <p className="font-sansSerif text-sm lg:text-md text-slate-400 tracking-wide hover:text-white hover:cursor-pointer">
              32B XYZ Street Road <br /> Area <br />
              The City 112209
            </p>
          </Link>
        </div>
        <div className=" flex justify-start items-end gap-6 pt-4">
          <a href="" rel="noopener noreferrer">
            <GrInstagram size={24} />
          </a>
          <a href="" rel="noopener noreferrer">
            <GrFacebook size={24} />
          </a>
          <a href="" rel="noopener noreferrer">
            <GrTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="grid justify-center">
        <div>
          <h1 className=" font-sansSerif font-bold text-[rgb(255, 255, 255)] text-md lg:text-lg tracking-wide py-2 pb-8">
            CONTACT US
          </h1>

          <p className="font-sansSerif text-sm lg:text-md text-slate-400 tracking-wide hover:text-white hover:cursor-pointer">
            +91 991940303
            <br /> emailbar@mail.com
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center col-span-2">
        <Image
          alt="Logo"
          src="/Logo/mainLogo.png"
          width={200}
          height={100}
        ></Image>
      </div>
    </div>
  );
}
