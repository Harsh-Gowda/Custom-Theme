import "./hero.css";
import React from "react";
import whiteLight from "../assets/white.jpg";
import pinkLight from "../assets/pink.jpg";

export default function Hero() {

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


  return (

    <section className="hero">

      <img 
        src={slides[0].image}
        className="hero-image"
      />


      <div className="hero-content">

        <p>
          {slides[0].text}
        </p>


        <a href="#">
          {slides[0].link}
        </a>


      </div>


    </section>

  );

}