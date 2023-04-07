import React from 'react'
import { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Navigation from './Navigation';
import Header from './Header';
import Features from './Features';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Team from './Team';
import JsonData from "../data/data.json"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
      setLandingPageData(JsonData);
    }, []);
    
  
  return (
    <>
      <div >
      <Navigation/>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
  
      </div>
     
    </>
  );
};

export default Home;
