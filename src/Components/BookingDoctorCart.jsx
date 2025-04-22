import React from "react";

const BookingDoctorCart = ({ doctor, handleDeleted }) => {
  const { id, name, education, speciality_details, consultation_fee } =
    doctor || {};

  return (
    <div className="flex flex-col">
      <div className="bg-white rounded-2xl p-6 space-y-4">
        <div className="flex flex-wrap justify-between">
          <div className="space-y-2">
            <p className="font-black">{name}</p>
            <p className="text-gray-500 text-sm">
              {education} - {speciality_details}
            </p>
          </div>
          <span className="text-sm text-gray-500">
            Appointment Fee: {consultation_fee} Taka + Vat
          </span>
        </div>
        <div className="border-1 border-dashed border-gray-300"></div>
        <div className="card-actions justify-center mt-2">
          <button
            onClick={() => handleDeleted(id)}
            className="btn border-2 border-red-500 bg-white hover:bg-red-500 hover:text-white text-red-500  w-5/6 rounded-4xl tracking-wider font-black"
          >
            Cancel Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingDoctorCart;
