import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import ReviewCard from "../../components/reviewcard/ReviewCard";
import Data from "../../assets/data/ReviewData";
import "./Review.scss";

const Review = () => {
  const [data] = useState(Data);

  function sideScroll (element, direction, speed, distance, step) {
    let scrollAmount = 0;
    var slideTimer = setInterval(function () {
      if (direction === 'left') {
        element.scrollLeft -= step;
      } 
      if (direction === 'right') {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }

  return (
    <section className="Review">
      <h2>
        What <span className="A_Green">Our Customers</span> say about us
      </h2>


      <div className="servives_holder">
            <button className="S_Left_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'left', 25, 250, 10)}><AiOutlineArrowLeft /></button>
            <div className="services_card" id="services_card">
              <ReviewCard items={data} />
            </div>
            <button className="S_Right_Button" onClick={() => sideScroll(document.querySelector('.services_card'), 'right', 25, 230, 10)}><AiOutlineArrowRight /></button>
      </div>
      
    </section>
  );
};

export default Review;
