import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from 'bloomer/lib/elements/Title';
import VevolSection from '../general-components/vm-section';
import { Container } from 'bloomer/lib/layout/Container';
import './blog-intro.scss';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export default function BlogIntro({ image, title, author, date, tag, intro, readingTime, type }) {
	return (
		<div className="blog-intro">
			<BgImage image={image}>
				<VevolSection>
					<Container>
						<p className="blog-intro__type">{type}</p>
						<Title>{title}</Title>
						<div className="blog-intro__author">
							<GatsbyImage
								className="author__avatar"
								alt={`${author.name} Avatar`}
								image={getImage(author.avatar.gatsbyImageData)}
							/>
							<div className="author__details">
								<p>{author.name}</p>
								<p>
									{date} &#9679; {`${readingTime} min read`}
								</p>
							</div>
						</div>
					</Container>
				</VevolSection>
			</BgImage>
			<div className="blog-intro__excerpt">
				<Container>{intro}</Container>
			</div>
		</div>
	);
}
