import React from 'react';
import './about-author.scss';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

export default function AboutAuthor({ title, author }) {
	return (
		<div className="about-author" id="about-author">
			<div className="about-author__title">
				<h3 className="title is-3">{title}</h3>
			</div>
			<div className="about-author__content">
				<div className="about-author__image">
					<GatsbyImage
						className="author__avatar"
						alt={`${author.name} Avatar`}
						image={getImage(author.avatar.gatsbyImageData)}
					/>
				</div>
				<div className="about-author__text">
					<p>{author.name}</p>
					<p>{author.description.description}</p>
					<Link to={`/blog/author/${author.name.toLowerCase().replaceAll(' ', '-')}`}>
						<span className="vm-button vm-button--black-transparent vm-button--small">
							See all articles
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}
