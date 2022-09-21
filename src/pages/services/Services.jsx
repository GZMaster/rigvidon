import React, { useState } from "react";
import Card from "../../components/card/Card";
import ServicesData from "../../assets/data/ServicesData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(ServicesData);
  const [pageIndex, setPageIndex] = useState(0)

  function sideScroll (element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === 'left' && pageIndex >= 0) {
        element.scrollLeft -= step;
        setPageIndex(pageIndex - 1)
      } 
      if (direction === 'right' && pageIndex <= 5) {
        element.scrollLeft += step;
        setPageIndex(pageIndex + 1)
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <section id="services" className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Left">
          <div className="S_title">
            <h2>WHAT WE DO</h2>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
            <p>Below are some benefits of working with us and the services we offer</p>
          </div>
          <ul className="s_values">
            <li>
              <span className="values_icon">1</span>
              <span className="values_text">
                <h3>Quality</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, similique.</p>
              </span>
            </li>
            <li>
              <span className="values_icon">2</span>
              <span className="values_text">
                <h3>Quality</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, similique.</p>
              </span>
            </li>
          </ul>
        </div>

        <div className="S_Right">
          <div className="S_Top">
            <h2>OUR SERVICES</h2>
          </div>

          <p className="S_Wrapper_Text">
            Below are some of the services we offer to our clients
          </p>

          <div className="servives_holder">
            <button className="S_Left_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'left', 25, 250, 10)}><AiOutlineArrowLeft /></button>
            <div className="services_card" id="services_card">
              <Card className="cards" items={cardData} />
            </div>
            <button className="S_Right_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'right', 25, 230, 10)}><AiOutlineArrowRight /></button>
          </div>

          <div class="pagination">
            <span class={pageIndex === 0 ? "active" : ""}></span>
            <span class={pageIndex === 1 ? "active" : ""}></span>
            <span class={pageIndex === 2 ? "active" : ""}></span>
            <span class={pageIndex === 3 ? "active" : ""}></span>
            <span class={pageIndex === 4 ? "active" : ""}></span>
            <span class={pageIndex === 5 ? "active" : ""}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
