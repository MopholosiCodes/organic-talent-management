import React, { useState } from "react";
import { Form } from "../components/Form";
import { becomeModelTitle } from "../data/become";
import "../styles/BecomeModel.scss";

export const BecomeModel = () => {
  const [page, setPage] = useState(1);

  const handlePage = () => {
    page === 1 && setPage(2);
    page === 2 && setPage(1);
  }
  
  const UploadRules = () => {
    return (
      <>rules and regulations</>
    )
  }

  return (
    <div className="form-container">
      <h1 className="form-container__title">{becomeModelTitle}</h1>
      <Form page={page} />
      <section className="buttons">
        <button 
          onClick={handlePage} 
          className="next-prev-button"
        >
          {page === 1 && "NEXT"}
          {page === 2 && "PREV"}
        </button>
      </section>
      {page === 2 && (
        <UploadRules/>
      )}
    </div>
  );
};


