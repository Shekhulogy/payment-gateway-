import React from "react";
import { NavLink } from "react-router-dom";
import elephant from "../assets/elephant.jpg";
import giraffe from "../assets/giraffe.jpg";
import koala from "../assets/koala.jpg";
import leopard from "../assets/leopard.jpg";
import panda from "../assets/panda.jpg";
import tiger from "../assets/tiger.jpg";
import zebras from "../assets/zebras.jpg";
import logo from "../assets/green tree.png";

function Home() {
  let randomImage = [elephant, giraffe, koala, leopard, panda, tiger, zebras];

  let number = Math.floor(Math.random() * randomImage.length);

  let counter = 1;
  setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 7) {
      counter = 1;
    }
  }, 10000);

  return (
    <>
      <div id="navbar">
        <img src={logo} alt="logo" id="logo" />
        <h2>
          Save <br /> Wildlife
        </h2>
        <NavLink to="/donation">
          <button className="btn-1"> Donate </button>
        </NavLink>
      </div>
      <div className="slider">
        <div className="slides">
          {/*!--radio buttons start-->*/}
          <input type="radio" name="radio-btn" id="radio1" />
          <input type="radio" name="radio-btn" id="radio2" />
          <input type="radio" name="radio-btn" id="radio3" />
          <input type="radio" name="radio-btn" id="radio4" />
          <input type="radio" name="radio-btn" id="radio5" />
          <input type="radio" name="radio-btn" id="radio6" />
          <input type="radio" name="radio-btn" id="radio7" />
          {/* <!--radio buttons end--> */}
          {/* <!--slide images start--> */}
          <div className="slide first">
            <img src={randomImage[number]} alt="" />
          </div>
          <div className="slide">
            <img src={giraffe} alt="" />
          </div>
          <div className="slide">
            <img src={elephant} alt="" />
          </div>
          <div className="slide">
            <img src={leopard} alt="" />
          </div>
          <div className="slide">
            <img src={panda} alt="" />
          </div>
          <div className="slide">
            <img src={tiger} alt="" />
          </div>
          <div className="slide">
            <img src={zebras} alt="" />
          </div>
          {/* <!--slide images end--> */}
          {/* <!--automatic navigation start--> */}
          <div className="navigation-auto">
            <div className="auto-btn1"></div>
            <div className="auto-btn2"></div>
            <div className="auto-btn3"></div>
            <div className="auto-btn4"></div>
            <div className="auto-btn5"></div>
            <div className="auto-btn6"></div>
            <div className="auto-btn7"></div>
          </div>
          {/* <!--automatic navigation end--> */}
        </div>
        {/* <!--manual navigation start--> */}
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
          <label htmlFor="radio6" className="manual-btn"></label>
          <label htmlFor="radio7" className="manual-btn"></label>
        </div>
        {/* <!--manual navigation end--> */}
      </div>
      <div id="caption">
        <h1>Save our home</h1>
        <p>
          Help us to provide a green and healthy life <br /> we need to protect{" "}
        </p>
        <NavLink to="/donation">
        <button className="btn-2"> Make A Donation </button>
        </NavLink>
      </div>
    </>
  );
}

export default Home;
