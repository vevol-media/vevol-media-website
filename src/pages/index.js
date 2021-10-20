import React from "react";
import Layout from "../components/layout/layout";
import HomepageHero from "../components/homepage-hero/homepage-hero";
import HomepageServices from "../components/homepage-services/homepage-services";

export default function Homepage() {
  return (
    <Layout>
      <HomepageHero />
      <HomepageServices />
    </Layout>
  );
}
