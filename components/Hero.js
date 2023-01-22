import Head from "next/head";

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
    <div className="relative">
      <div className=" bg-no-repeat h-screen bg-center bg-cover ">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 object-cover h-full xl:h-auto min-w-full max-h-full xl: my-auto"
        >
          <source src="/bgHero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70 z-[2] flex items-center justify-center md:left-[-20%] md:top-[-10%]">
          <div className=" p-5 text-white z-[2]  mt-[-10rem]">
            <h2 className="text-5xl font-bold sm:text-4xl xl:text-5xl">
              {heading}
            </h2>
            <p className=" py-5 text-xl sm:text-lg xl:text-3xl">{message}</p>
            <button className="px-8 py-2 border xl:text-xl sm:text-sm">
              Book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
