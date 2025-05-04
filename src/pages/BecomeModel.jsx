import React, { useState } from "react";
import { BecomeForm } from "../components/BecomeForm";
import { becomeModelTitle } from "../data/become";
import "../styles/BecomeModel.scss";

export const BecomeModel = () => {
  const [page, setPage] = useState(1);
  
  return (
    <div className="form-container">
      <h1 className="form-container__title">{becomeModelTitle}</h1>
      <BecomeForm page={page} setPage={setPage} />
    </div>
  );
};


