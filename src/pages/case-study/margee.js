import React from 'react';
import { CardImage } from 'bloomer';
import { graphql, useStaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/layout/layout';
import SlimHero from '../../components/slim-hero/slim-hero';
import InformationalContent from '../../components/case-study/informational-content';
import SidebarInfoText from '../../components/case-study/sidebar-info-text';
import SimpleImageCarousel from '../../components/simple-image-carousel/simple-image-carousel';
import CaseStudiesCarousel from '../../components/case-studies-carousel/case-studies-carousel';

const projectsImagesQuery = graphql`
	query {
		allFile(filter: { relativeDirectory: { eq: "case-studies/margee" } }) {
			nodes {
				name
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 })
				}
			}
		}
	}
`;

export default function MargeeCaseStudy() {
	const projectsImages = useStaticQuery(projectsImagesQuery).allFile.nodes;
	const getImageByName = (imagesArray, imageName) => {
		const image = imagesArray.filter((image) => image.name === imageName)[0];

		return getImage(image.childImageSharp.gatsbyImageData);
	};

	const projectCarouselImages = projectsImages.filter((image) => image.name.includes('carousel'));

	return (
		<Layout headerBg="white">
			<SlimHero
				heading="Margee Shopify Store"
				subheading="Branding, Email &amp; Marketing, Website Development"
				backgroundWhite
				hideBlob
			/>
			<CardImage>
				<GatsbyImage image={getImageByName(projectsImages, 'hero')} alt={'Margee Case Study - Vevol Media'} />
			</CardImage>
			<SidebarInfoText
				backgroundWhite
				sidebarContent={[
					{
						title: 'Services',
						text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						title: 'Industry',
						text: 'Micromobility',
					},
				]}
				mainContent={[
					{
						title: 'Overview',
						text: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						text: 'Contrary to popular belief, Lorem Ipsum is not simply random. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
				]}
			/>
			<SimpleImageCarousel imagesArray={projectCarouselImages} />
			<SidebarInfoText
				backgroundWhite
				sidebarContent={[
					{
						title: 'Tools',
						text: 'Facebook Ads, Google Adds, Figma, Instagram',
					},
				]}
				mainContent={[
					{
						title: 'Goals',
						text: 'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
					{
						text: 'Contrary to popular belief, Lorem Ipsum is not simply random. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
					},
				]}
			/>
			<InformationalContent
				featuredImage={
					<GatsbyImage
						width={`500px`}
						image={getImageByName(projectsImages, 'bottom')}
						alt={'Margee Case Study - Results &amp; Impact'}
					/>
				}
				title={'Results & Impact'}
				description={
					'Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout'
				}
				blocks={[
					{
						title: 'Increase rate',
						text: '4.00%',
					},
					{
						title: 'Increase rate',
						text: '4.00%',
					},
					{
						title: 'Increase rate',
						text: '4.00%',
					},
				]}
			/>
			<CaseStudiesCarousel backgroundWhite />
		</Layout>
	);
}
