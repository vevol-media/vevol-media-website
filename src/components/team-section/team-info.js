import React from 'react';
import './team-info.scss';
import { Title, Content } from 'bloomer';

const TeamInfo = () => {
	return (
		<Content className="info-container">
			<div className="info-tilte-section">
				<p>Vevol Media</p>
				<Title tag="h2" isSize={2}>
					Professional work team in their field
				</Title>
			</div>
			<p className="info-details">
				There are many variations of passages of Lorem Ipsum available, but the majority
				have suffered alteration in some form, by injected humour, or randomised words which
				don't look even slightly believable. If you are going to use a passage of Lorem
				Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
				text.{' '}
			</p>
		</Content>
	);
};
export default TeamInfo;
