
import gsap from 'gsap';
import React, { useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';


const FollowCursor = () => {

      const cursorRef = useRef(null);
    
      useEffect(() => {
        const handleMouseMove = (event) => {
          // Animate cursor position
          gsap.to(cursorRef.current, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.3,
            ease: "power2.out", // Replace "black.out" with "power2.out"
          });
        };
    
        // Add mousemove event listener
        window.addEventListener("mousemove", handleMouseMove);
    
        return () => {
          // Cleanup event listener on component unmount
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }, []);
    
      return (
        <div
          ref={cursorRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "20px",
            height: "20px",
            backgroundColor: "#804dee",
            
            borderRadius: "50%",
            pointerEvents: "none",
            zIndex: 9999,
          }}
        ></div>
      );
    };
    
export default FollowCursor;