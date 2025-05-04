import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModelDetails } from "../components/ModelDetails";
import { model } from "../data/model";
import { ImageCard } from "../components/ImageCard";
import "../styles/Model.scss";

export const Model = () => {
    const { name } = useParams();
    const [matchedModel, setMatchedModel] = useState(null);
    const [modelImages, setModelImages] = useState([]);

    useEffect(() => {
        const getCurrentModel = model.find(
            (m) => m.name.toUpperCase() === name.toUpperCase()
        );
        if (getCurrentModel) {
            setMatchedModel(getCurrentModel);
            setModelImages(getCurrentModel.img || []);
        }
    }, [name]);

    return (
        <div className="model-container">
            {matchedModel && (
                <ModelDetails
                    id={matchedModel.id}
                    name={matchedModel.name}
                    height={matchedModel.height}
                    waist={matchedModel.waist}
                    shoeSize={matchedModel.shoeSize}
                    age={matchedModel.age}
                    eyes={matchedModel.eyes}
                    dressSize={matchedModel.dressSize}
                    hair={matchedModel.hair}
                    hips={matchedModel.hips}
                    img={matchedModel.img[0]} 
                />
            )}
            <section className="model-container__image-container">
                {modelImages.map((img, index) => (
                    <ImageCard 
                        key={index} 
                        imgUrl={img} 
                        width='300px'
                        height='390px' 
                    />
                ))}
            </section>
        </div>
    );
};
