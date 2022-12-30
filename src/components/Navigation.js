import React, { useState } from "react";
import Home from "../Pages/Home";
import Sidebar from "./Sidebar";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(true);
  // const [rotate, setRotate] = useState("0deg");
  // {rotate?setRotate("90deg"):setRotate("0deg")}
  return (
    <>
 
    <header className="nav-container">
      <div className="nav-row">
        <div className="col-left">
          <img src="./images/moneyTreesLogo.png" alt="logo1" id="logo" />
        </div>
        <nav className="col-right">
          <a href="/">Sign In</a>
          <img src={isOpen ? './images/Vector.svg' : './images/Vector1.svg'} onClick={()=>setIsOpen(!isOpen)} alt="Net" />
        </nav>
      </div>
    </header>
   <Home />
    {!isOpen?<Sidebar open={isOpen}/>:""}
      

    
    </>
  );
};

export default Navigation;
