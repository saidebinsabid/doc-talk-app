import React from "react";
import { Link } from "react-router";

const EmptyState = () => {
  return (
    <div className="py-24 text-center w-11/12 mx-auto font-plus">
      <h1 className="text-4xl font-black">
        You Have Not Booked any appointment yet
      </h1>
      <p className="w-2/3 mx-auto pt-6 text-gray-700">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <Link
        to="/"
        className="btn bg-[#176AE5] text-white tracking-wider font-light mt-4"
      >
        Book An Appointment
      </Link>
    </div>
  );
};

export default EmptyState;
