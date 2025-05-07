import React, { useState } from "react";
import Banner from "../../Page/Banner/Banner";
import VisaBenefits from "../../Page/VisaBenefits/VisaBenefits";
import CustomerReviews from "../../Page/CustomerReviews/CustomerReviews.jsx";
import Latestvisas from "../../Page/Latestvisas/Latestvisas";

const Homelayout = () => {
  const [darkMode, setDarkMode] = useState(false);


  return (
    <div  className="font-font">
      <Banner></Banner>
      <div className="w-11/12 mx-auto px-8 py-8">
        <Latestvisas></Latestvisas>
        <VisaBenefits></VisaBenefits>
        <CustomerReviews></CustomerReviews>
      </div>
    </div>
  );
};

export default Homelayout;
