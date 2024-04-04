"use client"
import React from 'react'
import { useState ,useRef} from 'react'

import { motion } from 'framer-motion'
const About = () => {
    const [success,setSuccess]=useState(false)
    const [error,setError]=useState(false)
    const text = "Say hello"
    const formRef = useRef()
    //   const sendEmail = (e) => {
    //     e.preventDefault();
    // setError(false)
    // setSuccess(false)
    //     emailjs
    //       .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
    //         publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
    //       })
    //       .then(
    //         () => {
    //           setSuccess(true)
    //           console.log('SUCCESS!');
    //         },
    //         (error) => {
    //           setError(true)
    //           console.log('FAILED...', error.text);
    //         },
    //       );
    //   };
    
  return (
    <motion.div className='h-full'
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration:1}}
    >
        <div className='h-full flex flex-col lg:flex-row  lg:px-24 xl:px-48'>
            {/* text */}
            <div className='h-1/2  lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'> 
                <div >
                        {text.split("").map((letter,index)=>(
                        <motion.span key={index} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:3,repeat:Infinity,delay:index *0.1}}>{letter}</motion.span>
                        ))}
                </div>
            </div>
            {/* form */}
                    <form  ref={formRef} className='h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center px-24'>
                                <label>Contact with Email:</label>
                                <textarea name='user_message' placeholder='your mail...' rows={6} className='border-b-2 border-black outline-none bg-transparent'/>
                                <label>my mail adress is:</label>
                                <input name='user_email' type="text" placeholder="your text..." className='border-b-2 border-black outline-none bg-transparent'/>
                                <button  className='w-full bg-purple-200 rounded-lg text-gray-600 p-4 hover:scale-110'>Send</button>
                            {success&& <p className='font-bold text-green-600'>your message sent successfuly</p>}
                            {error&& <p className='font-bold  text-red-600'>SomeThing went wrong !</p>}
                    </form>

        </div>
    </motion.div>
  )
}

export default About
