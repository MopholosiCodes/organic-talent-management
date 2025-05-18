import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchModelsByGender } from "../data/model-db";
import { FilterComponent } from "../components/FilterComponent";
import { InteractiveImageCard } from "../components/InteractiveImageCard";
import "../styles/Models.scss";

export const Models = () => {
  const [fetchGender, setFetchGender] = useState("all");
  const [fetchModels, setFetchModels] = useState([]);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const { gender } = useParams();

  useEffect(() => {
    const getModels = async () => {
      let normalizedGender = "all";

      if (gender === "male" || gender === "female" || gender === "kids") normalizedGender = gender;
      
      setFetchGender(normalizedGender);

      await fetchModelsByGender(normalizedGender)
        .then((models) => setFetchModels(models || []))
        .catch((error) => {
          console.error("Failed to fetch models:", error)
          setFetchModels([]);
        })
    };

    getModels();
  }, [gender]);

  return (
    <div className="models-container">
      <div className="models-container__title">
        <h1 className="title">{fetchGender.toUpperCase()}</h1>
      </div>
      <FilterComponent 
        setIsActiveFilter={setIsActiveFilter} 
        isActiveFilter={isActiveFilter} 
      />
      <div className="models-container__model-cards">
        {fetchModels.map((model) => (
          <InteractiveImageCard
            key={model.model_id}
            id={model.model_id}
            imgUrl={model.img_url}
            title={`${model.first_name} ${model.last_name}`}
            path={`/model/${model.first_name}-${model.last_name}`}
          />
        ))}
      </div>
    </div>
  );
};
