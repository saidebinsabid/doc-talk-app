import React, { useEffect, useState } from "react";
import DoctorCart from "./DoctorCart";

const DoctorContainer = ({ data }) => {
  const [displayDoctorCart, setDisplayDoctorCart] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  useEffect(() => {
    if (viewAll) {
      setDisplayDoctorCart(data);
    } else {
      setDisplayDoctorCart(data.slice(0, 6));
    }
  }, [data, viewAll]);
  return (
    <div className="w-11/12 mx-auto py-12 font-plus">
      <div className="text-center py-6">
        <h1 className="text-4xl font-black">Our Best Doctors</h1>
        <p className="w-2/3 mx-auto pt-6 text-gray-700">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {displayDoctorCart.map((data) => (
          <DoctorCart key={data.id} data={data}></DoctorCart>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setViewAll((prv) => !prv);
            if (viewAll) window.scrollTo(0, 800);
          }}
          className="btn bg-[#176AE5] rounded-2xl text-white tracking-wider font-black"
        >
          {viewAll ? "View Less Doctors" : " View All Doctors"}
        </button>
      </div>
    </div>
  );
};

export default DoctorContainer;
