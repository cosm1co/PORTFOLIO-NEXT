import React from "react";
import Image from "next/image";
import Link from "next/link";
// import AboutImg from "../public/assets/about.jpg";

export default function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 text-gray-600">It's me. Hi! 👋😁</h2>
          <h2 className="py-4 text-[#7D22D8]">
            I'm looking for my very first IT job, I want to be challenged, grow
            and make the most of it!
          </h2>
          <p className="py-2 text-gray-600">
            // I'm curious and creative, a person in constant growth🌱,
            passionate // about learning new technologies💻 that help build a
            better world🌐. // This is why I am a Front End / Fullstack Web
            Developer👨🏽‍💻. //{" "}
          </p>
          <p className="py-2 text-gray-600">
            // I want to contribute, in a team with a good atmosphere, with all
            my // knowledge in development and design, and fulfilling the dream
            of // creating digital products for the real needs of people and
            companies // 🚀. //{" "}
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-violet-300 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 navbar">
          <img
            src="https://images.unsplash.com/photo-1671231325603-70dbd08d8bf0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            className="rounded-xl"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
}
