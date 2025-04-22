import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigation } from "react-router";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  const navigation = useNavigation();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const hideFooter = location.pathname === "/error"; 
  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow bg-gray-200 relative">
        <Toaster position="top-right" />
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center z-50 bg-white bg-opacity-75">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}
        <Outlet />
      </div>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
