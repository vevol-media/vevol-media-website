import Layout from '../components/layout/layout';
import React from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import TeamMembers from '../components/team-section/team-members';
import HeadingBlock from '../components/heading-block/heading-block';
import { Helmet } from 'react-helmet';
import ImageWithText from '../components/general-components/image-text-simple';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { Fade } from 'react-reveal';
import VevolSection from '../components/general-components/vm-section';

export const data = graphql`
	query {
		location: allFile(filter: { name: { eq: "vevol-media-locations" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
				}
			}
		}
		brasov: allFile(filter: { name: { eq: "vevol-team-brasov" } }) {
			nodes {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
				}
			}
		}
	}
`;

export default function PageAbout({ data }) {
	const { brasov, location } = data;
	const locationImage = getImage(location.nodes[0].childImageSharp.gatsbyImageData);
	const brasovImage = getImage(brasov.nodes[0].childImageSharp.gatsbyImageData);

	return (
		<Layout>
			<Helmet>
				<title>Meet Vevol Media and our Team of Shopify Experts</title>
				<meta
					name="description"
					content="Ireland Based Shopify & Bespoke Development Company. We specialise in bringing success to eCommerce businesses internationally."
				/>
			</Helmet>
			<SlimHero
				heading="About Vevol Media"
				subheading="We are a passionate and dedicated team specialising in eCommerce and development. Quality is what drives us and we uphold this promise to all our clients."
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={locationImage} alt={'Vevol Media locations'} />}
						title={'Based in Europe'}
						textContent={[
							<p className="mt-5">
								Vevol Media is an Ireland-based and fully remote company, with our members working
								independently from their own locations. So you can always meet us face to face in
								Ireland, UK or Romania.
							</p>,
							<p className="mt-5">
								Our mission is to help businesses grow by leveraging our skills and expertise in web
								design & development, search engine and conversion rate optimisation.
							</p>,
							<p className="mt-5">
								eeCommerce and Shopify are at the core of our services, and our team has extensive
								knowledge of how your business can take advantage of everything in the market.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection>
				<Container>
					<HeadingBlock
						title={'A Team Of Superstars'}
						highlightedWord={'Team'}
						subtitle={
							'No project is too big or complex for us here at Vevol Media. Our mindset? Anything is possible!'
						}
					/>
					<Fade bottom>
						<p className="py-6">
							Our team is always ready to give 100% to your project. We do it with pride, and we value
							your success as much as we value our own. Whether it comes to development, design,
							strategies or business in general, everyone is fully invested in all projects we take on. So
							let's work together and prove these are not just words.
						</p>
					</Fade>
					<TeamMembers />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={brasovImage} alt={'Vevol Media team'} />}
						title={'A Little Background'}
						textContent={[
							<p className="mt-5">
								Vevol Media was founded in 2018 and initially offered Shopify Store Setup services. As
								we continued to grow, the services expanded to custom theme development, SEO, CRO and
								bespoke design.
							</p>,
							<p className="mt-5">
								We have a remote-first work approach; therefore, we offer our services internationally.
								Our team meets regularly in person to work and have fun together. We share common goals
								and strive to achieve them as a group.
							</p>,
							<p className="mt-5">
								We can also facilitate face-to-face client meetings with our co-founders or managers in
								Ireland, UK or Romania. You will also find us at relevant conferences or meet-ups like
								Shopify Unite, eCommerce Expo, GPEC and many others.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
		</Layout>
	);
}
