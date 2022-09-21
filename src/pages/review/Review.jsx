import React, { useState } from "react";
import "./Review.scss";
import ReviewCard from "../../components/reviewcard/ReviewCard";
import Data from "../../assets/data/ReviewData";
const Review = () => {
  const [data] = useState(Data);
  return (
    <section className="Review">
      <h2>
        What <span className="A_Green">Our Customers</span> say about us
      </h2>
      <ReviewCard items={data} />
    </section>
  );
};

export default Review;
