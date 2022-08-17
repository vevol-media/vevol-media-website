import React from 'react';
import AboutUs from '../components/company/about-us';
import CompanyVision from '../components/company/company-vision';
import Layout from '../components/layout/layout';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import visionImage from '../images/placeholders/member1.png';
import aboutImage from '../images/placeholders/about-us.webp';

const CompanyInfo = () => {
	return (
		<Layout>
			<SlimHero heading="Our mission" subheading="A wide range of talent ." />

			<div className="vm-section vm-section--white company-info">
				<Container className="is-flex is-flex-direction-column">
					<CompanyVision
						heading="Our Vision"
						subheading="Web development"
						text="Our Vision...There are many variations of passages of Lorem Ipsum available, but the majority
                    have suffered alteration in some form, by injected humour, or randomised words which don't look
                    even slightly believable."
						image={visionImage}
						name="Name"
						company="Vevol Media"
					/>
					<AboutUs
						image={aboutImage}
						supraheading="About our company"
						heading="About Us"
						text=" The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
					/>
				</Container>
			</div>
		</Layout>
	);
};

export default CompanyInfo;
