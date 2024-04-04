"use client";
import React from "react";
import { motion, useInView ,  useScroll } from "framer-motion";
import Skill from "../components/Skill";
import Brain from "../components/Brain";
import { useRef} from "react";
// const Brain = lazy(()=>import("../components/Brain"))

const skills = [
  { id: 1, name: "html" },
  {
    id: 2,
    name: "css",
  },
  {
    id: 3,
    name: "javascript",
  },
  {
    id: 4,
    name: "sass",
  },
  {
    id: 5,
    name: "tailwind",
  },
  {
    id: 6,
    name: "react",
  },
  {
    id: 7,
    name: "nextjs",
  },
  {
    id: 8,
    name: "mongodb",
  },
  {
    id: 9,
    name: "nodejs",
  },
  {
    id: 10,
    name: "expressjs",
  },
  {
    id: 11,
    name: "TypeScript",
  },
];

const Contact = () => {
  const containerRef = useRef();
  const{scrollYProgress }=useScroll({ container: containerRef })
  const skillRef=  useRef()
  const isSkillRefInView = useInView(skillRef)
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-100vh" }}
      animate={{ y: "0%", transition: { duration: 1 } }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex lg:pr-0" ref={containerRef}>
        {/* text section */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-72 lg:w-1/2">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="text-2xl font-bold"> Biography</h1>
            <p className="italic self-end ">
              lorem ipusm dolor sit amer consectetur adipisicing elit . nostrum
              harum quibusdam cupiditate nobis accusamus sed aut aperiam
              reiciemdis ! Voluptas coluptatibus obcaecati delore itaque
              suscipit! vel doloremque numquam quam nihil.
            </p>
          </div>
          {/* skills */}
          <div className="flex flex-col justify-center gap-12" >
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Skill key={skill.id} title={skill.name} />
              ))}
            </div>
          </div>
          {/* experience */}
     
          <div className="flex flex-col gap-12 justify-center pb-48 " ref={skillRef}>
          <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView?{x:0}:{}} transition={{delay:0.5}} className="text-2xl font-bold">Skills</motion.h1>
            {/* exp list */}
            <div className="">
              {/* exp list item */}
              <div className="flex justify-between  h-48">
                {/* left  */}
                <div className="w-1/3 flex flex-col gap-8 ">
                  <div className=" bg-white font-semibold  rounded-md p-4">
                    concepts of the front-end web developing
                  </div>
                  <div className="text-red-400 italic">
                     Html ,css,js,sass,,tailwind....
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full rounded  bg-gray-500 relative">
                    {/* circle */}
                    <div className="w-5 h-5 rounded-full bg-white ring-4 ring-red-500 absolute -left-2 -top-3 "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between  h-48">
                {/* left  */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full rounded  bg-gray-500 relative">
                    {/* circle */}
                    <div className="w-5 h-5 rounded-full bg-white ring-4 ring-red-500 absolute -left-2 -top-3 "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 flex flex-col gap-8 ">
                  <div className=" bg-white font-semibold  rounded-md p-4">
                    front-end using react and next
                  </div>
                  <div className="text-red-400">
                    using java-script type-script
                  </div>
                  
                </div>
              </div>
              <div className="flex justify-between  h-48">
                {/* left  */}
                <div className="w-1/3 flex flex-col gap-8 ">
                  <div className=" bg-white font-semibold  rounded-md p-4">
                    portfolio with animation 
                  </div>
                  <div className="text-red-400 italic ">
                      using frame motion and transistions
                  </div>
                </div>
                {/* center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 h-full rounded  bg-gray-500 relative">
                    {/* circle */}
                    <div className="w-5 h-5 rounded-full bg-white ring-4 ring-red-500 absolute -left-2 -top-3 "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
    
        
        </div>

        <div className="hidden  lg:block sticky top-0 z-30 lg:w-2/3 xl:w-1/2">
          
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
