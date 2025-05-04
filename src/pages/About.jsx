import React from "react";
import "../styles/About.scss";
import { aboutUsTitle, aboutUsSevices } from "../data/about";
import { InfoImageCard } from "../components/InfoImageCard";

export const About = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-container__title">{aboutUsTitle}</h1>
      <section className="about-us-container__body">
        {aboutUsSevices.map(card => 
          <InfoImageCard 
            id={card.id}
            imgUrl={card.img}
            t1={card.title}
            p1={card.details}
          />
        )}
      </section>
    </div>
  );
};

