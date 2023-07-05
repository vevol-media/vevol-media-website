import Layout from '../components/layout/layout';
import React, { useRef } from 'react';
import SlimHero from '../components/slim-hero/slim-hero';
import { Container } from 'bloomer';
import VevolSection from '../components/general-components/vm-section';
import { Helmet } from 'react-helmet';
import HeadingBlock from '../components/heading-block/heading-block';
import GlossaryIndex from '../components/glossary-index/glossary-index';
import ImageWithText from '../components/general-components/image-text-simple';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

export const data = graphql`
	query {
		glossaryImageQuery: file(name: { eq: "ecommerce-glossary" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, width: 800, quality: 100)
			}
		}
	}
`;

export default function EcommerceGlossaryPage({ data }) {
	const { glossaryImageQuery } = data;
	const glossaryImage = getImage(glossaryImageQuery);

	const glossaryIndexRef = useRef();

	return (
		<Layout>
			<Helmet>
				<title>Shopify and eCommerce Glossary of Terms: 100+ - Vevol Media</title>
				<meta
					name="description"
					content="Unlock the secrets of eCommerce success with our comprehensive glossary of 100+ essential terms."
				/>
			</Helmet>
			<SlimHero
				heading="eCommerce Glossary"
				subheading="Mastering eCommerce Jargon: Your Definitive Glossary of 100+ Terms to Excel in the Shopify Landscape"
			/>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<ImageWithText
						image={<GatsbyImage image={glossaryImage} alt={'eCommerce Glossary'} />}
						title={'Key Terms & Terminologies'}
						alignLeft
						textContent={[
							<p className="mt-5">
								In the fast-paced world of eCommerce, staying up-to-date with the latest trends and
								technologies is crucial for success.
							</p>,
							<p className="mt-5">
								With platforms like Shopify leading the way, entrepreneurs and businesses have access to
								powerful tools to establish and grow their online presence. However, navigating the
								realm of eCommerce and understanding the associated terminologies can be overwhelming.
								That's why we've compiled a comprehensive glossary of 100+ essential terms that will
								help demystify the world of eCommerce and Shopify, empowering you to make informed
								decisions and optimise your online business.
							</p>,
							<p className="mt-5">
								That's why we've compiled a comprehensive glossary of 100+ essential terms that will
								help demystify the world of eCommerce and Shopify, empowering you to make informed
								decisions and optimise your online business.
							</p>,
						]}
					/>
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'grey'}>
				<Container>
					<HeadingBlock
						title={'Glossary Index'}
						highlightedWord={'Glossary'}
						className="mb-4em"
						subtitle={'Learn more about each term and terminology'}
					/>
					<GlossaryIndex glossaryIndexRef={glossaryIndexRef} />
				</Container>
			</VevolSection>
			<VevolSection backgroundColour={'white'}>
				<Container>
					<p className="mt-5">
						By familiarising yourself with these key eCommerce and Shopify terms, you'll be equipped with
						the knowledge to navigate the intricate landscape of online business. Whether you're a seasoned
						entrepreneur or just starting your eCommerce journey, understanding these concepts will enable
						you to communicate effectively, make informed decisions, and utilise the full potential of
						Shopify's features.
					</p>
					<p className="mt-5">
						Remember, the world of eCommerce is constantly evolving, and staying informed is key. Embrace
						these terminologies as the building blocks of your eCommerce vocabulary, and stay ahead in the
						competitive marketplace.
					</p>
					<p className="mt-5">
						Ready to take your eCommerce business to new heights? Explore the power of Shopify and unlock
						the potential of these essential terms by starting your Shopify journey today. We promise to
						help you along the way.
					</p>
				</Container>
			</VevolSection>
		</Layout>
	);
}
