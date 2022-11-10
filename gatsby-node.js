const redirects = require('./redirects.json');
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createRedirect, createPage } = actions;
	const response = await graphql(`
		query {
			allContentfulBlogPost {
				nodes {
					slug
				}
			}
			allContentfulAuthor {
				nodes {
					name
				}
			}
		}
	`);

	response.data.allContentfulBlogPost.nodes.forEach((node) => {
		createPage({
			path: `/blog/${node.slug}`,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				slug: node.slug,
			},
		});
	});

	response.data.allContentfulAuthor.nodes.forEach((node) => {
		const authorUrl = node.name.toLowerCase().replace(' ', '-');

		createPage({
			path: `/blog/author/${authorUrl}`,
			component: path.resolve(`./src/templates/author-articles.js`),
			context: {
				authorName: node.name,
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
