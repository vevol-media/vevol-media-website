import React from "react";
import Layout from "../components/layout/layout";
import FaqQuestions from "../components/faq/faq-questions/faq-questions";
import ContactForm from "../components/form/contact-form";
import { Container } from "bloomer";

export default function FaqPage() {
    return (
        <Layout>
            <section className="faq">
                <Container>
                    <div className="wrapper">
                        <FaqQuestions />
                    </div>
                    <div className="wrapper">
                        <ContactForm />
                    </div>
                </Container>
            </section>
        </Layout>
    );
}
