import React from "react";
import bannerImage1 from "../assets/banner-img-1.jpg";
import bannerImage2 from "../assets/banner-img-2.jpg";
const Hero = () => {
  return (
    <div className="w-11/12 mx-auto rounded-md border-[3px] border-transparent bg-gradient-to-bl from-transparent to-white p-[1px] font-plus">
      <div className="w-full h-full rounded-md bg-gradient-to-b from-white/0 to-white">
        <div className="text-center px-4 pt-4">
          <h1 className="text-4xl font-bold">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <p className="md:w-2/3 mx-auto pt-6 text-gray-700">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>

          <form className="flex flex-col gap-4 md:flex-row justify-center pt-6 items-center md:px-24">
            <input
              className="bg-white border border-gray-300 w-2/3 h-12 px-4 focus:outline-none focus:shadow-outline md:mr-2 md:mb-0 rounded-2xl"
              type="text"
              placeholder="Search any doctor..."
            />
            <button className="relative inline-block text-lg group cursor-pointer">
              <a className="btn bg-[#176AE5] rounded-2xl text-white tracking-wider font-light">
                Search Now
              </a>
            </button>
          </form>
        </div>
        <div className="w-11/12 grid grid-cols-1 gap-2 md:grid-cols-2 mx-auto py-8 justify-center">
          <img
            className="rounded-3xl mx-auto"
            src={bannerImage1}
            alt="banner-image-left"
            width={600}
          />
          <img
            className="rounded-3xl mx-auto"
            src={bannerImage2}
            alt="banner-image-right"
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
