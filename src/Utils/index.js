import toast from "react-hot-toast";

export const getBookings = () => {
  const bookings = localStorage.getItem("bookings");
  if (bookings) return JSON.parse(bookings);
  return [];
};

export const addBookings = (doctor) => {
  const bookings = getBookings();
  const isExist = bookings.find((data) => data.id === doctor.id);
  if (isExist)
    return { status: "error", message: "This Doctor is already booked you!" };
  bookings.push(doctor);
  localStorage.setItem("bookings", JSON.stringify(bookings));
  return {
    status: "success",
    message: `Appointment scheduled for ${doctor.name}`,
  };
};

export const removeBooking = (id) => {
  const booking = getBookings();
  const remainingBooking = booking.filter((data) => data.id !== id);
  localStorage.setItem("bookings", JSON.stringify(remainingBooking));
  toast.error("Appointment Canceled");
};
