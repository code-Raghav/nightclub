import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 }, x: 0 },
  hidden: { opacity: 0, scale: 1, x: -200 },
};

export default function ParallaxComp() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <>
      <div
        id="about"
        className=" min-h-[75vh] bg-[#0E0E0E] text-black p-10 grid gap-6 md:grid-cols-2 sm:px-28 lg:px-52 xl:px-80"
      >
        <div className=" w-full text-center grid gap-6">
          <div className="md:flex md:items-center md:justify-center">
            <motion.h1
              className="text-white font-sansSerif text-2xl font-semibold sm:text-3xl lg:text-5xl lg:pt-8 "
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
            >
              ABOUT US
            </motion.h1>
          </div>
          <motion.p
            className="text-white font-sansSerif text-md sm:text-lg lg:text-xl"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
            pariatur omnis nulla molestiae, magnam inventore, harum non veniam
            tempore dignissimos porro fuga officiis sapiente voluptatem ipsum
            quos temporibus dolorem explicabo in sunt ea quod rerum. Rerum
            perferendis itaque ad magni pariatur est quisquam, cum commodi!
            Fugiat illum non quibusdam minima odio ipsum beatae aut tempora.
            Alias porro quidem facilis sunt.
          </motion.p>
        </div>
        <Parallax scale={["0.8", "1.1", "easeInQuad"]}>
          <div className="flex items-center justify-center md:justify-end h-full">
            <Image
              alt="Brooklyn Bar"
              src="/images/IMG_1151.jpg"
              width={600}
              height={600}
            />
          </div>
        </Parallax>
      </div>
      <div className="parallaxImage bg-fixed w-full h-[40vh] md:h-[50vh] text-black flex justify-center md:justify-end">
        <div className="w-full px-8 md:pr-0 xl:px-8  md:w-[60vw] bg-gradient-to-l  from-black via-black grid justify-center md:justify-end items-center overflow-hidden ">
          <Parallax translateY={["250px", "-150px"]}>
            <div className="md:max-w-xs xl:max-w-lg flex items-end h-full">
              <h1 className=" text-white md:text-xl xl:text-3xl font-black font-sansSerif text-center ">
                Experience life like never before. Have a crazy night with us!
              </h1>
            </div>
          </Parallax>
          <Parallax translateY={["0px", "-200px"]}>
            <p className="text-white text-sm  uppercase font-black font-sansSerif text-center xl:max-w-lg ">
              at brooklyn
            </p>
          </Parallax>
        </div>
      </div>
    </>
  );
}
