import React from "react";
import "../styles/ReviewCard.scss"

export const ReviewCard = (props) => {
    const {reviewerName, reviewDetails, stars, id } = props
    return (
        <div key={id} className="review-container">
            <p className="review-container__review-details">{reviewDetails}</p>
            <section className="review-container__review-card-footer">
                <h3 className="review-card-footer__reviewer_name">{reviewerName}</h3>
                <section className="review-card-footer__review-stars">{stars}</section>
            </section>
        </div>
    )
}