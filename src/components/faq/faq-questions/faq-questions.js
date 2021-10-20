import React, { useState, useEffect } from "react";
import generalQuestions from "../../../enums/questions";
import FaqAcordion from "../faq-accordion/faq-accordion";
import "./faq-questions.scss";
import { Title } from "bloomer";

const FaqQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        setQuestions(generalQuestions);
    }, []);

    return (
        <div className="faq-list">
            <Title className="faq-list__heading">
                Frequent asked questions
            </Title>
            <div className="faq-list__block">
                {questions.map((question) => {
                    return <FaqAcordion key={question.id} {...question} />;
                })}
            </div>
        </div>
    );
};

export default FaqQuestions;
