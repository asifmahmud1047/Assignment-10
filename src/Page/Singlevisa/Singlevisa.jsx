import React from "react";
import { Link } from "react-router-dom";

// {_id: '6751812754af93152a8bccb3', photo: 'https://i.ibb.co.com/0q8xGrh/Flag-of-Denmark-svg.png', name: 'Denmark', visaType: 'StudentVisa', time: '20'}

const Singlevisa = ({ data }) => {
  const { photo, name, validity, visaType } = data;
  return (
    <div className="w-11/12 mx-auto my-6 flex items-center justify-center">
      <div className="card card-compact bg-gradient-to-b from-gray-50 to-white w-80 shadow-lg hover:shadow-2xl rounded-xl transition-all duration-300">
        <figure>
          <img
            src={photo}
            alt={name}
            className="w-full h-[200px] p-3 border-2 border-dashed rounded-t-xl object-cover"
          />
        </figure>
        <div className="card-body p-5">
          <h2 className="card-title text-xl font-extrabold text-gray-800 mb-2">
            {name}
          </h2>
          <p className="text-base font-semibold text-gray-600 mb-1">
            <span className="text-gray-700">Validity:</span> {validity} Years
          </p>
          <p className="text-base font-semibold text-gray-600 mb-3">
            <span className="text-gray-700">Visa Type:</span> {visaType}
          </p>
          <div className="card-actions justify-center">
            <Link
              to={`/visa/${name}`}
              className="btn btn-accent btn-sm px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlevisa;