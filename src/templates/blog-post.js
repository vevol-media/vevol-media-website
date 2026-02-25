import Layout from '../components/layout/layout';
import React, { useState } from 'react';
import { Container } from 'bloomer';
import { Helmet } from 'react-helmet';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import VevolSection from '../components/general-components/vm-section';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import BlogIntro from '../components/blog/blog-intro';
import AboutAuthor from '../components/blog/about-author';
import { Title } from 'bloomer/lib/elements/Title';
import './blog-content.scss';
import { BgImage } from 'gbimage-bridge';
import SplitNav from '../components/general-components/split-nav';
import TableOfContents from '../components/table-of-contents/table-of-contents';
import ProgressBar from '../components/progress-bar/progress-bar';
import ProsCons from '../components/pros-cons/pros-cons';
import BlogQuote from '../components/blog-quote/blog-quote';

export const query = graphql`
	query ($slug: String!) {
		logo: file(name: { eq: "logo-vevol-media-black" }) {
			publicURL
		}
		pageData: contentfulBlogPost(slug: { eq: $slug }) {
			title
			intro {
				intro
			}
			metaDescription {
				metaDescription
			}
			type {
				title
			}
			publishedDate(formatString: "DD MMM YYYY")
			featuredImage {
				file {
					url
				}
				gatsbyImageData(placeholder: DOMINANT_COLOR, quality: 100, layout: FULL_WIDTH)
			}
			slug
			content {
				raw
				references {
					__typename
					... on ContentfulAsset {
						gatsbyImageData(placeholder: BLURRED, width: 1000, quality: 100)
						title
						description
						contentful_id
						file {
							contentType
						}
						fixed(width: 1600) {
							width
							height
							src
							srcSet
						}
					}
					... on ContentfulProsCons {
						contentful_id
						prosTitle
						pros
						consTitle
						cons
					}
					... on ContentfulQuote {
						contentful_id
						avatar {
							gatsbyImageData(placeholder: BLURRED, width: 200, quality: 100)
						}
						content: description {
							description
						}
					}
				}
			}
			author {
				name
				avatar {
					gatsbyImageData(placeholder: BLURRED, width: 60, quality: 100)
				}
				description {
					description
				}
			}
		}
	}
`;

export default function BlogPost(props) {
	const data = props.data;
	const { title, publishedDate, featuredImage, content, author, intro, metaDescription, type, slug } = data.pageData;
	const { publicURL } = data.logo;
	const { previous, next } = props.pageContext.edge;
	const featuredImageData = getImage(featuredImage);
	const authorSlug = author.name.toLocaleLowerCase().replace(' ', '-');
	const dateISO = new Date(publishedDate).toISOString();
	const getHeadingText = (children) => {
		if (children == null) return '';
		if (typeof children === 'string' || typeof children === 'number') return String(children).trim();
		if (Array.isArray(children)) return children.map(getHeadingText).join('').trim();
		if (typeof children === 'object' && children?.props?.children !== undefined) {
			return getHeadingText(children.props.children);
		}
		return '';
	};
	const editStringId = (children) => {
		return getHeadingText(children).replace(/\s+/g, '-').replace(/\n/g, '') || 'heading';
	};
	const [isTableOfContentsHidden, setIsTableOfContentsHidden] = useState(true);
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
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const assetItem = content.references.filter((item) => item.contentful_id === node.data.target.sys.id)[0];

				if (assetItem.file.contentType === 'image/gif') {
					return <img className="rte-image" src={assetItem.fixed.src} alt={assetItem.title} />;
				} else {
					const image = getImage(assetItem.gatsbyImageData);

					return <GatsbyImage className="rte-image" alt={assetItem.title} image={image} />;
				}
			},
			[BLOCKS.EMBEDDED_ENTRY]: (node) => {
				const assetItem = content.references.filter((item) => item.contentful_id === node.data.target.sys.id)[0];
				if(!assetItem) return null;

				switch (assetItem.__typename) {
					case 'ContentfulProsCons':
						return (
							<ProsCons pros={assetItem.pros} cons={assetItem.cons} prosTitle={assetItem.prosTitle} consTitle={assetItem.consTitle} />
						);
					case 'ContentfulQuote':
						return <BlogQuote avatar={assetItem.avatar} content={assetItem.content} title={title}/>;
					default:
						const featuredImage = getImage(assetItem.featuredImage.gatsbyImageData);

						return (
							<Link to={`/blog/${assetItem.slug}`} className="rte-block-entry">
								<BgImage image={featuredImage}>
									<div className="rte-block-entry__text">
										<Title tag="h3" isSize={4}>
											{assetItem.title}
										</Title>
										<p>{assetItem.intro.intro.substring(0, 300)}..</p>
										<span className="vm-button vm-button--green vm-button--small">Read more</span>
									</div>
								</BgImage>
							</Link>
						);
				}
			},
			[INLINES.EMBEDDED_ENTRY]: (node) => {
				const assetItem = content.references.filter((item) => item.contentful_id === node.data.target.sys.id)[0];

				return <a href={`/blog/${assetItem.slug}`}>{title}</a>;
			},
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

	const blogContent = documentToReactComponents(JSON.parse(content.raw), renderOptions);

	// A very very very hacky way of calculating reading time from the raw input.
	// Do not take it for granted, it's just my estimation (Bogdan)
	// 53% - estimated percentage of text in a content item
	// 15% - estimation of words per number of characters
	// 200 words per minute
	const readingTime = Math.ceil((content.raw.length * 0.53 * 0.15) / 200);

	return (
		<>
			<Layout headerBg={'white'} headerIsStatic>
				<Helmet>
					<title>{title} - Vevol Media</title>
					<meta name="description" content={metaDescription ? metaDescription.metaDescription : intro.intro} />
					<meta property="og:url" content={`https://www.vevolmedia.com/blog/${slug}`} />
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:description" content={metaDescription ? metaDescription.metaDescription : intro.intro} />
					<meta property="og:image" content={featuredImage.file.url} />

					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:creator" content="@VevolMedia" />
					<meta property="twitter:domain" content="vevolmedia.com" />
					<meta property="twitter:url" content={`https://www.vevolmedia.com/blog/${slug}`} />
					<meta name="twitter:title" content={title} />
					<meta name="twitter:description" content={intro.intro} />
					<meta name="twitter:image" content={featuredImage.file.url} />
					<script type="application/ld+json">
						{`
						{
							"@context": "https://schema.org",
							"@type": "BreadcrumbList",
							"itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "item": {
                                        "@id": "https://vevolmedia.com/blog",
                                        "name": "Blog"
                                    }
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "item": {
                                        "@id": "https://vevolmedia.com/blog/${slug}",
                                        "name": "${title}"
                                    }
                                }
                            ]
						}
					`}
					</script>
					<script type="application/ld+json">
						{`
						{
							"@context": "https://schema.org",
							"@type": "BlogPosting",
							"headline": "${title}",
							"image": "${featuredImage.file.url}",
							"publisher": {
								"@type": "Organization",
								"name": "Vevol Media",
								"url": "https://vevolmedia.com",
								"logo": {
									"@type": "ImageObject",
									"url": "https://vevolmedia.com${publicURL}",
									"width": "912",
									"height": "133"
								}
							},
							"url": "https://vevolmedia.com/blog/${slug}",
							"datePublished": "${dateISO}",
							"dateCreated": "${dateISO}",
							"dateModified": "${dateISO}",
							"description": "${intro.intro}",
							"author": {
								"@type": "Person",
								"name": "${author.name}",
								"url": "https://vevolmedia.com/team/${authorSlug}"
							},
							"mainEntityOfPage": {
								"@type": "WebPage",
								"@id": "https://vevolmedia.com/blog"
							}
						}
					`}
					</script>
				</Helmet>
				<BlogIntro
					title={title}
					image={featuredImageData}
					author={author}
					date={publishedDate}
					intro={intro.intro}
					readingTime={readingTime}
					type={type.title}
				/>
				<VevolSection backgroundColour={'white'}>
					<Container className="blog-content">
						<div className="blog-content__container">
							<div className="blog-content__breadcrumbs">
								<Link to="/">Home</Link>
								<small>/</small>
								<Link to="/blog">Blog</Link>
								<small>/</small>
								<span>{title}</span>
							</div>
							<>{blogContent}</>
							{title === 'The Complete Shopify Checklist for an easy Shopify Store setup' && (
								<div className="klaviyo-form-YAaFdq"></div>
							)}
							{title === 'BFCM Game Changers - Quick Wins for Instant Results' && (
								<div class="klaviyo-form-SJBm8m"></div>
							)}
						</div>
						<div
							className={`table-of-contents__progress-bar ${isTableOfContentsHidden ? 'table-of-contents__progress-bar--hidden' : ''}`}
						>
							<ProgressBar />
							<TableOfContents
								isTableOfContentsHidden={setIsTableOfContentsHidden}
								content={blogContent
									.filter((content) => content?.props?.tag === 'h2' || content?.props?.tag === 'h4')
									.map((content) => {
										return content.props;
									})}
							></TableOfContents>
						</div>
					</Container>
					<Container className={'mt-4em'}>
						<AboutAuthor title={'About the author'} author={author} />
					</Container>
				</VevolSection>
				<SplitNav
					leftTitle={previous ? previous.slug.replaceAll('-', ' ') : 'See all articles'}
					leftUrl={previous ? `/blog/${previous.slug}` : '/blog'}
					rightTitle={next ? next.slug.replaceAll('-', ' ') : 'See all articles'}
					rightUrl={next ? `/blog/${next.slug}` : '/blog'}
				/>
			</Layout>
		</>
	);
}
