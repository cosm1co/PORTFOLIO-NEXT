import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import bovinos from '../public/assets/projects/bovinos.png'
import countries from '../public/assets/projects/countries.jpg'
import junior from '../public/assets/projects/junior.png'
import techmarket from "../public/assets/projects/techmarket.jpg";


export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-4 text-[#7D22D8]">These are my projects so far ✔️</h2>
        <p className="py-4 tracking-widest text-sm text-gray-600">
          Check out some of my recent work
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="JUNIOR App"
            backgroundImg={junior}
            projectUrl="https://appjunior.vercel.app/"
            tech="React JS / MongoDB"
          />
          <ProjectItem
            title="TechMarket"
            backgroundImg={techmarket}
            projectUrl="https://techmarketfront.vercel.app/"
            tech="React JS / PostgreSQL"
          />
          <ProjectItem
            title="Bovinos App"
            backgroundImg={bovinos}
            projectUrl="https://bovinos.vercel.app/"
            tech="React JS / MongoDB"
          />
          <ProjectItem
            title="Countries App"
            backgroundImg={countries}
            projectUrl="https://countries-app-beta-one.vercel.app/"
            tech="React JS / PostgreSQL"
          />
        </div>
      </div>
    </div>
  );
}
