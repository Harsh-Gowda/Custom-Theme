import React from 'react';
import './Home.css';
import ledImage from '../assets/led.jpg';
import Hero from './Hero';

export default function Home() {
  return (
    
    <>
     
      <Hero />
      
      <section className="features-section flex flex-row">



        <div className="container-features  px-4 flex flex-col  justify-center">
          <h3 className="text-1xl font-light  mb-4">Key Features</h3>
          <h2 className="text-3xl font-semibold mb-8">Why Choose Magnific Fans?</h2>
          <p className="text-lg  mb-8">Our fans are designed to provide superior airflow while adding a touch of elegance to your space. With advanced technology and sleek designs, Magnific Fans are the perfect choice for any room.</p>
          <button className="bg-blue-500 text-white px-1 py-3 rounded-2xl w-40">Learn More</button>

        </div>
        <div className="container-features">
          <img src={ledImage} alt="Feature Image" className="w-full h-auto rounded-4xl shadow-lg" />
        </div>
     
      </section>
         <div className="container-features  px-4 flex flex-col  justify-center">
              <div className="flex flex-row gap-4 mb-4">
                <h1>Feature 1</h1>
              </div>
              <div className="flex items-center gap-2">
                <h1>Feature 2</h1>
                </div>
              <div className="flex items-center gap-2">
                <h1>Feature 3</h1>
              </div>
                <div className="flex items-center gap-2">
                <h1>Feature 4</h1>
              </div>
        </div>
    </>
  );
}
