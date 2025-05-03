import React from "react";
import { useLoaderData } from "react-router-dom";
import Singlevisa from "../Singlevisa/Singlevisa";

const Allvisa = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-center items-center gap-2 my-20">
      {data.map((data) => (
        <Singlevisa key={data._id} data={data}></Singlevisa>
      ))}
    </div>
  );
};

export default Allvisa;
