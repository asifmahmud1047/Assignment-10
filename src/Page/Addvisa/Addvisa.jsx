import React, { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Authcontext } from "../../Authprovider/Authprovider";

const Addvisa = () => {
  const { user } = useContext(Authcontext);
  const email = user.email;

  const handleSubmit = (event) => {
    event.preventDefault();

    // Input Values
    const photo = event.target.countryImage.value;
    const name = event.target.countryName.value;
    const visaType = event.target.visaType.value;
    const time = event.target.processingTime.value;

    // Checkbox Values
    const requiredDocuments = Array.from(
      event.target.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.value);

    const description = event.target.description.value;
    const age = event.target.ageRestriction.value;
    const fee = event.target.fee.value;
    const validity = event.target.validity.value;
    const applicationMethod = event.target.applicationMethod.value;

    // Data Object
    const data = {
      photo,
      name,
      visaType,
      time,
      requiredDocuments,
      description,
      age,
      fee,
      validity,
      applicationMethod,
      email,
    };


    fetch("https://assignment-10-server-two-sand.vercel.app/visa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        event.target.reset();
        if (result.insertedId) {
          return toast.success("Visa Added Succussfull");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="my-32">
      <div className="add-visa-form bg-gray-100 p-10 rounded-lg shadow-md max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Add Visa</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-medium">Country Image URL:</label>
            <input
              type="text"
              name="countryImage"
              className="w-full p-2 border rounded"
              placeholder="Enter Image URL"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Country Name:</label>
            <input
              type="text"
              name="countryName"
              className="w-full p-2 border rounded"
              placeholder="Enter Country Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Visa Type:</label>
            <select
              name="visaType"
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Visa Type</option>
              <option value="TouristVisa">Tourist Visa</option>
              <option value="StudentVisa">Student Visa</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block font-medium">Processing Time:</label>
            <input
              type="text"
              name="processingTime"
              className="w-full p-2 border rounded"
              placeholder="Enter Processing Time"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block font-medium">Required Documents:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Validpassport"
                />{" "}
                Valid passport
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Visaapplicationform"
                />{" "}
                Visa application form
              </label>
              <br />
              <label>
                <input
                  type="checkbox"
                  name="requiredDocuments"
                  value="Recentpassportsizedphotograph"
                />{" "}
                Recent passport-sized photograph
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block font-medium">Description:</label>
            <textarea
              name="description"
              className="w-full p-2 border rounded"
              placeholder="Enter Description"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block font-medium">Age Restriction:</label>
            <input
              type="number"
              name="ageRestriction"
              className="w-full p-2 border rounded"
              placeholder="Enter Age Restriction"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Fee:</label>
            <input
              type="number"
              name="fee"
              className="w-full p-2 border rounded"
              placeholder="Enter Fee"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Validity:</label>
            <input
              type="text"
              name="validity"
              className="w-full p-2 border rounded"
              placeholder="Enter Validity"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Application Method:</label>
            <input
              type="text"
              name="applicationMethod"
              className="w-full p-2 border rounded"
              placeholder="Enter Application Method"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Visa
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addvisa;
