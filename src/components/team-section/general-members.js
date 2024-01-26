import React from 'react';
import SingleMember from './single-member';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import './team-members.scss';

export default function GeneralMembers({ members }) {
	const imagesData = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "people" } }) {
				nodes {
					name
					childImageSharp {
						gatsbyImageData(placeholder: DOMINANT_COLOR, width: 500, quality: 100)
					}
				}
			}
			file(name: { eq: "no-image-found" }) {
				childImageSharp {
					gatsbyImageData(placeholder: BLURRED, width: 400, quality: 100)
				}
			}
		}
	`);

	return (
		<div className="team-container team-container--general">
			{members.map((member, index) => {
				const memberImageData = imagesData.allFile.nodes.filter((image) => image.name === member.image);
				const memberImageObject =
					memberImageData.length > 0
						? getImage(memberImageData[0].childImageSharp.gatsbyImageData)
						: getImage(imagesData.file.childImageSharp.gatsbyImageData);

				return (
					<SingleMember
						role={member.role}
						name={member.name}
						topic={member.topic}
						key={index}
						image={memberImageObject}
					/>
				);
			})}
		</div>
	);
}
