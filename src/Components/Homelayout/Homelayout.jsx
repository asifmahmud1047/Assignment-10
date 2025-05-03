import React from "react";
import Banner from "../../Page/Banner/Banner";
import VisaBenefits from "../../Page/VisaBenefits/VisaBenefits";
import CustomerReviews from "../../Page/CustomerReviews/CustomerReviews.jsx";
import Latestvisas from "../../Page/Latestvisas/Latestvisas";

const Homelayout = () => {
  return (
    <div className="w-11/12 mx-auto my-32">
      <Banner></Banner>
      <Latestvisas></Latestvisas>
      <VisaBenefits></VisaBenefits>
      <CustomerReviews></CustomerReviews>
    </div>
  );
};

export default Homelayout;
