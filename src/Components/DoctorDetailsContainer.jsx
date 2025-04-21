import React from "react";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { BiErrorCircle } from "react-icons/bi";

const DoctorDetailsContainer = ({ singleDoctor, handleBookings }) => {
  const {
    name,
    education,
    speciality_details,
    consultation_fee,
    registration_number,
    image,
    work_at,
  } = singleDoctor || {};
  return (
    <>
      <div className="p-6 bg-white rounded-2xl flex flex-col gap-4 md:flex-row">
        <img src={image} alt="" className="rounded-2xl" />
        <div className="flex-1 space-y-2">
          <h1 className="font-black text-2xl">{name}</h1>
          <p className="text-gray-500">{education}</p>
          <p className="text-gray-500">{speciality_details}</p>
          <p className="text-gray-500 text-sm">Working at</p>
          <p className="font-black">{work_at}</p>
          <div className="border-1 border-gray-300 border-dashed"></div>
          <div className="flex gap-2 items-center">
            <PiTrademarkRegisteredLight size={22} />
            <p className="text-gray-600 text-sm">
              Reg No: {registration_number}
            </p>
          </div>
          <div className="border-1 border-gray-300 border-dashed"></div>
          {/* Available weekend days show div */}
          <div className="mt-4 flex flex-wrap">
            <p className="text-sm font-semibold mb-2">Available Days:</p>
            <div className="flex flex-wrap gap-2 items-center ml-2">
              {singleDoctor?.availability?.map((day, index) => (
                <span
                  key={index}
                  className="bg-[#FFA0001A] text-[#FFA000] px-4 py-0.5 rounded-full text-sm"
                >
                  {day}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm">
            <span className="font-black">Consultation Fee: </span>
            <span className="text-[#176AE5] font-black ml-3">
              Taka: {consultation_fee}
            </span>{" "}
            <span className="text-gray-400">(incl. Vat)</span>{" "}
            <span className="text-[#176AE5]">Per consultation</span>
          </p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 space-y-4">
        <h1 className="text-center font-black text-lg">Book an Appointment</h1>
        <div className="border-1 border-gray-300 border-dashed"></div>
        <div className="flex justify-between">
          <p className="font-black">Availability</p>
          <span className="bg-[#09982F1A] text-[#09982F] px-4 py-0.5 rounded-full text-sm">
            Doctor Available Today
          </span>
        </div>
        <div className="border-1 border-gray-300"></div>
        <div className="flex justify-center">
          <span className="bg-[#FFA0001A] text-[#FFA000] px-4 py-1 rounded-full text-sm flex items-center gap-2">
            <BiErrorCircle />
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </span>
        </div>
        <div className="card-actions justify-center mt-2">
          <button
            onClick={handleBookings}
            className="btn border-2 border-blue-700 bg-blue-700 hover:bg-blue-800 text-white  w-5/6 rounded-4xl tracking-wider font-black"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </>
  );
};

export default DoctorDetailsContainer;
