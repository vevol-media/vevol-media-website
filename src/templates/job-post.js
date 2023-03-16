import Layout from '../components/layout/layout';
import React from 'react';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import VevolSection from '../components/general-components/vm-section';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { Title } from 'bloomer/lib/elements/Title';
import SidewayText from '../components/sideways-text-banner/sideway-text-banner';
import SimpleCard from '../components/general-components/simple-card';
import SideDrawer from '../components/side-drawer/side-drawer';
import { AppContext } from '../context/app-context';
import JobForm from '../components/forms/job-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const query = graphql`
	query ($slug: String!) {
		imageQuery: file(name: { eq: "vevol-media-team-shopify" }) {
			childImageSharp {
				gatsbyImageData(placeholder: BLURRED, blurredOptions: { width: 125 }, width: 1000, quality: 100)
			}
			publicURL
		}
		pageData: contentfulJobPost(slug: { eq: $slug }) {
			title
			slug
			location
			salary
			employmentType
			benefits {
				raw
			}
			briefIntro {
				briefIntro
			}
			longIntro {
				raw
			}
			notes {
				raw
			}
			qualifications {
				raw
			}
			responsibilities {
				raw
			}
		}
	}
`;

export default function JobPost(props) {
	const data = props.data;
	const {
		title,
		slug,
		location,
		salary,
		employmentType,
		benefits,
		briefIntro,
		longIntro,
		notes,
		qualifications,
		responsibilities,
	} = data.pageData;

	const featuredImageUrl = data.imageQuery.publicURL;
	const editStringId = (string) => {
		return string.toString().replaceAll(' ', '-').replaceAll('/n', '');
	};

	const renderApplyButton = () => (
		<AppContext.Consumer>
			{({ handleSideDrawer }) => {
				return (
					<div
						className="vm-button vm-button--black"
						onClick={() => {
							handleSideDrawer(true);
						}}
						onKeyDown={() => {
							handleSideDrawer(true);
						}}
						role="button"
						tabIndex={0}
					>
						Apply Now
					</div>
				);
			}}
		</AppContext.Consumer>
	);

	const renderOptions = {
		renderMark: {
			[MARKS.BOLD]: (text) => <strong>{text}</strong>,
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <p className={`mb-5`}>{children}</p>,
			[BLOCKS.HEADING_1]: (node, children) => (
				<Title tag="h2" isSize={3} id={editStringId(children)}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_2]: (node, children) => (
				<Title tag="h2" isSize={3} id={editStringId(children)}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_3]: (node, children) => (
				<Title tag="h3" isSize={4}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_4]: (node, children) => (
				<Title tag="h4" isSize={5} id={editStringId(children)}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_5]: (node, children) => (
				<Title tag="h5" isSize={5}>
					{children}
				</Title>
			),
			[INLINES.HYPERLINK]: (node) => {
				const isYoutubeVideo = node.data.uri.includes('youtube');

				if (isYoutubeVideo) {
					return (
						<span className="rte-youtube">
							<iframe
								width="560"
								height="315"
								src={node.data.uri}
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
						</span>
					);
				} else {
					return <a href={node.data.uri}>{node.content[0].value}</a>;
				}
			},
		},
	};

	return (
		<>
			<Layout headerBg={'white'} headerIsStatic hasMainForm={false}>
				<Helmet>
					<title>{title} Role - Vevol Media</title>
					<meta
						name="description"
						content={`Vevol Media are looking for a ${title} to join our team. Find out more about the role and apply today.`}
					/>
					<meta property="og:url" content={`https://www.vevolmedia.com/careers/${slug}`} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta
						property="og:description"
						content={`Vevol Media are looking for a ${title} to join our team. Find out more about the role and apply today.`}
					/>
					<meta property="og:image" content={`https://www.vevolmedia.com${featuredImageUrl}`} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@VevolMedia" />
					<meta property="twitter:domain" content="vevolmedia.com" />
					<meta property="twitter:url" content={`https://www.vevolmedia.com/careers/${slug}`} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={briefIntro.briefIntro} />
					<meta name="twitter:image" content={`https://www.vevolmedia.com${featuredImageUrl}`} />
				</Helmet>
				<SidewayText lineOne={`Career`} lineTwo={'Opportunities'} />
				<VevolSection backgroundColour={'white'}>
					<Container className="job-listing-info">
						<Link to="/careers">
							<FontAwesomeIcon icon={faArrowLeft} />
							<span className="ml-2">Back to Careers</span>
						</Link>
						<div className="list-of-cards mt-3">
							<SimpleCard pinkBorder alternativeBackground>
								{title && (
									<Title tag="h3" isSize={4} className="simple-card__title">
										{title}
									</Title>
								)}
								{location && (
									<p>
										<strong>Location</strong> - {location}
									</p>
								)}
								{employmentType && (
									<p>
										<strong>Employment</strong> - {employmentType}
									</p>
								)}
								{salary && (
									<p className="mb-3">
										<strong>Salary</strong> - {salary}
									</p>
								)}

								{renderApplyButton()}
							</SimpleCard>
						</div>
						{longIntro && (
							<>
								<Title tag="h2" isSize={4}>
									Info
								</Title>
								<div className="mt-5 mb-6">
									{documentToReactComponents(JSON.parse(longIntro.raw), renderOptions)}
								</div>
							</>
						)}
						{responsibilities && (
							<>
								<Title tag="h2" isSize={4}>
									Responsibilities
								</Title>
								<div className="mt-5 mb-6">
									{documentToReactComponents(JSON.parse(responsibilities.raw), renderOptions)}
								</div>
							</>
						)}
						{qualifications && (
							<>
								<Title tag="h2" isSize={4}>
									Qualifications
								</Title>
								<div className="mt-5 mb-6">
									{documentToReactComponents(JSON.parse(qualifications.raw), renderOptions)}
								</div>
							</>
						)}
						{benefits && (
							<>
								<Title tag="h2" isSize={4}>
									Benefits
								</Title>
								<div className="mt-5 mb-6">
									{documentToReactComponents(JSON.parse(benefits.raw), renderOptions)}
								</div>
							</>
						)}
						{notes && (
							<>
								<Title tag="h2" isSize={4}>
									Extra Information
								</Title>
								<div className="mt-5">
									{documentToReactComponents(JSON.parse(notes.raw), renderOptions)}
								</div>
							</>
						)}
						{renderApplyButton()}
					</Container>
				</VevolSection>
				<SideDrawer>
					<JobForm jobRole={title} />
				</SideDrawer>
			</Layout>
		</>
	);
}
