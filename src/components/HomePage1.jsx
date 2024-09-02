import React from 'react';
import { Link } from 'react-router-dom'; 
import '../Styles/HomePage1.css';
import aiImage from '../pics/path3.png';
import { IoIosLeaf } from "react-icons/io";
import { MdOnlinePrediction } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";




const NavBar = () => {
  return (
    <nav className="navbar">
      
      <div className="navbar-logo">
        <h1>Fine<span className="highlight">Cards</span></h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <Link to="/login">
      <button className="quote-button">Login</button>

      </Link>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <>
    <div className="flex flex-row justify-between mt-20 ">
    <div 
    className="flex justify-around mt-5"
    >
      <div className="hero-content">
        <h1 
        className="text-4xl font-semibold my-5"
        >Delivering Digital Services</h1>
        <h3
        className="text-gray-300"
        > 
<span className="highlight">"Your Next Card,</span>Just a Click Away: Discover Digital Elegance"</h3>
        <p
        className="text-xl font-semibold"
        >
        "Create stunning digital cards effortlessly for any occasion—weddings, parties, or business. Enjoy an eco-friendly choice all in one place."
        </p>
        <div className="hero-buttons">
          <button className="primary-button">See Cards</button>
          <a href='/create-account'>
          <button className="secondary-button">Create Account</button>

          </a>
        </div>
       
      </div>

      <div>
        <img 
        className="w-3/4 h-3/4 rounded-3xl"
        src={"https://img.freepik.com/free-vector/choosing-healthy-unhealthy-food-illustration_23-2148559305.jpg?t=st=1725267306~exp=1725270906~hmac=00cf971f3d5ca0bc8f42f4ea186f91180bfa518af3a6d657b582d6a482e8169b&w=2000"} alt="AI Illustration" />
      </div>
      </div>
    </div>
    </>
  );
};

const DEscriptionSection =()=>{
  return(
    <>
    <div
    className="flex flex-col my-9"
    >
    <div 
    className="flex flex-row justify-around"
    >
        <div
        className="w-1/4 text-gray-300 text-lg"
        >
      <IoIosLeaf
     className="text-gray-300 text-4xl"

      />
        <p 
        className="font-bold">Eco-Friendly Choice</p>
        Go green with digital cards—reduce paper waste and lower your carbon footprint while still making a big impression.
        </div>

        <div
        className="w-1/4 text-gray-300 text-lg"
        >
      <MdOnlinePrediction
className="text-gray-300 text-4xl"
      />
        <p 
        className="font-bold">Manage Everything Online</p>
        Get Access to Your Cars Online Anytime,Everywhere.
        </div>

        <div
        className="w-1/4 text-gray-300 text-lg"
        >
      <MdOutlineSettingsApplications
     className="text-gray-300 text-4xl"
      />
        <p 
        className="font-bold">Versatile Applications</p>
        Whether it's a wedding invitation, business card, party entry pass, or promotional flyer, our platform has a template for every need.
        </div>

    </div>

    <div 
    className="flex justify-center items-center"
    >
      <img 
      className="my-10 rounded-3xl"
        src={"https://www.shutterstock.com/image-photo/human-hand-holding-digital-identification-600nw-2166069807.jpg"}
        alt=""
      />
    </div>

    <div 
    className="flex flex-row justify-around"
    >
        <div
        className="w-1/4 text-gray-300 text-lg"
        >
        <p 
        className="font-bold">Accessible Anytime, Anywhere</p>
        Design, send, and manage your cards from any device. Perfect for busy professionals and on-the-go event planners.
        </div>

        <div
        className="w-1/4 text-gray-300 text-lg"
        >

        <p 
        className="font-bold">Secure and Private</p>
       Protect your information with advanced security features. Your data and card details are safe with us.
        </div>

        <div
        className="w-1/4 text-gray-300 text-lg"
        >
        <p 
        className="font-bold">Effortless Creation</p>
        Craft stunning digital cards in minutes with our easy-to-use design tools. No graphic design experience required!
        </div>
    </div>
</div>
    </>
  )
}











const HomePage = () => {
  return (
    <div className="home-page">
      <NavBar />
      <HeroSection />
      <DEscriptionSection/>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
