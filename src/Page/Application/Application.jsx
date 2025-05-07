import React, {useEffect, useState} from "react";
import { useLoaderData } from "react-router-dom";
 import { toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

const Application = () => {
  const applications = useLoaderData();

  const [card, setCard] = useState(applications); //main visa data
  const [search, setSearch] = useState(""); // search term

  // data filter according to search term
  useEffect(() => {
    if (search.trim() === "") {
      setCard(applications); // if search filter empty, show previous data
    } else {
      fetch(
        `https://assignment-10-server-two-sand.vercel.app/apply?searchPrams=${search}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCard(data); // search result set in the state
        })
        .catch((error) => {
          console.error("Error fetching search data:", error);
          toast.error("Failed to fetch search results.");
        });
    }
  }, [search, applications]); // effect will run if search data change

  // function of visa cancellation
  const handleCancel = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visa?"
    );
    if (confirmDelete) {
      fetch(`https://assignment-10-server-two-sand.vercel.app/apply/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Visa deleted successfully!");
            setCard(card.filter((v) => v._id !== id)); // ডিলিট হওয়া ভিসা ফিল্টার করা।
          }
        });
    }
  };

  return (
    <div className="my-20 w-10/12 mx-auto font-font">
      <h1 className="text-3xl font-bold text-center mb-10">
        My Visa Applications
      </h1>

      {/* search input */}
      <div className="mb-9">
        <input
          type="text"
          placeholder="Search Your Country Name"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/** show filtered data */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {card.map((app) => (
          <div key={app._id} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <img
                src={app.photo}
                alt={app.name}
                className="w-full h-40 object-cover rounded-md border border-dashed"
              />
              <h2 className="text-xl font-bold mt-4 text-gray-800">
                {app.name}
              </h2>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>
                Visa Type: <span className="font-medium">{app.visaType}</span>
              </p>
              <p>
                Processing Time:{" "}
                <span className="font-medium">{app.time} days</span>
              </p>
              <p>
                Fee: <span className="font-medium">{app.free}</span>
              </p>
              <p>
                Validity:{" "}
                <span className="font-medium">{app.validity} year(s)</span>
              </p>
              <p>
                Application Method:{" "}
                <span className="font-medium">{app.applicationMethod}</span>
              </p>
              <p>
                Applied Date:{" "}
                <span className="font-medium">{app.appliedDate}</span>
              </p>
              <p>
                Applicant's Name:{" "}
                <span className="font-medium">
                  {app.firstName} {app.lastName}
                </span>
              </p>
              <p>
                Email: <span className="font-medium">{app.email}</span>
              </p>
            </div>

            <button
              onClick={() => handleCancel(app._id)}
              className="mt-6 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Application;
