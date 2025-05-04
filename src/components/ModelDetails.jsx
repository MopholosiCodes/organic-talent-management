import React from "react";
import { ImageCard } from "./ImageCard";
import { facebookButton, downloadButton, addSelectionButton } from "../data/model";
import "../styles/modelDetails.scss";

export const ModelDetails = (props) => {
    const {
        id, 
        name, 
        height, 
        waist, 
        shoeSize, 
        age, 
        eyes, 
        dressSize, 
        hair, 
        hips, 
        img 
    }= props;
    return (
        <div key={id} className="model-details-container">
            <section className="model-details-container__image-container">
                <ImageCard 
                    id={id} 
                    width='300px'
                    height='390px'
                    imgUrl={img}
                    hasTitle={false}
                />
            </section>
            <section className="model-details-container__details-container">
                <h1 className="details-container__title">{name}</h1>
                <div className="details-container__details-section">
                    <div className="details-container__details">
                        <section>
                            <p>Height</p>
                            <p>{height}</p>
                        </section>
                        <section>
                            <p>Shoe Size</p>
                            <p>{shoeSize}</p>
                        </section>
                        <section>
                            <p>Eyes</p>
                            <p>{eyes}</p>
                        </section>
                        <section>
                            <p>Hair</p>
                            <p>{hair}</p>
                        </section>
                    </div>
                    <div className="details-container__details">
                        <section>
                            <p>Waist</p>
                            <p>{waist}</p>
                        </section>
                        <section>
                            <p>Age</p>
                            <p>{age}</p>
                        </section>
                        <section>
                            <p>Dress Size</p>
                            <p>{dressSize}</p>
                        </section>
                        <section>
                            <p>Hips</p>
                            <p>{hips}</p>
                        </section>
                    </div>
                    <div className="details-container__social-buttons">
                        <button className="social-buttons__facebook" type="button">{facebookButton}</button>
                    </div>
                </div>
                <div className="details-container__action-buttons">
                    <button className="action-buttons__download" type="button">{downloadButton}</button>
                    <button className="action-buttons__select" type="button">{addSelectionButton}</button>
                </div>
            </section>
        </div>
    )
}