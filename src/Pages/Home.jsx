import React from 'react';
import Hero from '../Components/Hero';
import DoctorContainer from '../Components/DoctorContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Hero></Hero>
            <DoctorContainer data={data}></DoctorContainer>
        </div>
    );
};

export default Home;