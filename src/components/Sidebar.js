import React from "react";
const Sidebar = (props) => {
  
  const nav = [
    "Home",
    "Features",
    "Trading Bots",
    "Copy Trading",
    "Pricing",
    "Blogs",
  ];
  return (
    <>
      {/* <section className="sidebar-container">
        <div className="topbar">
          <img src="./images/moneyTreesLogo.png" alt="logo1" onClick={!open} className="logo" />
          <img
            src="./images/Vector.svg"
            onChange={props.Open}
            isOpen={props.isOpen}
            alt="Net"
          />
        </div> */}
        <nav className="sidebar">
          {nav.map((x, i) => (
            <a href="/" key={i}>
              {x}
            </a>
          ))}
        </nav>
     
    </>
  );
};

export default Sidebar;
