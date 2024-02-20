import { useState } from "react";
import Button from "../layouts/Button";

const Contacts = ({ closeForm }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!firstName || !lastName || !email || !phoneNumber) return;

    const id = crypto.randomUUID();
    const newAppointment = {
      id,
      firstName,
      lastName,
      email,
      phoneNumber,
    };

    console.log(newAppointment);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className=" w-80 md:w-96 space-y-5 bg-brightColor p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-black">
            Book Now
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-backgroundColor rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
            />
          </div>
          <div className=" flex gap-6">
            <Button
              className="middle none center rounded-lg bg-DarkColor py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-DarkColor-500/20 transition-all hover:shadow-lg hover:DarkColor-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              Book Appointment
            </Button>
            <div>
              <Button
                className="middle none center rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 !important transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                onClick={closeForm}
              >
                Close
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
