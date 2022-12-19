import React from 'react'
import Link from "next/link";
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="py-4 uppercase tracking-widest text-sm text-gray-600">
            WELCOME TO MY PORTFOLIO 🚀
          </p>
          <h1 className=" text-gray-700">
            Hi, I'm <span className="text-[#7D22D8]">Fede</span>
          </h1>
          <h2 className="py-2 text-gray-700">
            <span className="text-[#7D22D8]">Front End</span> Web Developer
          </h2>
          <p className="py-4 tracking-widest text-md text-gray-600">
            BASED IN MENDOZA, ARGENTINA ⛰️🌤️
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/federicofaraz-fullstack/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/cosm1co"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>

            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>

            <a
              href="https://drive.google.com/file/d/1-23bU1LYTEZ1W3987QJ7TxfyiIipzAQy/view"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
