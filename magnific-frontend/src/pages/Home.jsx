import React from 'react';
import './Home.css';
import ledImage from '../assets/led.jpg';

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Experience the Power of Magnific Fans</h1>
          <p>Discover the perfect blend of style and performance with our premium fans.</p>
          <a href="#" className="cta-btn">Shop Now</a>
        </div>        
      </section>
      <section className="features-section flex flex-row">
        <div className="container-features  px-4 flex flex-col ">
          <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
          <h2 className="text-3xl font-semibold mb-8">Why Choose Magnific Fans?</h2>
          <p className="text-lg text-center mb-12">Our fans are designed to provide superior airflow while adding a touch of elegance to your space. With advanced technology and sleek designs, Magnific Fans are the perfect choice for any room.</p>
          <button className="bg-blue-500 text-white px-1 py-2 rounded-3xl hover:bg-blue-600 transition duration-300">Learn More</button>

        </div>
        <div className="container-features">
          <img src={ledImage} alt="Feature Image" className="w-full h-auto rounded-4xl shadow-lg" />
        </div>
      </section>
    </>
  );
}
