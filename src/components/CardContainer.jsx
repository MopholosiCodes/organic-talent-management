import react from "react";
import "../styles/CardContainer.scss"

export const CardContainer = (props) => {
    const {id, title, buttonText, buttonPath} = props;
    
    return (
        <div key={id} className="card-container">
          <h1 className="card-container__card-title">{title}</h1>
          <a href={buttonPath} className="card-container__button">
            {buttonText}
          </a>
        </div>
      );
};