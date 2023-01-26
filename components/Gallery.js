import Image from "next/image";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const cardsVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const variantsY = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 }, y: 0 },
  hidden: { opacity: 0, scale: 1, y: -200 },
};

export default function Gallery() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div id="gallery" className=" w-full bg-bgblack border-y-8 border-bgblack">
      <motion.h1
        className="text-center text-5xl lg:text-7xl py-12 lg:py-16 pt-20 lg:pt-24 font-sansSerif font-semibold"
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variantsY}
      >
        Gallery
      </motion.h1>
      <div className="grid bg-bgblack gap-2 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:mx-80 md:mx-28 lg:mx-52 ">
        <ImageBox img="https://images.unsplash.com/photo-1618455495538-78e47b742be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <ImageBox img="/images/IMG_1085.jpg" />

        <ImageBox img="https://images.unsplash.com/photo-1558011554-b0dd73a08568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <ImageBox img="https://images.unsplash.com/photo-1579450887255-08655f356315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
        <HorizontalImageBox img="/images/IMG_1111.jpg" />
        <ImageBox img="/images/IMG_1201.jpg" />
        {/* <ImageBox img="https://images.unsplash.com/photo-1618176581088-09ce6bf7e1ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /> */}
        {/* <ImageBox img="https://firebasestorage.googleapis.com/v0/b/nightclub-f72a2.appspot.com/o/IMG_1074.jpg?alt=media&token=d9094534-4594-4769-a382-e1e1549733fa" />
         */}

        <ImageBox img="https://images.unsplash.com/photo-1622743941533-cde694bff56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        <ImageBox
          xlDevice="xl:hidden"
          img="https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        />
        {/* <ImageBox img="https://firebasestorage.googleapis.com/v0/b/nightclub-f72a2.appspot.com/o/20230104_131907.png?alt=media&token=9332fc8f-1399-4560-81c8-803096c321f2" /> */}
      </div>
    </div>
  );
}

function ImageBox({ img, xlDevice }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className={`flex ${xlDevice} justify-center relative group overflow-hidden cursor-default sm:max-w-[300px]`}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardsVariants}
    >
      <Image
        src={img}
        alt="Manali"
        width={300}
        height={400}
        className="object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 z-0 hover:z-10"
      ></Image>
      <div
        className={`absolute bg-black w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-0`}
      />
    </motion.div>
  );
}
function HorizontalImageBox({ img }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className={`flex justify-center relative group overflow-hidden cursor-default sm:col-span-2 md:max-w-[600px] mx-auto`}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardsVariants}
    >
      <Image
        src={img}
        alt="Manali"
        width={600}
        height={400}
        className="object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 z-0 hover:z-10"
      ></Image>
      <div
        className={`absolute  bg-black w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-0`}
      />
    </motion.div>
  );
}
