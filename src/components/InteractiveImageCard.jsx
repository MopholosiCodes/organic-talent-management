import React, { useState } from "react";
import { selectButtonTitle } from "../data/interactiveImageCard";
import "../styles/InteractiveImagecard.scss";

export const InteractiveImageCard = (props) => {
    const { id, title, imgUrl, height = '390px', width = '300px', path } = props;
    const [isHover, setIsHover] = useState(false);

    return (
        <a
            key={id}
            href={path}
            className="image-card-container"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="image-card-inner">
                <img
                    width={width}
                    height={height}
                    className="image-card-container__img"
                    src={imgUrl}
                    alt={title}
                />
                {isHover && (
                    <div className="image-card-container__slider">
                        <h2 className="slider__title">{title}</h2>
                        <button className="slider__select-button">{selectButtonTitle}</button>
                    </div>
                )}
            </div>
        </a>
    );
};
