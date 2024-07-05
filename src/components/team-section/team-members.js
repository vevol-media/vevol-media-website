import React from 'react';
import SingleMember from './single-member';
import { getImage } from 'gatsby-plugin-image';
import './team-members.scss';

export default function TeamMembers({ teamMembers }) {
	return (
		<div className="team-container">
			{teamMembers.map((member, index) => (
				<SingleMember key={index} name={member.name} role={member.role} image={getImage(member.image)} />
			))}
		</div>
	);
}
