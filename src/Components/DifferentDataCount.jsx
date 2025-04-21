import React from "react";
import DifferentDataCountCard from "./DifferentDataCountCard";

const DifferentDataCount = () => {
  return (
    <div className="w-11/12 mx-auto py-12 font-plus">
      <div className="text-center py-6">
        <h1 className="text-4xl font-black">
          We Provide Best Medical Services
        </h1>
        <p className="w-2/3 mx-auto pt-6 text-gray-700">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <DifferentDataCountCard></DifferentDataCountCard>
      </div>
    </div>
  );
};

export default DifferentDataCount;
