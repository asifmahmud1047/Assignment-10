import React from "react";
import Banner from "../../Page/Banner/Banner";
import VisaBenefits from "../../Page/VisaBenefits/VisaBenefits";
import CustomerReviews from "../../Page/CustomerReviews/CustomerReviews.jsx";

const Homelayout = () => {
  return (
    <div className="w-11/12 mx-auto my-32">
      <Banner></Banner>
      <VisaBenefits></VisaBenefits>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Homelayout;
