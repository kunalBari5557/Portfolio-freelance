import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import Techstack from "./TechStack";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";


const Tech = () => {
  return (
    // <div className='flex flex-row flex-wrap justify-center gap-10'>
    //   {technologies.map((technology) => (
    //     <div className='w-28 h-28' key={technology.name}>
    //       <BallCanvas icon={technology.icon} />
    //     </div>
    //   ))}
    // </div>
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What skills i have developed so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Skillset
        </h2>
      </motion.div>
      <Techstack/>
    </>
  );
};

export default SectionWrapper(Tech, "");
