import React,{useState} from "react";
import "../styles/InteractiveImagecard.scss";
import { selectButtonTitle } from "../data/interactiveImageCard";

export const InteractiveImageCard = (props) => {
    const {id, title, imgUrl, height = '390px', width='300px', path} = props
    const [isHover, setIsHover] = useState(false);
    return (
        <a
            key={id}
            href={path}  
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)} 
            className="image-card-container"
        >
            <a>
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
            </a>
        </a>
    )
};