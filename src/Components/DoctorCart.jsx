import React from "react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { Link } from "react-router";

const DoctorCart = ({ data }) => {
  const {
    name,
    education,
    speciality,
    experience,
    registration_number,
    image,
    id,
  } = data || {};
  return (
    <div className="card bg-base-100 shadow hover:shadow-xl font-plus">
      <figure className="aspect-[3/2] bg-white p-6 flex items-center justify-center">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={image}
          alt="Doctor_Image"
        />
      </figure>
      <div className="px-6 flex gap-3">
        <p className="bg-[#09982F1A] px-4 py-1 rounded-4xl text-[#09982F] text-sm">
          Available
        </p>
        <p className="bg-[#176AE51A] px-4 py-1 rounded-4xl text-[#176AE5] text-sm">
          {experience}
        </p>
      </div>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-gray-600">
          {education}- {speciality}
        </p>
        <div className="border border-gray-300 border-dashed"></div>
        <div className="flex gap-2 items-center">
          <PiTrademarkRegisteredLight size={22} />
          <p className="text-gray-600 text-base">
            Reg No: {registration_number}
          </p>
        </div>
        <div className="card-actions justify-center mt-2">
          <Link to={`/details/${id}`} className="btn border-2 border-blue-700 bg-white hover:bg-blue-700 hover:text-white  w-5/6 rounded-4xl">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCart;
