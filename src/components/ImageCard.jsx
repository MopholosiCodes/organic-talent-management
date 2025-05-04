import React from "react";
import "../styles/ImageCard.scss";

export const ImageCard = (props) => {
    const {id = 0, hasTitle, title, imgUrl, imgAlt, height, width, path} = props
    return (
        <div key={id} className="image-card-container">
            <a href={path}>
                <img 
                    width={width} 
                    height={height} 
                    className="image-card-container__img" 
                    src={imgUrl} 
                    alt={imgAlt} 
                />
                {hasTitle && <h1 className="image-card-container__title">{title}</h1>}
            </a>
        </div>
    )
};