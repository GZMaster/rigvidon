import React, { useState } from "react";
import Card from "../../components/card/Card";
import ServicesData from "../../assets/data/ServicesData";
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
        <div className="S_Right">
            <Card className="card_items" items={cardData} />
        </div>
      </div>
    </section>
  );
};

export default Services;
