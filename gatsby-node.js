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

	redirects.forEach((redirect) =>
		createRedirect({
			fromPath: redirect.fromPath,
			toPath: redirect.toPath,
		})
	);
};
