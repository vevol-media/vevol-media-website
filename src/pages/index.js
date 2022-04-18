import React from 'react';
import Layout from '../components/layout/layout';
import HomepageHero from '../components/homepage-hero/homepage-hero';
import HomepageServices from '../components/homepage-services/homepage-services';
import { Helmet } from 'react-helmet';
import ReviewsSection from '../components/reviews-section/reviews-section';
import ProjectsList from '../components/projects-list/projects-list';
import { graphql } from 'gatsby';

export default function Homepage({data}) {

	return (
		<Layout>
			<HomepageHero />
			<HomepageServices />
			<ReviewsSection />
			<ProjectsList data={data} />
			<Helmet>
				<script type="text/javascript" src="https://widget.clutch.co/static/js/widget.js"></script>
			</Helmet>
		</Layout>
	);
}

export const data = graphql`
	query Photos {
		allFile(filter: { relativeDirectory: { eq: "stores-sliders" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: TRACED_SVG)
				}
			}
		}
	}
`;
