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

	const bulletStyle = {
		listStyleType: 'disc',
		paddingLeft: '20px',
		marginBottom: '20px',
	};

	return (
		<Layout>
			<Helmet>
				<title>FREE Shopify SEO Audit (Worth €1200)</title>
				<meta
					name="description"
					content="At Vevol Media, we have a proven track record of successfully performing SEO audits that have provided our clients with invaluable insights and actionable next steps toward scaling their businesses. We understand that every client is unique, and that's why we adapt our approach to suit your specific needs."
				/>
			</Helmet>
			<SlimHero
				heading="FREE Shopify SEO Audit (Worth €1200)"
				subheading="Maximise the Organic Traffic Potential of Your Shopify Plus or Advanced Store"
			/>
			<SidewayText lineOne={`ecommerce`} lineTwo={'audit'} lineTwoRepeat={30} />
			<VevolSection backgroundColour={'grey'} className="pb-0">
				<Container>
					<ImageWithText
						alignRight
						greenLine
						image={<GatsbyImage image={imageTwoData} alt={'Technical SEO Audit'} />}
						textContent={[
							<p className="mt-5">
								At Vevol Media, we have a proven track record of successfully performing SEO audits that have provided our clients with invaluable insights and actionable next steps toward scaling their businesses. We understand that every client is unique, and that's why we adapt our approach to suit your specific needs.
							</p>,
							<p className="mt-5">
								A complimentary SEO Audit valued at €1200 just for you.
							</p>,
							<div className="mt-5">
								<h2 className="mb-3">
									<strong>What does this mean for your business?</strong>
								</h2>
								<div className="mb-5">
									<p>
										<strong>Increased organic traffic</strong>
									</p>
									<p>
										Attract more natural visitors, reduce paid advertising costs, and drive steady traffic to your website.
									</p>
								</div>
								<div className="mb-5">
									<p>
										<strong>Enhanced strategy</strong>
									</p>
									<p>
										Identify improvement points from the SEO audit, gain valuable insights, and develop a solid strategy.
									</p>
								</div>
								<div className="mb-5">
									<p>
										<strong>Competitive edge</strong>
									</p>
									<p>
										Optimise your website and follow SEO best practices to compete better in your industry.
									</p>
								</div>
							</div>,
							<h2 className="mb-5">
								<strong>Sounds too good to be true?</strong>
							</h2>,
							<p className="mb-5">We are doing this, so we can provide guidance and assistance in enhancing your Shopify SEO. Additionally, we will develop a bespoke strategy package tailored specifically to your unique business requirements, ensuring optimal results and maximum online visibility.</p>,
							<p className="mb-5">An SEO strategy is vital for your marketing plan. It optimises your website and content, boosts rankings for relevant keywords, and attracts more organic traffic.</p>,
							<h2 className="mb-5">
								<strong>What will your Free SEO Audit reveal?</strong>
							</h2>,
							<ul className="mb-5" style={bulletStyle}>
								<li>current SEO performance → scaling your business</li>
								<li>you vs. competitors → outranking competition</li>
								<li>Google ranking opportunities → increasing visibility</li>
								<li>on-page optimisation → content, meta tags, and internal linking</li>
								<li>keyword analysis → relevant keywords</li>
								<li>technical SEO → speed optimisation</li>
								<li>site architecture → UX/UI</li>
								<li>backlink analysis → link opportunities</li>
							</ul>,
							<p className="mb-5">
								Please note that our typical turnaround time is approximately 2 weeks, but it may be slightly longer during busy periods. We appreciate your patience as we dedicate the necessary attention to detail for each audit. While we aim to accommodate all audit requests, availability is at our discretion, and we reserve the right to decline certain sites.
							</p>,
							<p className="mb-5">
								To get started on optimising your Shopify store's SEO, please get in touch.
							</p>,
							<p>
								Next step? Get in touch with us.
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
