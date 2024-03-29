import React from 'react';
import { Content, Title } from 'bloomer';
import { Fade } from 'react-reveal';
import './informational-content.scss';

export default function InformationalContent({ title, description, blocks, featuredImage }) {
	return (
		<div className="informational-wrapper">
			<div className="informational-intro-img">{featuredImage}</div>
			<Content className="informational-content">
				<div className="informational-details">
					<Title tag="h3" isSize={2}>
						{title}
					</Title>
					<p>{description}</p>
				</div>

				<Fade bottom cascade>
					<div className="informational-data">
						{blocks.map((block, index) => (
							<span key={index}>
								<Title tag="h4">{block.text}</Title>
								<p>{block.title}</p>
							</span>
						))}
					</div>
				</Fade>
			</Content>
		</div>
	);
}
