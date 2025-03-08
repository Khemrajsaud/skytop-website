import React from "react";
import langing from "../assets/Image/landing page.jpg";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="flex items-center justify-between mx-12 gap-15 my-6">
      <div className="mb-6 mt-8">
        <h1 className="text-4xl text-blue-800 font-bold py-5">Welcome to Skytop Academy</h1>
        <h2 className="text-3xl text-black font-bold pb-4">Professionals since 2081</h2>
        <p className="items-center">At Skytop Academy, we are committed to empowering individuals and students with the skills and knowledge they need to succeed in today’s digital world. Our mission is to provide high-quality education and training in a variety of fields, tailored to meet the diverse needs of our learners.</p>
       
        <Link className="bg-blue-700 px-6 py-3 rounded-md mt-9 mb-4" to='/course'>Course</Link>


      </div>
    <div className="">
      <img className=" rounded-md" src={langing} alt="" />
    </div>
    </div>
  );
};

export default LandingPage;
