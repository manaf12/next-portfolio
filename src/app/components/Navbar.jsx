"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const Links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Protfolio" },
  { url: "/contact", title: "Contact" },
];

const topVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const centerVariants = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottomVariants = {
  closed: {
    rotate: 0,
  },
  opened: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};

const listVariants = {
  closed: {
    x: "100vw",
  },
  opened: {
    x: 0,
    transition:{
      when:"beforeChildren",
        staggerChildren:0.2,
}
  },
};
const childListVariants ={
        closed:{
            opacity:0,
            x:-10,
        
        },
        opened:{
            x:0,
            opacity:1,
        },
}

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px12 lg:px-20 xl:px-48  ">
      <div className="hidden md:flex gap-4 w-1/3">
        {Links.map((link) => (
          <Link href={link.url} key={link.title}>
            {link.title}
          </Link>
        ))}
      </div>

      {/* logo */}

      <div className="md:hidden lg:flex lg:w-1/3 justify-center">
        <Link
          href="/"
          className="bg-black rounded-md text-sm p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">manaf</span>
          <span className="bg-white rounded w-12 text-black h-8 flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      {/* images */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        <Link href="/">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/facebook.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/pinterest.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
        <Link href="/">
          <Image src="/dribbble.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* responsive menu */}

      <button
        className="md:hidden hamburger  w-10 h-8 flex flex-col justify-between relative z-50 "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.span
          variants={topVariants}
          animate={isopen ? "opened" : "closed"}
          className="bg-white w-10 h-1 origin-left"
        ></motion.span>
        <motion.span
          animate={isopen ? "opened" : "closed"}
          variants={centerVariants}
          className="bg-white w-10 h-1 "
        ></motion.span>
        <motion.span
          animate={isopen ? "opened" : "closed"}
          variants={bottomVariants}
          className="bg-white w-10 h-1 origin-left"
        ></motion.span>
      </button>
      {/* sidebar */}
      {isopen && (
        <motion.div
        variants={listVariants}
        initial="closed"
        animate="opened"
        className="w-screen h-screen bg-black flex flex-col gap-8 justify-center items-center absolute top-0 left-0 text-white z-40 "
        >
          {Links.map((link) => (
            <motion.div key={link.title} variants={childListVariants}>
             <Link href={link.url} key={link.title}>
        {link.title}
            </Link>
            </motion.div>
           
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
