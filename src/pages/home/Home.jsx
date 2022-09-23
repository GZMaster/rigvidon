import React from "react";
import "./Home.scss";
import Hero from "../../assets/images/Compressed Hero Image.png";
import Mobile from "../../assets/images/Mobile Compressed Hero Image.png";
import UseMediaQuery from "../../components/mediaquery/UseMediaQuerry";
import { FiArrowDown } from "react-icons/fi";

const Home = () => {
  let isPageWide = UseMediaQuery("(max-width: 468px)");
  return (
    <section id="home" className="Home_Page">
      {isPageWide ? (
        <>
          <img src={Mobile} className="hero_image" alt="hero" />
          <div className="Home_Wrapper">
            <div className="Home_Svg">
              <FiArrowDown />
            </div>
            <div className="Home_btn">Learn About Us</div>
          </div>
        </>
      ) : (
        <>
          <img src={Hero} className="hero_image" alt="hero" />
          <div className="Home_Wrapper">
            <div className="Home_Svg">
              <FiArrowDown />
            </div>
            <div className="Home_btn">Learn About Us</div>
          </div>
        </>
      )}
    </section>
  );
};

export default Home;
