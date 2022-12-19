import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/assets/logo.png";

export default function Contact () {
  return (
    <div className="w-full lg:h-screen">
      <div id="contact" className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="py-4 text-[#7D22D8]">Get In Touch 📬</h2>
        <p className="py-4 tracking-widest text-sm text-gray-600">
          Send me an email or find me on my socials 🤳🏽
        </p>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 navbar">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300 p-20"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div className="text-white">
                <h2 className="py-2">Federico Faraz</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contac me
                  and let's work together 💪
                </p>
                <h3 className="uppercase pt-8">Find me</h3>
              </div>
              <div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/federicofaraz-fullstack/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-gray-200 shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/cosm1co"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-gray-200 shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <Link href="/#contact">
                    <div className="rounded-full bg-gray-200 shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>

                  <a
                    href="https://drive.google.com/file/d/1-23bU1LYTEZ1W3987QJ7TxfyiIipzAQy/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full bg-gray-200 shadow-lg shadow-violet-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/b8acec04-fe30-40a1-8e83-8f8208c6c118"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-[#7D22D8] to-violet-900 shadow-xl shadow-violet-500">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-violet-600 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-violet-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};


