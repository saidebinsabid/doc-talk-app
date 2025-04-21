import React from "react";
import BlogsCard from "./BlogsCard";

const BlogsContainer = ({ questionsData }) => {
  return (
    <div className="flex flex-col gap-4 px-4 py-8 w-11/12 mx-auto font-plus">
      {questionsData.map((question) => (
        <BlogsCard key={question.id} questions={question}></BlogsCard>
      ))}
    </div>
  );
};

export default BlogsContainer;
