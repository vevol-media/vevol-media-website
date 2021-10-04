import React from 'react';
import FaqQuestions from '../faq-questions/faq-questions';
import FaqForm from '../faq-form/faq-form';
import './faq-section.scss';
import { Container } from 'bloomer';

const FaqSection = () => {
    return (
        <section className="faq" >
            <Container>
                 <FaqQuestions/>
                 <FaqForm/>
            </Container>
        </section>
    )
}

export default FaqSection
