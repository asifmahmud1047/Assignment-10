import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestVisas = () => {
  const [visas, setVisas] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-two-sand.vercel.app/latest-visas")
      .then((res) => res.json())
      .then((data) => setVisas(data))
      .catch((error) => console.error("Error fetching latest visas:", error));
  }, []);

  return (
    <div className="my-14">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-gray-800 underline">
        Latest Visas
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visas.map((visa) => (
          <div
            key={visa._id}
            className="border-2 border-gray-200 rounded-lg shadow-md overflow-hidden bg-white flex-grow-0"
          >
            <div className="p-3">
              <img
                src={visa.photo}
                alt={visa.name}
                className="w-full h-48 object-cover border-2 rounded-xl"
              />
            </div>
            <div className="p-4 flex flex-col flex-grow ">
              <h3 className="text-2xl font-bold text-gray-800"></h3>
              <p className="text-sm text-gray-600 mt-2">{visa.description}</p>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="font-semibold text-gray-700">
                    Visa Type:
                  </span>{" "}
                  {visa.visaType}
                </p>
                <p>
                  <span className="font-medium text-gray-700">
                    Processing Time:
                  </span>{" "}
                  {visa.time} days
                </p>
                <p>
                  <span className="font-medium text-gray-700">Fee:</span>{" "}
                  {visa.fee} K
                </p>
                <p>
                  <span className="font-medium text-gray-700">Validity:</span>{" "}
                  {visa.validity} years
                </p>
                <p>
                  <span className="font-medium text-gray-700">
                    Application Method:
                  </span>{" "}
                  {visa.applicationMethod}
                </p>
              </div>
              <Link
                to={`/details/${visa._id}`}
                className="btn btn-accent btn-sm px-6 py-2 rounded-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 mt-5"
              >
                See Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-6">
        <Link
          to={"/allvisa"}
          className=" w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 font-semibold"
        >
          See All Visas
        </Link>
      </div>
    </div>
  );
};

export default LatestVisas;