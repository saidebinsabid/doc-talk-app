import React from "react";
import { useLoaderData } from "react-router";
import BlogsContainer from "../Components/BlogsContainer";
const Blogs = () => {
  const questionsData = useLoaderData();
  return (
    <div>
      <BlogsContainer questionsData={questionsData}></BlogsContainer>
    </div>
  );
};

export default Blogs;
