import React from "react";
import { useLoaderData, useParams } from "react-router";
import DoctorDetailsContainer from "../Components/DoctorDetailsContainer";
const Details = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === parseInt(id));
  // console.log(singleDoctor);
  return (
    <div className="flex flex-col gap-6 px-4 py-8 w-11/12 mx-auto font-plus">
      <div className="text-center bg-white rounded-2xl p-6">
        <h1 className="text-3xl font-black">Doctor’s Profile Details</h1>
        <p className="md:w-2/3 text-sm mx-auto pt-6 text-gray-700">
          On this page, you can view detailed information about doctors in a
          larger scale layout. You can also see each doctor’s available dates
          for appointments. If you want, you can book a doctor and the
          appointment will be added to your booking section.
        </p>
      </div>
      <DoctorDetailsContainer
        singleDoctor={singleDoctor}
      ></DoctorDetailsContainer>
    </div>
  );
};

export default Details;
