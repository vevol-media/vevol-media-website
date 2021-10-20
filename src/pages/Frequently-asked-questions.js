import React from "react";
import Layout from "../components/layout/layout";
import FaqQuestions from "../components/faq/faq-questions/faq-questions";
import { Container } from "bloomer";

const FaqPage = () => {
  return (
    <Layout>
      <section className="faq">
        <Container>
          <div className="wrapper">
            <FaqQuestions />
          </div>
        </Container>
      </section>
    </Layout>
  );
};
export default FaqPage;
