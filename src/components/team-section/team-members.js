import React from 'react';
import SingleMember from './single-member';
import teamList from '../../enums/team-list';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import './team-members.scss';

export default function TeamMembers() {
	const imagesData = useStaticQuery(graphql`
		query {
			allFile(filter: { relativeDirectory: { eq: "team" } }) {
				nodes {
					name
					childImageSharp {
						gatsbyImageData(placeholder: TRACED_SVG, width: 500, quality: 100)
					}
				}
			}
		}
	`).allFile.nodes;

	return (
		<div className="team-container">
			{teamList.map((member, index) => {
				const memberImageData = imagesData.filter(
					(image) => image.name === member.name.toLowerCase().replace(' ', '-')
				);

				if (memberImageData.length > 0) {
					const memberImageObject = getImage(memberImageData[0].childImageSharp.gatsbyImageData);

					return <SingleMember role={member.role} name={member.name} key={index} image={memberImageObject} />;
				} else {
					return <React.Fragment key={index}></React.Fragment>;
				}
			})}
		</div>
	);
}
