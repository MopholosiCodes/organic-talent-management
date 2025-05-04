import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import { FilterComponent } from "../components/FilterComponent";
import { models } from "../data/models";
import { InteractiveImageCard } from "../components/InteractiveImageCard";
import "../styles/Models.scss";

export const Models = () => {
  const [fetchGender, setFetchGender] = useState();
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  let { gender } = useParams();

  useEffect(() => {
    switch (gender) {
      case "all":
        setFetchGender("Models")
        break;
      case "men":
        setFetchGender("Men")
        break;
      case "women":
        setFetchGender("Women")
        break;
      case "kids":
        setFetchGender("Kids")
      break;
      default:
        break;
    }
  },[gender]);

  return (
    <div className="models-container">
      <div className="models-container__title">
        <h1 className="title">{fetchGender}</h1>
      </div>
      <FilterComponent 
        setIsActiveFilter={setIsActiveFilter} 
        isActiveFilter={isActiveFilter} 
      />
      <div className="models-container__model-cards">
        {models.map(model => 
          <InteractiveImageCard 
            id={model.id} 
            imgUrl={model.imgUrl} 
            title={model.title}  
            path={"/model/" + model.title}
          />
        )}
      </div>
    </div>
  );
};
