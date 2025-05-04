import React from "react";
import "../styles/ClientInformation.scss";

export const ClientInformation = (props) => {
    const {
        ClientName, 
        projectTitle, 
        productionCompanyName, 
        serviceProductionCompanyName, 
        directorName, 
        castingDirectorName, 
        modelNames,
        productionVideo 
    } = props;
    
    return (
        <div className="client-details-container">
           <h1 className="client-container__heading">{ClientName}</h1>
           <div className="client-container__details-container-parent">
                <section className="client-container__details-container">
                    <div className="details-container__client-details">
                        <h1 className="client-details__title">{projectTitle}</h1>
                        <p>Production company: {productionCompanyName}</p>
                        <p>Servicing Production Company: {serviceProductionCompanyName}</p>
                        <p>Director: {directorName}</p>
                        <p>Casting Director: {castingDirectorName}</p>
                    </div>
                </section>
                <div className="details-container__model-details">
                        <h1>Models</h1>
                        <p>{modelNames.map(model => model.name + ', ')}</p>
                        <section className="client-container__video-container">
                    <p>Produced video: {productionVideo}</p>
                </section>
                </div>
           </div>
        </div>
    )
}