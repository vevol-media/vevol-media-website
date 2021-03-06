import React, { useState, useEffect } from 'react';
import generalQuestions from '../../../enums/questions';
import FaqAcordion from '../faq-accordion/faq-accordion';
import './faq-questions.scss';
import { Title } from 'bloomer';

const FaqQuestions = () => {
	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		setQuestions(generalQuestions);
	}, []);

	return (
		<div className="faq-list vm-section">
			<Title tag="h2" className="faq-list__heading">
				Our clients have asked
			</Title>
			<div className="faq-list__block">
				{questions.map((question, index) => {
					return <FaqAcordion key={index} {...question} />;
				})}
			</div>
		</div>
	);
};

export default FaqQuestions;
