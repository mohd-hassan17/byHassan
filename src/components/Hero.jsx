import React from "react";
import { motion } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

const Hero = () => {

  useGSAP(() => {
    gsap.from(".bindu",{
      opacity:0,
      y:1000,
      duration:1,
      delay:1,
    })
  });

  useGSAP(() => {
    gsap.from(".bindu1",{
      opacity:0,
      x:300,
      duration:1,
      delay:2.5,
    })
  });

  return (

    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5 bindu'>
         
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}
       
        {/* <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
          <div className="text-container">
        <span className="animated-text">H</span>
        <span className="animated-text">i</span>
        <span className="animated-text">,</span>
        <span className="animated-text"> </span>
        <span className="animated-text">I</span>
        <span className="animated-text">'</span>
        <span className="animated-text">m</span>
        <span className="animated-text"> </span>
        <span className="animated-text">M</span>
        <span className="animated-text">o</span>
        <span className="animated-text">h</span>
        <span className="animated-text">d</span>
        <span className="animated-text"> </span>
        <span className="animated-text">H</span>
        <span className="animated-text">a</span>
        <span className="animated-text">s</span>
        <span className="animated-text">s</span>
        <span className="animated-text">a</span>
        <span className="animated-text">n</span>
    </div>
          </h1>
          <p className={`${styles.heroSubText1} mt-2 text-white-100 text-xs bindu1`}>
            Frontend developer I devloped 3D visuals, user <br className='sm:block hidden text-base  bindu1' />
            interfaces and web applications
          </p>
        </div> */}
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;