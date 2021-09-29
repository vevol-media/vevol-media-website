import React from 'react';
import FaqQuestions from '../faq-questions/faq-questions';
import './faq-section.scss';
import { Container, Title } from 'bloomer';

const FaqSection = () => {
    return (
        <section className="faq" >
            <Container>
                 <FaqQuestions/>
            </Container>
        </section>
    )
}

export default FaqSection
