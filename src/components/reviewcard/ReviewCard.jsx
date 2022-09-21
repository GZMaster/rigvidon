import React from "react";
import "./ReviewCard.scss";

const ReviewCard = ({ items }) => {
  return (
    <article className="Review_Container">
      {items.map((item) => {
        const { image, name, review, id } = item;
        return (
          <div key={id} className="Review_Wrapper">
            <div className="Review_Top">
              <div className="Review_Image">
                <img src={image} alt={name} />
              </div>
              <h6>{name}</h6>
            </div>
            <p>"{review}"</p>
          </div>
        );
      })}
    </article>
  );
};

export default ReviewCard;
