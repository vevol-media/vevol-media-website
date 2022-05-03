import React from 'react';
import AboutUs from '../components/company/about-us';
import CompanyVision from '../components/company/company-vision';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';

const CompanyInfo = () => {
    return (
        <Layout>
            <SlimHero
				heading="Our mission"
				subheading="A wide range of talent ."
			/>
            
            <div className="vm-section vm-section--white">
                <Container>
                    <CompanyVision/>
                    <AboutUs/>
                </Container>
            </div>
        </Layout>
    );
}

export default CompanyInfo;
