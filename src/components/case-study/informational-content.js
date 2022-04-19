import * as React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Content, Title, Container } from 'bloomer';
import './informational-content.scss';

const InformationalContent = (props) => {
	const node = props.data.allFile.nodes;
	const pathName = props.storePath.split('/case-study/').pop();

	const informationalContentPhoto = node.map((img, index) => {
		const image = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName) && img.name.includes('perfomance')) {
			return <BgImage key={index} className="informational-img" image={image} />;
		}
	});

	return (
		<Container className="informational-wrapper">
			<div className="informational-intro-img">{informationalContentPhoto}</div>

			<Content className="informational-content">
				<div className="informational-details">
					<Title tag="h4"> Result &amp; Impact </Title>
					<p>
						Is a long established fact that a reader will be distracted by the readable
						content of a page when looking at its layout
					</p>
				</div>

				<div className="informational-data">
					<span>
						<Title tag="h2"> 4.00% </Title>
						<p>incrase rate</p>
					</span>
					<span>
						<Title tag="h2"> 220%+ </Title>
						<p>incrase conversion</p>
					</span>
					<span>
						<Title tag="h2"> 30% </Title>
						<p>incrased order</p>
					</span>
				</div>
			</Content>
		</Container>
	);
};
export default InformationalContent;
