import Layout from '../components/layout/layout';
import React from 'react';
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
			type {
				title
			}
			publishedDate(formatString: "DD MMM YYYY")
			featuredImage {
				file {
					url
				}
				gatsbyImageData(placeholder: TRACED_SVG, quality: 100, layout: FULL_WIDTH)
			}
			slug
			content {
				raw
				references {
					contentful_id
					__typename
					gatsbyImageData(placeholder: BLURRED, width: 1000, quality: 100)
					title
					description
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

export default function BlogPost({ data }) {
	const { title, publishedDate, featuredImage, content, author, intro, type, slug } = data.pageData;
	const { publicURL } = data.logo;
	const featuredImageData = getImage(featuredImage);
	const authorSlug = author.name.toLocaleLowerCase().replace(' ', '-');
	const dateISO = new Date(publishedDate).toISOString();
	const renderOptions = {
		renderMark: {
			[MARKS.BOLD]: (text) => <strong>{text}</strong>,
		},
		renderNode: {
			[BLOCKS.PARAGRAPH]: (node, children) => <p className={`mb-5`}>{children}</p>,
			[BLOCKS.HEADING_1]: (node, children) => (
				<Title tag="h2" isSize={3}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_2]: (node, children) => (
				<Title tag="h2" isSize={3}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_3]: (node, children) => (
				<Title tag="h3" isSize={4}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_4]: (node, children) => (
				<Title tag="h4" isSize={5}>
					{children}
				</Title>
			),
			[BLOCKS.HEADING_5]: (node, children) => (
				<Title tag="h5" isSize={5}>
					{children}
				</Title>
			),
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				const assetItem = content.references.filter(
					(item) => item.contentful_id === node.data.target.sys.id
				)[0];

				if (assetItem.file.contentType === 'image/gif') {
					return <img className="rte-image" src={assetItem.fixed.src} alt={assetItem.title} />;
				} else {
					const image = getImage(assetItem.gatsbyImageData);

					return <GatsbyImage className="rte-image" alt={assetItem.title} image={image} />;
				}
			},
			[BLOCKS.EMBEDDED_ENTRY]: (node) => {
				const assetItem = content.references.filter(
					(item) => item.contentful_id === node.data.target.sys.id
				)[0];

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
			},
			[INLINES.EMBEDDED_ENTRY]: (node) => {
				const assetItem = content.references.filter(
					(item) => item.contentful_id === node.data.target.sys.id
				)[0];

				return <a href={`/blog/${assetItem.slug}`}>{title}</a>;
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
		<Layout headerBg={'white'} headerIsStatic>
			<Helmet>
				<title>{title} - Vevol Media</title>
				<meta name="description" content={intro.intro} />
				<meta property="og:url" content={`https://www.vevolmedia.com/blog/${slug}`} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={title} />
				<meta property="og:description" content={intro.intro} />
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
					<div className="blog-content__breadcrumbs">
						<Link to="/">Home</Link>
						<small>/</small>
						<Link to="/blog">Blog</Link>
						<small>/</small>
						<span>{title}</span>
					</div>
					<>{blogContent}</>
				</Container>
			</VevolSection>
			<AboutAuthor title={'About the author'} author={author} />
		</Layout>
	);
}
