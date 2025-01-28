import React from "react";
import { div } from "framer-motion/client";
import { github } from "../assets";
import { Linkedin } from "../assets";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const Feedbacks = () => {

    useEffect(() => {
        const handleWheel = (event) => {
          if (event.deltaY > 0) {
            gsap.to(".marque", {
              transform: "translateX(-200%)",
              duration: 3.5,
              repeat: -1,
              ease: "none",
            });
            gsap.to(".marque .img1", {
              rotate: 0,
            });
          } else {
            gsap.to(".marque", {
              transform: "translateX(0%)",
              duration: 3.5,
              repeat: -1,
              ease: "none",
            });
            gsap.to(".marque .img1", {
              rotate: 180,
            });
          }
        };
    
        // Attach the wheel event listener
        window.addEventListener("wheel", handleWheel);
    
        // Cleanup on component unmount
        return () => {
          window.removeEventListener("wheel", handleWheel);
        };
      }, []); // Empty dependency array ensures this effect runs once on mount
    

    return(
        <div id="move">
          
        <div className="marque">
            <a href="https://www.linkedin.com/in/mohd-hassan17/" target="_blank">
           <h1>Checkout LinkedIn Profile</h1>
           <img src={Linkedin} />
           </a>
        <img className="img1" src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
     </div>

     <div className="marque">
        <a href="https://github.com/mohd-hassan17/" target="_blank">
        <h1>Checkout Github Acount</h1>
        <img src={github} />
        </a>
        <img className="img1" src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
     </div>

     <div className="marque">
            <a href="https://www.linkedin.com/in/mohd-hassan17/" target="_blank">
           <h1>Checkout LinkedIn Profile</h1>
           <img src={Linkedin} />
           </a>
        <img className="img1" src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
     </div>
     <div className="marque">
        <a href="https://github.com/mohd-hassan17/" target="_blank">
        <h1>Checkout Github Acount</h1>
        <img src={github} />
        </a>
        <img className="img1" src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" />
     </div>
    </div>
    )
}

export default SectionWrapper(Feedbacks, "");

// ({

//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn("", "spring", index * 0.5, 0.75)}
//     className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
//   >
//     <p className='text-white font-black text-[48px]'>"</p>

//     <div className='mt-1'>
//       <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

//       <div className='mt-7 flex justify-between items-center gap-1'>
//         <div className='flex-1 flex flex-col'>
//           <p className='text-white font-medium text-[16px]'>
//             <span className='blue-text-gradient'>@</span> {name}
//           </p>
//           <p className='mt-1 text-secondary text-[12px]'>
//             {designation} of {company}
//           </p>
//         </div>

//         <img
//           src={image}
//           alt={`feedback_by-${name}`}
//           className='w-10 h-10 rounded-full object-cover'
//         />
//       </div>
//     </div>
//   </motion.div>
// );

// const Feedbacks = () => {
//   return (
//     <div className={`mt-12 bg-black-100 rounded-[20px]`}>
//       <div
//         className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
//       >
//         <motion.div variants={textVariant()}>
//           <p className={styles.sectionSubText}>What others say</p>
//           <h2 className={styles.sectionHeadText}>Testimonials.</h2>
//         </motion.div>
//       </div>
//       <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
//         {testimonials.map((testimonial, index) => (
//           <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SectionWrapper(Feedbacks, "");