import React, { useState } from "react";
import Card from "../../components/card/Card";
import ServicesData from "../../assets/data/ServicesData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import "./Services.scss";

const Services = () => {
  const [cardData] = useState(ServicesData);

  return (
    <section id="services" className="S_Container">
      <div className="S_Wrapper">
        <div className="S_Left">
          
        </div>

        <div className="S_Right">
          <div className="S_Top">
            <h2>OUR SERVICES</h2>
          </div>

          <p className="S_Wrapper_Text">
            Below are some of the services we offer to our clients
          </p>

          <div className="servives_holder">
            <button className="S_Left_Button" onClick={() => sideScroll(document.getElementById('services_card'),'left',25,200,10)}><AiOutlineArrowLeft /></button>
            <div className="services_card" id="services_card">
              <Card items={cardData} />
            </div>
            <button className="S_Right_Button" onClick={() => sideScroll(document.getElementById('services_card'),'right',25,200,10)}><AiOutlineArrowRight /></button>
          </div>

          <div class="pagination">
            <span class="active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

function sideScroll(element,direction,speed,distance,step){
  let scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction === 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
}

export default Services;
