import React from 'react';

const DoctorCart = ({data}) => {
    const {name, education, speciality, experience, registration_number, image}= data
    return (
        <div className="card bg-base-100 shadow-sm">
        <figure className="aspect-[3/2] bg-white p-4 flex items-center justify-center">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="Doctor_Image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      
    );
};

export default DoctorCart;