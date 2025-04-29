import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Page/Footer/Footer";

const Home = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="min-h-[calc(100vh-196px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
