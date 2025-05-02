import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";

const Details = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const {
    photo,
    name,
    validity,
    visaType,
    age,
    applicationMethod,
    description,
    fee,
    time,
    requiredDocuments,
  } = data;

  const handleApplyVisa = () => {};
  return (
    <div>
      <Header></Header>
      <div>
        <h1 className="md:text-4xl text-2xl font-bold text-center my-11">
          {" "}
          Visa Details{" "}
        </h1>

        <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-full md:w-1/3">
              <img
                src={photo}
                alt={`Flag of ${name}`}
                className="w-full h-48 object-cover rounded-md border-2 border-dashed p-2"
              />
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Apply for Visa</h3>
                <form className="py-4 space-y-4" onSubmit={handleApplyVisa}>
                  {/* Email Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={user?.email || ""}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>

                  {/* First Name Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Last Name Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      className="input input-bordered w-full"
                      required
                    />
                  </div>

                  {/* Applied Date Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Applied Date</span>
                    </label>
                    <input
                      type="text"
                      name="appliedDate"
                      value={new Date().toLocaleDateString()}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>

                  {/* Fee Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Visa Fee</span>
                    </label>
                    <input
                      type="text"
                      name="fee"
                      value={`$${fee || 0}`}
                      className="input input-bordered w-full"
                      readOnly
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="modal-action">
                    <button type="submit" className="btn btn-primary">
                      Apply
                    </button>
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </form>
              </div>
            </dialog>

            <div className="w-full md:w-2/3">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{name}</h2>
              <p className="text-sm text-gray-600 italic mb-4">{description}</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="font-semibold">Visa Type:</span> {visaType}
                </li>
                <li>
                  <span className="font-semibold">Validity:</span> {validity}{" "}
                  years
                </li>
                <li>
                  <span className="font-semibold">Age Limit:</span> {age} years
                </li>
                <li>
                  <span className="font-semibold">Processing Time:</span> {time}{" "}
                  days
                </li>
                <li>
                  <span className="font-semibold">Application Fee:</span> ${fee}
                </li>
                <li>
                  <span className="font-semibold">Application Method:</span>{" "}
                  {applicationMethod}
                </li>
                <li>
                  <span className="font-semibold">Required Documents:</span>
                  <ul className="list-disc list-inside ml-4">
                    {requiredDocuments.map((doc, index) => (
                      <li key={index}>{doc}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              className="btn btn-primary px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
