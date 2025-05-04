import React from "react";
import { video, registerContent, modelContent, modelTitle, reviewContent, reviewTitle } from "../data/home";
import { CardContainer } from "../components/CardContainer";
import { ImageCard } from "../components/ImageCard";
import { ReviewCard } from "../components/ReviewCard";
import "../styles/Home.scss";

export const HomePage = () => {
  return (
    <div className="home-container">
      <section className="home-container__video-section">
        <video autoplay="autoplay" width="100%" height="80%" controls>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
        </video> 
      </section>
      <section className="home-container__contact">
        {registerContent.map(content => 
          <CardContainer 
            id={content.id} 
            title={content.title} 
            buttonText={content.buttonText} 
            buttonPath={content.path} 
          />
        )}
      </section>
      <section className="home-container__models-section">
        <h1 className="models-section__title">{modelTitle}</h1>
        <section className="models-section__image-cards">
          {modelContent.map(img => 
            <ImageCard 
              id={img.id} 
              hasTitle={true} 
              title={img.imgTitle} 
              imgUrl={img.imgUrl} 
              imgAlt={img.imgTitle} 
              height='443px'
              width='332px'
              path={img.imgPath}
            />
          )}
        </section>
      </section>
      <section className="home-container__reviews">
        <h1 className="models-section__title">{reviewTitle}</h1>
        <div className="models-section__reviews-section">
          {reviewContent.map(review => 
            <ReviewCard 
              id={review.id}
              reviewerName={review.reviewer}
              reviewDetails={review.reviewDetails}
              stars={review.stars}
            />
          )}
        </div>
      </section>
    </div>
  );
};