import {Outlet} from "react-router-dom";
import { Navbar } from "../components";
// import About from "../components/About";

const AppLayout = () => {
  return (
    <div>
      <main className="w-full h-screen">
        <Navbar />
        
        <Outlet />
      </main>
      
    </div>
  );
};

export default AppLayout;