"use client"
import Image from "next/image";
import {motion} from "framer-motion"

export default function Home() {
  return (
    <motion.div
    initial={{y:"-100vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
     className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      {/* hero photo */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" className="object-contain" fill alt=""/>
      </div>
      {/* description section */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-start justify-center">
      <h1 className="text-4xl font-bold">crafting Digital Experiences,Designing Tomorrow</h1>
      <p className="w-full">welcome to my portfolio design , where creativity is created</p>
      <div className="w-full  flex gap-4">
      <button className="ring-1 ring-black rounded-lg bg-black text-white p-4 hover:scale-110"> view my work</button>
      <button className="ring-1 ring-black rounded-lg p-4 hover:scale-110">contact me </button>
      </div>
      </div>
    </motion.div>
  );
}
