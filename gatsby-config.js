require('dotenv').config({
	path: `.env`,
});

module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.vevolmedia.com',
		title: 'Vevol Media',
		description:
			'Shopify store setup, custom theme builds and app development. We are an Ireland based company specialised in Front End Development for eCommerce.',
		author: '@vevolmedia',
		twitterCreator: '@vevolmedia',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-gatsby-cloud',
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `yojwlxn4kmqi`,
				// Learn about environment variables: https://gatsby.dev/env-vars
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				localesToGenerate: ['en-US'],
			},
		},
		{
			resolve: `gatsby-plugin-minify`,
			options: {
				removeAttributeQuotes: true,
				minifyJS: true,
				removeEmptyAttributes: true,
				removeComments: true,
			},
		},
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				// your google analytics tracking id
				trackingId: `G-XTXF9YF0NB`,
				// Puts tracking script in the head instead of the body
				head: true,
				// enable ip anonymization
				anonymize: true,
			},
		},
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				excludes: [`/__generated/*`],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`,
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
	],
};
