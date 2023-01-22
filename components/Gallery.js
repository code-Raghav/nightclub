import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <div
      className="grid bg-[#ecf0f1] gap-8 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-52 "
      id="gallery"
    >
      <ImageBox img="https://images.unsplash.com/photo-1618455495538-78e47b742be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://images.unsplash.com/photo-1569924995012-c4c706bfcd51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://images.unsplash.com/photo-1622743941533-cde694bff56a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://images.unsplash.com/photo-1558043279-a860bfe6d3b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://images.unsplash.com/photo-1579450887255-08655f356315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5pZ2h0Y2x1YnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
      <ImageBox img="https://images.unsplash.com/photo-1618176581088-09ce6bf7e1ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://images.unsplash.com/photo-1558011554-b0dd73a08568?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
      <ImageBox img="https://firebasestorage.googleapis.com/v0/b/nightclub-f72a2.appspot.com/o/20230104_131907.png?alt=media&token=9332fc8f-1399-4560-81c8-803096c321f2" />
    </div>
  );
}

function ImageBox({ img }) {
  return (
    <motion.div
      className="flex justify-center relative group overflow-hidden rounded-md cursor-pointer"
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.1,
      }}
    >
      <Image
        src={img}
        alt="Manali"
        width={300}
        height={400}
        className="rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125 z-0 hover:z-10"
      ></Image>
      <div className="absolute bg-black w-full h-full opacity-40 transition-opacity duration-500 group-hover:opacity-80" />
    </motion.div>
  );
}
