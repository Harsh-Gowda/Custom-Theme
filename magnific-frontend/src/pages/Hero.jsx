import "./hero.css";
import React, { useState } from "react";
import whiteLight from "../assets/white.jpg";
import pinkLight from "../assets/pink.jpg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: whiteLight,
      text: "A dialogue between light, material and form.",
      link: "Explore the Flora Collection"
    },

    {
      image: pinkLight,
      text: "Designed to transform modern spaces.",
      link: "Explore Collection"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (

    <section className="hero">

      <img 
        src={slides[currentSlide].image}
        className="hero-image"
      />


      <div className="hero-content">

        <p>
          {slides[currentSlide].text}
        </p>


        <a href="#">
          {slides[currentSlide].link}
        </a>


      </div>

      <button className="hero-arrow hero-arrow-prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="hero-arrow hero-arrow-next" onClick={nextSlide}>
        ❯
      </button>


    </section>

  );

}


