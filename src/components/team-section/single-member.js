import React from 'react';
import { Title, CardImage, CardContent, Media, MediaContent, Subtitle } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import './single-member.scss';

export default function SingleMember({ role, name, image, topic }) {
	return (
		<div className="card-team hs-list__block--shadow">
			<CardImage className="card-img-team">
				<GatsbyImage image={image} alt={`Vevol Media Team - ${name}`} aspectratio={1 / 1.23} />
			</CardImage>
			<CardContent className="card-content">
				<Media>
					<MediaContent className="card-media-content">
						{name && (
							<Title className="card-title" tag="h2" hasTextAlign={'centered'} isSize={4}>
								{name}
							</Title>
						)}
						{role && (
							<Subtitle className="card-subtitle" tag="h3" hasTextAlign={'centered'} isSize={6}>
								{role}
							</Subtitle>
						)}
						{topic && (
							<Subtitle className="card-topic" tag="h4" hasTextAlign={'centered'} isSize={8}>
								{topic}
							</Subtitle>
						)}
					</MediaContent>
				</Media>
			</CardContent>
		</div>
	);
}
