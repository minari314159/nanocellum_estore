import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../assets";
import { useRef } from "react";

const Loader = () => {
  const ref = useRef(null);

  return (
    <AnimatePresence>
      <motion.div
        key={ref}
        initial="initalState"
        animation="animatedState"
        exit="exitState"
        varient={{
          initialState: {
            opacity: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
          animatedState: {
            opacity: 0,
            clipPath: "polygon(54% 0, 54% 0, 55% 100%, 55% 100%)",
          },
          exitState: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          },
        }}
        className="bg-primary w-[100vw] h-[100vh] flex justify-center items-center"
      >
        <motion.div
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.5, delay: 3.5 }}
        >
          <img
            src={logo}
            alt="nanocellum logo"
            className="w-auto h-[100px] loading"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
