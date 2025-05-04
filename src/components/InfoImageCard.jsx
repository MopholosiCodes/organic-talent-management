import React from "react";
import { ImageCard } from "../components/ImageCard";
import "../styles/InfoImageCard.scss";

export const InfoImageCard = (props) => {
    const {
        numOfSections = 1, 
        reverseImage, 
        imgUrl,
        t1, 
        p1, 
        t2, 
        p2, 
        t3, 
        p3, 
        t4, 
        p4,
        id
    } = props;

    const style = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: reverseImage ? 'wrapReverse' : 'wrap'
    }

    return (
        <div key={id} className="info-image-card-container">
            <ImageCard  
                width='300px'
                height='390px'
                imgUrl={imgUrl}
                hasTitle={false}
            />
            <section className="info-image-card-container__details">
                {t1 && (
                    <div className="details__section-one">
                        <h2 className="details__title-one">{t1}</h2>
                        <p className="details__paragraph-one">{p1}</p>
                    </div>
                )}
               {t2 && (
                    <div className="details__section-two">
                        <h2 className="details__title-two">{t2}</h2>
                        <p className="details__paragraph-two">{p2}</p>
                    </div>
                )}
                {t3 && (
                    <div className="details__section-three">
                            <h2 className="details__title-three">{t3}</h2>
                            <p className="details__paragraph-three">{p3}</p>
                    </div>
                )}
                {t4 && (
                    <div className="details__section-four">
                        <h2 className="details__title-four">{t4}</h2>
                        <p className="details__paragraph-four">{p4}</p>
                    </div>
                )}
            </section>
        </div>
    )
}