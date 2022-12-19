import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import logo from "../public/assets/logo.png";
import { BsFillPersonLinesFill, BsWindowSidebar } from "react-icons/bs";

export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [shadow, setShadow] = useState(false);
    
    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 90) {
          setShadow(true);
        } else {
          setShadow(false);
        }
      }
      window.addEventListener("scroll", handleShadow);
    }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] navbar"
          : "fixed w-full h-20 z-[100] navbar"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src={logo}
            alt="/"
            height="50"
            width="50"
          />
        </Link>
        <div>
          <ul className="hidden md:flex ">
            <Link href="/#home">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] md:w-[45%] sm:w-[60%] h-screen bg-[white] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/logo.png"
                alt="/"
                height="35"
                width="35"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-violet-900 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">Let's Build</p>
            </div>
          </div>
          <div className="p4-4 flex flex-col">
            <ul className="uppercase">
              <Link onClick={() => setNav(false)} href="/#home">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#skills">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#projects">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link onClick={() => setNav(false)} href="/#contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-20">
              <p className="uppercase tracking-widest text-violet-600">
                Let's connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 crusor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
