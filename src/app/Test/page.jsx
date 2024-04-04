"use client"
import {motion} from 'framer-motion'
import React from 'react'
import Image from 'next/image'


const Test = () => {
  return(
    <div className='flex items-center justify-center h-full' >
           <motion.div initial={{width:500,height:500}} animate={{width:100,height:100}} transition={{duration:3}} className="relative">
             <Image src="/hero.png" fill/>
           </motion.div>
    </div>
  )
}

export default Test
