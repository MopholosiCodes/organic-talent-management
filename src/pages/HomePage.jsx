import React, { useEffect, useState } from "react";
import { video, registerContent, modelTitle, reviewContent, reviewTitle } from "../data/home";
import { CardContainer } from "../components/CardContainer";
import { ImageCard } from "../components/ImageCard";
import { ReviewCard } from "../components/ReviewCard";
import { fetchModelsByCategory } from "../data/model-db";
import "../styles/Home.scss";

export const HomePage = () => {
  const [categories, setCategoies] = useState()

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryModels = await fetchModelsByCategory();
      setCategoies(categoryModels);
    }

    fetchCategories();
  },[])

  return (
    <div className="home-container">
      <section className="home-container__video-section">
        <video autoplay="autoPlay" width="100%" height="80%" controls>
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
        {categories?.map((category) => (
            <ImageCard
              key={category.model_gender}
              id={category.model_gender}
              hasTitle={true}
              title={category.model_gender}
              imgUrl={category.gallery_image}
              imgAlt={category.model_gender}
              height="443px"
              width="332px"
              path={`/models/${category.model_gender.toLowerCase()}`}
            />
          ))}
        </section>
      </section>
      <section className="home-container__reviews">
        <h1 className="models-section__title">{reviewTitle}</h1>
        <div className="models-section__reviews-section">
          {/* Enable reviews to be stored in DB */}
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