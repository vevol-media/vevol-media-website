import React from 'react';
import { Title, CardImage, CardContent, Media, MediaContent, Subtitle } from 'bloomer';
import { GatsbyImage } from 'gatsby-plugin-image';
import './single-member.scss';

const SingleMember = ({ role, fullName, img }) => {
	return (
		<div className="card-team">
			<CardImage className="card-img-team">
				<GatsbyImage
					image={img}
					alt="vevol media member"
					layout="fullWidth"
				/>
			</CardImage>
			<CardContent className="card-content">
				<Media>
					<MediaContent className="card-media-content">
						<Title className="card-title" hasTextAlign={'centered'} isSize={4}>
							{fullName}
						</Title>
						<Subtitle className="card-subtitle" hasTextAlign={'centered'} isSize={6}>
							{' '}
							{role}
						</Subtitle>
					</MediaContent>
				</Media>
			</CardContent>
		</div>
	);
};
export default SingleMember;
