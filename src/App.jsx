import React from "react";
import { BrowserRouter } from "react-router-dom"
// import { Hero, Navbar, } from "./components";
import { Feedbacks,Contact,StarsCanvas, Navbar } from "./components";


function App() {
 

  return (
    
    <BrowserRouter>
   
     <div className='relative z-0 bg-primary'>
    
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
         <Navbar />
          {/* <Hero />  */}
        </div>
         {/* <About /> */}
        {/* <Experience /> */}
        {/* <Tech /> */}
        {/* <Works /> */}
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas /> 
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App;
