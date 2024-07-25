import React from 'react';
import Layout from '../components/layout/layout';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import { CardImage } from 'bloomer/lib/components/Card/CardImage';
import VevolSection from '../components/general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import { Title } from 'bloomer/lib/elements/Title';

export const data = graphql`
	query {
		errorImageQuery: file(name: { eq: "404-error" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 800, quality: 100)
			}
		}
	}
`;

export default function Page404({ data }) {
	const { errorImageQuery } = data;
	const errorImage = getImage(errorImageQuery);

	return (
		<Layout handle="page-not-found">
			<CardImage>
				<GatsbyImage image={errorImage} alt={'404 Error - Vevol Media'} objectFit="contain" />
			</CardImage>
			<VevolSection backgroundColour={'white'}>
				<Container className="has-text-centered">
					<Title tag="h1" isSize={3} className="mb-6">
						The Internet is vast. But it seems like you reached the end of it.
					</Title>
					<Link to={'/'}>
						<span className="vm-button vm-button--black">Go Home Alien</span>
					</Link>
				</Container>
			</VevolSection>
		</Layout>
	);
}
