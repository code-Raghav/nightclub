import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { Router, useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        className="base-page-size"
        variants={{
          initialState: {
            opacity: 0,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animateState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          exitState: { clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)" },
        }}
        transition={{ duration: 0.75 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
