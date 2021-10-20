import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import "./faq-accordion.scss";

export default function FaqAccordion({ title, text }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="question">
      <div
        onClick={() => setShowInfo(!showInfo)}
        onKeyPress={() => setShowInfo(!showInfo)}
        role="button"
        tabIndex="0"
        className="question__heading"
      >
        <h3 className="question__title">{title}</h3>
        <FontAwesomeIcon icon={faPlus} />
      </div>

      {showInfo && (
        <Fade>
          <p className="question__text"> {text} </p>
        </Fade>
      )}
    </div>
  );
}
