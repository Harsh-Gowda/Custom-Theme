import React from 'react';
import './Home.css';
import ledImage from '../assets/led.jpg';
import Hero from './Hero';
import cha from '../assets/cha.jpg';
import led from '../assets/LED Wall Light (23).jpg';
export default function Home() {
  return (
    
    <>
     
      <Hero />
      
      <section className="features-section flex flex-col">
        <div className="product-container flex flex-row items-center gap-20  mb-20">
          <div className="product-content">
            <h1>Introducing the Magnific Fan</h1>
          </div>  
          <div className="product-description">
            <p className='text-2xl'>Our fans are designed to provide superior airflow while <br></br>adding a touch of elegance to your space.</p>
          </div>
        </div>

       < div className="features-image-container flex flex-row gap-4 ">
          <div className="features-image-wrapper ">
            <img src={cha} alt="Magnific Fan" className="features-image" />
            <h1>Feature 1</h1>
          </div>
          <div className="features-image-wrapper">
            <img src={cha} alt="Magnific Fan" className="features-image" />
            <h1>Feature 2</h1>  
          
          </div>
          <div className="features-image-wrapper">
            <img src={cha} alt="Magnific Fan" className="features-image" />
            <h1>Feature 3</h1>
          </div>
          <div className="features-image-wrapper">
            <img src={cha} alt="Magnific Fan" className="features-image" />
            <h1>Feature 4</h1>
          </div>
         
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
