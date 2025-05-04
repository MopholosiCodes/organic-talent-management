import React from "react";
import { clientTitle, clients } from "../data/clients";
import "../styles/Clients.scss";
import { ImageCard } from "../components/ImageCard";

export const Clients = () => {
  return (
    <div className="clients-container">
      <section className="clients-container__title-container">
        <h1 className="title">{clientTitle}</h1>
      </section>
      <section className="clients-container__image-section">
        {clients.map(client => 
          <ImageCard 
            id={client.id} 
            path={"/client/" + client.title}  
            imgUrl={client.imgUrl}  
          />
        )}
      </section>
    </div>
  );
};

