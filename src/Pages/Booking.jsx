import React, { useEffect, useState } from "react";
import { getBookings, removeBooking } from "../Utils";
import BookingDoctorCart from "../Components/BookingDoctorCart";
import EmptyState from "../Components/EmptyState";
import toast from "react-hot-toast";
import BookingChart from "../Components/BookingChart";

const Booking = () => {
  const [displayBookings, setDisplayBookings] = useState([]);
  useEffect(() => {
    const savedBooking = getBookings();
    setDisplayBookings(savedBooking);
  }, []);

  useEffect(() => {
    const message = sessionStorage.getItem("booking_success");
    if (message) {
      toast.success(message);
      sessionStorage.removeItem("booking_success");
    }
  }, []);
  const handleDeleted = (id) => {
    removeBooking(id);
    setDisplayBookings(getBookings());
  };
  if (displayBookings.length < 1) return <EmptyState></EmptyState>;
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-6 py-12 font-plus">
      <BookingChart data={displayBookings}></BookingChart>
      <div className="text-center">
        <h1 className="text-4xl font-black">My Today Appointments</h1>
        <p className="w-2/3 mx-auto pt-6 text-gray-700">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.
        </p>
      </div>
      {displayBookings.map((doctor) => (
        <BookingDoctorCart
          key={doctor.id}
          doctor={doctor}
          handleDeleted={handleDeleted}
        ></BookingDoctorCart>
      ))}
    </div>
  );
};

export default Booking;
