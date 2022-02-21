import React from "react";
import Layout from "../components/layout/layout";
import HomepageHero from "../components/homepage-hero/homepage-hero";
import HomepageServices from "../components/homepage-services/homepage-services";
import { Helmet } from "react-helmet";
import ReviewsSection from "../components/reviews-section/reviews-section";

export default function Homepage() {
    return (
        <Layout>
            <HomepageHero />
            <HomepageServices />
            <ReviewsSection />
            <Helmet>
                <script
                    type="text/javascript"
                    src="https://widget.clutch.co/static/js/widget.js"
                ></script>
            </Helmet>
        </Layout>
    );
}
