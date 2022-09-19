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
          <div className="S_Top">
            <h2>OUR SERVICES</h2>
          </div>
          <p className="S_Wrapper_Text">
            Below are some of the services we offer to our clients
          </p>
        </div>
        <button className="S_Left_Button" onClick={() => sideScroll(document.getElementById('services_card'),'left',25,100,10)}><AiOutlineArrowLeft /></button>
        <div className="S_Right" id="services_card">
            <Card className="card_items" items={cardData} />
        </div>
        <button className="S_Right_Button" onClick={() => sideScroll(document.getElementById('services_card'),'right',25,100,10)}><AiOutlineArrowRight /></button>
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
