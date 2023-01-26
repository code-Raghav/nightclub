import { motion } from "framer-motion";
import { Link } from "react-scroll";

export default function Hero({ heading, message }) {
  return (
    //For Image as Hero Background

    // <div className=" flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
    //   <div className=" absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
    //   <div className=" p-5 text-white z-[2]  mt-[-10rem]">
    //     <h2 className="text-5xl font-bold">{heading}</h2>
    //     <p className=" py-5 text-xl">{message}</p>
    //     <button className="px-8 py-2 border">
    //       Book
    //     </button>
    //   </div>
    // </div>

    //For Video as Hero Background
    <div className="relative" id="home">
      <div className=" bg-no-repeat h-screen bg-center bg-cover ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover h-full xl:h-auto min-w-full max-h-full xl: my-auto"
        >
          <source src="/bgHero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-[2] flex items-center justify-center md:left-[-20%] md:top-[-10%] lg:justify-start lg:left-0 lg:p-28">
          <motion.div
            className=" p-5 text-[#c4cacb] z-[2]  mt-[-5rem]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <p className=" py-5 text-md sm:text-md md:text-lg xl:text-xl">
              {message}
            </p>
            <Link
              activeClass="active"
              to="home"
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer"
            >
              <h2 className="text-6xl font-black font-sansSerif sm:text-7xl sm:max-w-xs md:text-8xl md:max-w-md lg:text-8xl lg:max-w-md hover:scale-110 ">
                {heading}
              </h2>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
