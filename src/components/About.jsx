import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className=' tilt xs:w-[260px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      // className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      className='text-secondary w-full bg-gradient-to-r from-gray-900 via-perpole-600 to-[#00c3ff] p-[1px] rounded-[20px] shadow-card'

    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='bg-gradient-to-r from-gray-400 via-gray-100 to-white bg-clip-text text-transparent text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
   
    <div className="bg-gradient-to-b from-black via-gray-900 to-purple-1000
 max-w mx-auto relative z-0">
      <motion.div variants={textVariant()} className="" >
       
        <p className={` text-secondary text-[21px] flex justify-evenly items-center pt-4  `}>What You Need To Know </p>
        <h2 className={` text-secondary font-black md:text-[60px] sm:text-[20px] xs:text-[40px] text-[30px] font-semibold flex justify-evenly items-center`}>How does it work ?</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
         className=' mt-4 text-secondary text-[21px] max-w-5xl leading-[30px] flex justify-center items-center text-center '>
                Our AI-powered File Integrity Checker ensures the security of uploaded files by detecting unauthorized modifications, corruption, or tampering. Users can upload files, and our system  
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     will analyze them for integrity using AI.      
                </motion.p> */}
               <div className="flex justify-center items-center  text-center">
  <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[21px] max-w-5xl leading-[30px]"
  >
    Our AI-powered File Integrity Checker ensures the security of uploaded 
    files by detecting unauthorized modifications, corruption, or tampering. 
    Users can upload files, and our system will analyze them for integrity using AI.
  </motion.p>
</div>

      <div className='mt-20 flex flex-wrap  justify-center items-center gap-8 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
  );
};

// export default SectionWrapper(About);
export default About;
