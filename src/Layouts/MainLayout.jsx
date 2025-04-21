import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigation } from "react-router";

const MainLayout = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  // Detect route change
  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [navigation.state]);
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-132px)] bg-gray-200">
        {/* Show the loader only when navigation state is loading */}
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center z-50 bg-white bg-opacity-75">
            {/* DaisyUI Loader */}
            <span className="loading loading-bars loading-xl"></span>
          </div>
        )}

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
