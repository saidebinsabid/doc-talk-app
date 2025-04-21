import React from "react";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
const BlogsCard = ({ questions }) => {
  const { question, answer, added } = questions;
  return (
    <div className="bg-white rounded-xl shadow p-6 hover:shadow-xl">
      <h2 className="text-xl font-bold text-black mt-2 pb-4">{question}</h2>
      <div className="border-1 border-gray-300 border-dashed"></div>
      <p className="text-blue-500 pt-4">Answer:</p>
      <p className="text-gray-700 mt-2 pb-4">{answer}</p>
      <div className="border-1 border-gray-300 border-dashed"></div>
      <div className="text-gray-500 mt-4 flex gap-2">
        <HiOutlineCalendarDateRange size={22} />
        <p>Added at {added}</p>
      </div>
    </div>
  );
};

export default BlogsCard;
