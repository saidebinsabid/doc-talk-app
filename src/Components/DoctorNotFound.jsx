import React from "react";
import { Link, useParams } from "react-router-dom";
import { MdReportGmailerrorred } from "react-icons/md";

const DoctorNotFound = () => {
  const id = useParams();
  const doctorId = id && typeof id === "object" ? id.id : id || "unknown";
  return (
    <div className="w-11/12 mx-auto py-12 font-plus">
      <div className="flex flex-col items-center bg-white rounded-2xl p-6 space-y-6">
        <h1 className="text-4xl font-black">No Doctor Found</h1>
        <p className="text-sm mx-auto text-gray-700">
          No Doctor Found with this registration No-
        </p>
        <div className="flex items-center justify-center gap-2 text-xl text-gray-600">
          <MdReportGmailerrorred size={22} />
          <p>ID - {doctorId}</p>
        </div>
        <Link
          to="/"
          className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-xl"
        >
          View All Doctors
        </Link>
      </div>
    </div>
  );
};

export default DoctorNotFound;
