import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ModelDetails } from "../components/ModelDetails";
import { ImageCard } from "../components/ImageCard";
import { fetchModel, fetchModelImages } from "../data/model-db";
import "../styles/Model.scss";

export const Model = () => {
    const { name } = useParams();
    const [matchedModel, setMatchedModel] = useState();
    const [modelImages, setModelImages] = useState([]);
    const [modelId, setModelId] = useState();

    useEffect(() => {
        const getCurrentModel = async () => {
            let [firstName, lastName] = name.split('-');
            
            await fetchModel(firstName, lastName)
                .then((currentModel) => {
                    if (currentModel) {
                        console.log('Model_id: ' + currentModel[0].model_id);
                        getCurrentModelImages(currentModel[0].model_id);
                        setMatchedModel(currentModel[0]);
                    }
                }).catch((error) => {
                    if(error) throw error;
                })
        }

        const getCurrentModelImages = async (modelId) => {
            console.log('get current model id: ' + modelId)
            await fetchModelImages(modelId)
                .then((gallary) => console.log(gallary))
                .catch((error) => {
                    if(error) throw error;
                })
        }

        getCurrentModel();
    }, [name]);

    return (
        <div className="model-container">
            {matchedModel && (
                <ModelDetails
                    id={matchedModel.model_id}
                    name={`${matchedModel.first_name} ${matchedModel.last_name}`}
                    height={matchedModel.height}
                    waist={matchedModel.waist}
                    shoeSize={matchedModel.shoe_size}
                    age={matchedModel.age}
                    eyes={matchedModel.eye_color}
                    dressSize={matchedModel.dress_size}
                    hair={matchedModel.hair_color}
                    hips={matchedModel.hips}
                    img={matchedModel.img_url} 
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
