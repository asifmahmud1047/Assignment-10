import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authprovider/Authprovider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addedvisa = () => {
  const { user } = useContext(AuthContext); // Logged-in user information
  const [visa, setVisa] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVisa, setSelectedVisa] = useState(null); // Track the selected visa for update

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://assignment-10-server-two-sand.vercel.app/my-visas?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => {
          setVisa(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching visas:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visa?"
    );
    if (confirmDelete) {
      fetch(`https://assignment-10-server-two-sand.vercel.app/visa/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Visa deleted successfully!");
            setVisa(visa.filter((v) => v._id !== id));
          }
        });
    }
  };

  const handleUpdate = (id) => {
    const selected = visa.find((v) => v._id === id);
    setSelectedVisa(selected);
    document.getElementById("my_modal_1").showModal();
  };

  const handleSubmitUpdate = (event, id) => {
    event.preventDefault();
    const name = event.target.name.value;
    const visaType = event.target.visaType.value;
    const time = event.target.time.value;
    const fee = event.target.fee.value;
    const validity = event.target.validity.value;
    const applicationMethod = event.target.applicationMethod.value;
    const age = event.target.age.value;
    const description = event.target.description.value;

    const Updatedata = {
      name,
      description,
      age,
      applicationMethod,
      validity,
      fee,
      time,
      visaType,
    };

    fetch(`https://assignment-10-server-two-sand.vercel.app/visa/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Updatedata),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Visa updated successfully!");
          document.getElementById("my_modal_1").removeAttribute("open");
          setVisa((prev) =>
            prev.map((item) =>
              item._id === id ? { ...item, ...Updatedata } : item
            )
          );
        }
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Added Visas</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visa.map((item) => (
            <div
              key={item._id}
              className="border p-4 rounded shadow hover:shadow-lg transition"
            >
              <img
                src={item.photo}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-2">{item.name}</h3>
              <p>Visa Type: {item.visaType}</p>
              <p>Processing Time: {item.time} days</p>
              <p>Fee: ${item.fee}</p>
              <p>Validity: {item.validity} years</p>
              <p>Application Method: {item.applicationMethod}</p>
              <p>Age: {item.age}</p>
              <p>Description: {item.description}</p>

              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleUpdate(item._id)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
              </div>

              {/* Modal for updating visa */}
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <h3 className="text-xl font-semibold mb-4">Update Visa</h3>
                  <form
                    onSubmit={(event) =>
                      handleSubmitUpdate(event, selectedVisa?._id)
                    }
                  >
                    <div className="mb-4">
                      <label htmlFor="name" className="block">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        defaultValue={selectedVisa?.name}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="visaType" className="block">
                        Visa Type
                      </label>
                      <input
                        type="text"
                        name="visaType"
                        defaultValue={selectedVisa?.visaType}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="time" className="block">
                        Processing Time (days)
                      </label>
                      <input
                        type="number"
                        name="time"
                        defaultValue={selectedVisa?.time}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="fee" className="block">
                        Fee
                      </label>
                      <input
                        type="number"
                        name="fee"
                        defaultValue={selectedVisa?.fee}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="validity" className="block">
                        Validity (years)
                      </label>
                      <input
                        type="number"
                        name="validity"
                        defaultValue={selectedVisa?.validity}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="applicationMethod" className="block">
                        Application Method
                      </label>
                      <input
                        type="text"
                        name="applicationMethod"
                        defaultValue={selectedVisa?.applicationMethod}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="age" className="block">
                        Age
                      </label>
                      <input
                        type="number"
                        name="age"
                        defaultValue={selectedVisa?.age}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="description" className="block">
                        Description
                      </label>
                      <textarea
                        name="description"
                        defaultValue={selectedVisa?.description}
                        className="textarea textarea-bordered w-full max-w-xs"
                        rows="4"
                      ></textarea>
                    </div>

                    <div className="modal-action">
                      <button className="btn" type="submit">
                        Update Data
                      </button>
                      <button
                        className="btn"
                        type="button"
                        onClick={() =>
                          document.getElementById("my_modal_1").close()
                        }
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>
              </dialog>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Addedvisa;
