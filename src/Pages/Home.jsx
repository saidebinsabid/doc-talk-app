import React, { useEffect } from 'react';
import Hero from '../Components/Hero';
import DoctorContainer from '../Components/DoctorContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Hero></Hero>
            <DoctorContainer data={data}></DoctorContainer>
        </div>
    );
};

export default Home;