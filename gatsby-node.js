const redirects = require('./redirects.json');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect, createPage } = actions;
	const response = await graphql(`
		query {
			allContentfulBlogPost(sort: { order: DESC, fields: publishedDate }) {
				edges {
					next {
						slug
					}
					node {
						slug
					}
					previous {
						slug
					}
				}
			}
			allContentfulAuthor {
				nodes {
					name
				}
			}
			allContentfulJobPost {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	response.data.allContentfulBlogPost.edges.forEach((edge) => {
		createPage({
			path: `/blog/${edge.node.slug}`,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				slug: edge.node.slug,
				edge: edge,
			},
		});
	});

	response.data.allContentfulAuthor.nodes.forEach((node) => {
		const authorUrl = node.name.toLowerCase().replaceAll(' ', '-');

		createPage({
			path: `/blog/author/${authorUrl}`,
			component: path.resolve(`./src/templates/author-articles.js`),
			context: {
				authorName: node.name,
			},
		});
	});

	response.data.allContentfulJobPost.edges.forEach((edge) => {
		createPage({
			path: `/careers/${edge.node.slug}`,
			component: path.resolve(`./src/templates/job-post.js`),
			context: {
				slug: edge.node.slug,
			},
		});
	});

	redirects.forEach((redirect) =>
		createRedirect({
			fromPath: redirect.fromPath,
			toPath: redirect.toPath,
		})
	);
};
