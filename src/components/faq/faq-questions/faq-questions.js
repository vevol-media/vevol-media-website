import React, { useState } from 'react';
import generalQuestions from '../../../enums/questions';
import FaqAcordion from '../faq-acordion/faq-acordion';
import './faq-questions.scss';
import { Title } from 'bloomer';

const FaqQuestions = () => {
    const [questions,setQuestions] = useState(generalQuestions);
    return (
        <div className="faqlist" >
            <Title className="faqlist__heading" >Frequent asked questions</Title>
            <div className="faqlist__block" >
                {
                    questions.map( (question) => {
                        return <FaqAcordion key={question.id}{...question}  />
                    })
                }
            </div>  
        </div>
    )
}

export default FaqQuestions
