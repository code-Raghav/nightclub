import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Dropdown } from "@nextui-org/react";
import { Parallax } from "react-scroll-parallax";

const variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="w-full bg-[#c4cacbcd] text-black ">
        <div className=" h-screen bg-[#c4cacb] grid grid-rows-2 p-8 lg:mx-52 xl:mx-64">
          <div className="text-center">
            <motion.h1
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              className="text-2xl font-bold font-sansSerif py-3"
            >
              Lorem ipsum dolor sit.
            </motion.h1>
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={variants}
              className="font-sansSerif font-b"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vel,
              dolorem exercitationem fuga eos ipsam aut voluptate voluptates
              vero porro.
            </motion.p>
          </div>
          <Parallax translateY={[-20, 20]}>
            <div>Hi</div>
          </Parallax>
        </div>
      </div>
    </>
  );
}
