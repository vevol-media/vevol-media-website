import React from 'react';
import { graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import SidewayText from '../../components/sideways-text-banner/sideway-text-banner';
import VevolSection from '../../components/general-components/vm-section';
import { Container } from 'bloomer';
import ImageWithText from '../../components/general-components/image-text-simple';
import { Helmet } from 'react-helmet';
import AuditForm from '../../components/forms/audit-form';

export const data = graphql`
	query {
		imageTwoQuery: file(name: { eq: "seo-audit" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
		}
	}
`;

export default function PageSingleService({ data }) {
	const { imageTwoQuery } = data;
	const imageTwoData = getImage(imageTwoQuery);

	return (
		<Layout>
			<Helmet>
				<title>Free Shopify SEO Audit</title>
				<meta
					name="description"
					content="We offer a free SEO audit for all Shopify Plus & Shopify Advanced stores who use or plan to use our Shopify services."
				/>
			</Helmet>
			<SlimHero
				heading="Free Shopify SEO Audit"
				subheading="For Shopify Plus & Shopify Advanced Customers"
			/>
			<SidewayText lineOne={`ecommerce`} lineTwo={'audit'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={imageTwoData} alt={'Technical SEO Audit'} />}
						textContent={[
							<p className="mt-5">
								We offer a free SEO audit for all Shopify Plus & Shopify Advanced stores who use or plan to use our Shopify services.  It is an offer we make so that we can understand your current rankings and search saturation. Ultimately this is so that we can advise on how we can help improve Shopify SEO and to create a retainer offer for you.
							</p>,
							<p className="mt-5">
								This report is unique and personalised and required store access as well as access to Google Search Console + Google Analytics.  The turnaround time is usually 2 weeks but may be longer in busy times.  There is no fee for this service but it is offered on an a basis of availability and we reserve the right to not audit all requested sites.
							</p>,
							<p className="mt-5">
								Unfortunately this offer does not extend to merchants using the Basic or Shopify plan. We can offer a paid alternative for those merchants.
							</p>
						]}
					/>
				</Container>
			</VevolSection>
            <VevolSection backgroundColour={'grey'}>
                <Container>
                    <AuditForm standalone />
                </Container>
            </VevolSection>
		</Layout>
	);
}
