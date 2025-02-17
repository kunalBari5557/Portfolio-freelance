import React from "react";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiMysql,
} from "react-icons/si";
import { MdHtml,MdCss } from "react-icons/md";
import './TechStack.css'
import { TbBrandNextjs } from "react-icons/tb";
import { BsFillBootstrapFill } from "react-icons/bs";
import { IoPrism } from "react-icons/io5";

function Techstack() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-[50px] justify-center">
      
      <div className="tech-icons">
      <DiReact />   
      </div>
      <div className="tech-icons">
    <SiNextdotjs />
      </div>
      <div className="tech-icons">
      <DiNodejs />
      </div>
      <div className="tech-icons">
      <SiTypescript />
      </div>
      <div className="tech-icons">
      <SiExpress />
      </div>
      <div className="tech-icons">
      <DiMongodb />
      </div>
      <div className="tech-icons">
      <SiMysql />
      </div>
      <div className="tech-icons">
        <SiPostgresql />
      </div>
      <div className="tech-icons">
      <SiFirebase />
      </div>
      <div className="tech-icons">
      <SiTailwindcss />
      </div>
      <div className="tech-icons">
      <DiJavascript1 />
      </div>
      <div className="tech-icons">
      <MdHtml />
      </div>
      <div className="tech-icons">
      <MdCss />
      </div>
      <div className="tech-icons">
      <BsFillBootstrapFill />
      </div>
    </div>
  );
}

export default Techstack;