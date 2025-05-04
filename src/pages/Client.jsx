import React, { useEffect, useState } from "react";
import { clients } from "../data/clients";
import { useParams } from "react-router-dom";
import { ImageCard } from "../components/ImageCard";
import { ClientInformation } from "../components/ClientInformation";
import "../styles/Client.scss";

export const Client = () => {
  const { client } = useParams();
  const [clientDetails, setClientDetails] = useState(null);

  useEffect(() => {
    setClientDetails(clients.find(c => c.title === client));
  },[client])

  console.table(clientDetails)

  if (!clientDetails) {
    return <div>Client not found.</div>;
  }

  return (
    <div className="client-container">
      <ClientInformation 
        ClientName={clientDetails.title}
        projectTitle={clientDetails.project?.title}
        productionCompanyName={clientDetails.project?.productionCompany}
        serviceProductionCompanyName={clientDetails.project?.servicingProduction}
        directorName={clientDetails.project?.director}
        castingDirectorName={clientDetails.project?.castingDirector}
        modelNames={clientDetails.project?.models}
        productionVideo={clientDetails.project?.videoUrl}
      />
      <section className="client-container__image-container">
        {clientDetails.project?.models.map(model => 
          <ImageCard 
            id={model.id} 
            imgUrl={model.imgUrl} 
            height='390px'
            width='300px'
          />
        )}
      </section>
    </div>
  );
};
