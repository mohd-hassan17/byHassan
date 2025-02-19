import React from "react";
import {  Hero, Navbar } from "./components";
import Service from "./pages/Service";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/Applayout";
import FileIntegrity from "./pages/FileIntegrity";
import Documentation from "./pages/Documentation";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Hero /> },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Documentation",
        element: <Documentation />,
      },
      {
        path: "/FileIntegrity",
        element: <FileIntegrity />,
      },
    ],
  },
]);



function App() {
 
  return (
    
     <div >
    
     
   
     <div>
        
        <RouterProvider router={router} />
          
       </div>
      
      </div>
   

  )
}

export default App;
