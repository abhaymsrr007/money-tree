import React from "react";

const Home = () => {
  return (
    <section className="home-section">
      <div className="wrapper-container">
        <div className="home-row">
          <div className="col-left col-half">
            <div className="content">
              <p className="p1">
                Never miss any <span className="b">Fluctuation</span>
              </p>
              <p className="p2">
                Catch every tiny profit with the automated trading bot
              </p><br />
              <button>Sign up for a free plan</button>
              <img className="rotate" src="./images/giphy1.gif" alt="rotate" />
            </div>
          </div>
          <div className="col-right">
            <img className="arm" src="./images/robotic_arm_.png" alt="arm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
