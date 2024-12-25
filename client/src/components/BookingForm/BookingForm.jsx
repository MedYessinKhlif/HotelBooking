import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineUser, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

export default function BookingForm() {
  const [idInfo, setIdInfo] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [address, setAddress] = useState("");
  const [roomType, setRoomType] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateIn, setDateIn] = useState("");
  const [dateOut, setDateOut] = useState("");
  const [nightsSpent, setNightsSpent] = useState(0);
  const [amountToPay, setAmountToPay] = useState(0);
  const [toastMessage, setToastMessage] = useState({ message: "", type: "" });

  const roomPrices = {
    S1: 100,
    S2: 120,
    D1: 150,
    D2: 180,
    E1: 200,
    E2: 250,
    F3: 300,
    F4: 350,
  };

  useEffect(() => {
    if (dateIn && dateOut) {
      const diffInTime =
        new Date(dateOut).getTime() - new Date(dateIn).getTime();
      const diffInDays = diffInTime / (1000 * 3600 * 24);

      if (diffInDays >= 0) {
        setNightsSpent(diffInDays);
        setAmountToPay(diffInDays * (roomPrices[roomType] || 0));
      } else {
        setNightsSpent(0);
        setAmountToPay(0);
      }
    }
  }, [dateIn, dateOut, roomType]);

  const resetForm = () => {
    setIdInfo("");
    setFullName("");
    setContactInfo("");
    setAddress("");
    setRoomType("");
    setDateOfBirth("");
    setDateIn("");
    setDateOut("");
    setNightsSpent(0);
    setAmountToPay(0);
  };

  const validateForm = () => {
    if (
      !idInfo ||
      !fullName ||
      !contactInfo ||
      !address ||
      !roomType ||
      !dateOfBirth ||
      !dateIn ||
      !dateOut
    ) {
      setToastMessage({
        message: "Please make sure to fill in all the required fields.",
        type: "error",
      });
      return false;
    }

    // Check if contactInfo is a valid phone number (basic validation for digits only)
    const phonePattern = /^[0-9]{8}$/;

    if (!phonePattern.test(contactInfo)) {
      setToastMessage({
        message: "Please enter a valid phone number.",
        type: "error",
      });
      return false;
    }

    // Check if dateOfBirth is not in the future
    if (new Date(dateOfBirth) > new Date()) {
      setToastMessage({
        message: "Date of birth cannot be in the future.",
        type: "error",
      });
      return false;
    }

    // Check if roomType is valid
    const validRoomTypes = Object.keys(roomPrices);
    if (!validRoomTypes.includes(roomType)) {
      setToastMessage({
        message: "Please select a valid room type.",
        type: "error",
      });
      return false;
    }

    // Check if dateOut is after dateIn
    if (new Date(dateOut) < new Date(dateIn)) {
      setToastMessage({
        message: "Date out cannot be earlier than Date in.",
        type: "error",
      });
      return false;
    }

    return true;
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    try {
      await axios.post("http://localhost:8080/save", {
        idInfo,
        fullName,
        contactInfo,
        address,
        roomType,
        dateOfBirth,
        dateIn,
        dateOut,
        nightsSpent,
        amountToPay,
      });
      setToastMessage({
        message: "User Registration Successful",
        type: "success",
      });
      resetForm();
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      setToastMessage({ message: "User Registration Failed", type: "error" });
    }
  }

  useEffect(() => {
    if (toastMessage.message) {
      const timer = setTimeout(() => {
        setToastMessage({ message: "", type: "" });
      }, 5000); // Toast disappears after 5 seconds
      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [toastMessage]);

  return (
    <>
      <div id="BookingForm" className="max-w-3xl mx-auto p-4 rounded-lg">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center">
            Book an Accommodation
          </h1>
          <p className="text-sm text-center text-gray-600 mb-10">
            Fill in the Information Below
          </p>

          <div className="grid grid-cols-2 gap-4 m-2">
            <div>
              <label
                htmlFor="idInfo"
                className="block text-sm font-medium text-gray-700"
              >
                ID Info
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <AiOutlineUser className="ml-2 text-gray-500" />
                <input
                  type="text"
                  id="idInfo"
                  name="idInfo"
                  placeholder="ID Info"
                  value={idInfo}
                  onChange={(event) => setIdInfo(event.target.value)}
                  className="w-full p-2 pl-8 border-none rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <AiOutlineUser className="ml-2 text-gray-500" />
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="w-full p-2 pl-8 border-none rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 m-2">
            <div className="flex flex-col">
              <label
                htmlFor="contactInfo"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <AiOutlinePhone className="ml-2 text-gray-500" />
                <input
                  type="text"
                  id="contactInfo"
                  name="contactInfo"
                  placeholder="Phone"
                  value={contactInfo}
                  onChange={(event) => setContactInfo(event.target.value)}
                  className="w-80 p-2 pl-8 border-none rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <AiOutlineHome className="ml-2 text-gray-500" />
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="City"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                  className="w-80 p-2 pl-8 border-none rounded-md focus:ring-2 focus:ring-indigo-600"
                />
              </div>
            </div>
          </div>

          {/* Room Type */}
          <div className="flex flex-col m-2">
            <label
              htmlFor="roomType"
              className="block text-sm font-medium text-gray-700"
            >
              Room Type (e.g., S1, S2, E1, E2, D1, D2, F3, F4)
            </label>
            <input
              type="text"
              id="roomType"
              name="roomType"
              placeholder="Room Type"
              value={roomType}
              onChange={(event) => setRoomType(event.target.value)}
              className="w-80 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Date of Birth */}
          <div className="flex flex-col m-2">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(event) => setDateOfBirth(event.target.value)}
              className="w-80 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Date In */}
          <div className="flex flex-col m-2">
            <label
              htmlFor="dateIn"
              className="block text-sm font-medium text-gray-700"
            >
              Date In
            </label>
            <input
              type="date"
              id="dateIn"
              name="dateIn"
              value={dateIn}
              onChange={(event) => setDateIn(event.target.value)}
              className="w-80 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Date Out */}
          <div className="flex flex-col m-2">
            <label
              htmlFor="dateOut"
              className="block text-sm font-medium text-gray-700"
            >
              Date Out
            </label>
            <input
              type="date"
              id="dateOut"
              name="dateOut"
              value={dateOut}
              onChange={(event) => setDateOut(event.target.value)}
              className="w-80 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          {/* Nights and Amount */}
          <div className="mx-2 my-4 text-gray-600">
            <p>Nights Spent: {nightsSpent}</p>
            <p>Amount to Pay: ${amountToPay}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="submit"
              className="w-40 py-2 bg-indigo-900 text-white font-semibold rounded-md hover:bg-indigo-950 focus:outline-none focus:ring-2 focus:ring-indigo-900"
            >
              Book
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="w-40 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Reset
            </button>
          </div>
        </form>

        {/* Toast Message */}
        {toastMessage.message && (
          <div
            className={`fixed top-0 right-0 m-8 p-3 rounded-md text-white ${
              toastMessage.type === "success" ? "bg-green-900" : "bg-red-900"
            }`}
          >
            {toastMessage.message}
          </div>
        )}
      </div>
    </>
  );
}
