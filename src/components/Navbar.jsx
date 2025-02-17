import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


import { styles } from "../styles";
import { navLinks } from "../constants";
import { cyber4,favicon, menu, close } from "../assets";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  var tl = gsap.timeline()
  useGSAP(() => {
    tl.from(".has , .has1 li",{
      y:-40,
      duration:1,
      delay:1,
      opacity:0,
      stagger:0.5
    })
  });

  // useGSAP(() => {
  //   gsap.to(".btn",{
  //     y:-40,
  //     duration:1,
  //     delay:1,
  //     opacity:0,
  //   })
  // });

 

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
           <img src={cyber4} alt='logo' className='w-9 h-9  bg object-contain has' />
          <p className='text-white text-[24px] font-semibold cursor-pointer flex has '>
         
            Take &nbsp;Control
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 has1'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a className="a" href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <button className="bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 btn ">
  Login
</button>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a className="a" href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;