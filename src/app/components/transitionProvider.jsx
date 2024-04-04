"use client";

import Navbar from "./Navbar";
import { AnimatePresence ,easeOut,motion} from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
    const pathname = usePathname()
  return (
    <AnimatePresence mode="wait">
      <div key={pathname} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div className="w-full h-full bg-black fixed rounded-b-[100px] z-40"
            animate={{
                 height:"0vh",
            }}
            exit={{
                height:"100vh"
            }}
            transition={{duration:0.5 , ease:easeOut}}
        />
        <motion.div className="text-white m-auto top-0 left-0 right-0 bottom-0 z-50 w-fit h-fit text-8xl fixed"
        initial={{opacity:1}}
        animate={{opacity:0}}
        exit={{opacity:0}}
        transition={{duration:0.8,ease:easeOut}}
        >
                {pathname.substring(1)}
        </motion.div>
        <motion.div 
        className="w-full h-full bg-black fixed bottom-0  rounded-t-[100px] z-30"
            initial={{height:"100vh"}}
            animate={{height:"0vh"}}
            transition={{delay:0.5}}
        />
        <div className="h-24">
          <Navbar />
        </div>
        <div className="h-[calc(100vh-6rem)]">{children}</div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
