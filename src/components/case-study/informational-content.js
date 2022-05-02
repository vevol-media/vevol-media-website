import * as React from 'react';
import { getImage } from 'gatsby-plugin-image';
import { BgImage } from 'gbimage-bridge';
import { Content, Title, Container } from 'bloomer';
import './informational-content.scss';

const InformationalContent = ({data, storePath, informationalText, rateConversion, conversionConversion, orderConversion}) => {
	const node = data.allFile.nodes;
	const pathName = storePath.split('/case-study/').pop();

	const informationalContentPhoto = node.map((img, index) => {
		const image = getImage(img.childImageSharp.gatsbyImageData);

		if (img.name.includes(pathName) && img.name.includes('perfomance')) {
			return <BgImage key={index} className="informational-img" image={image} />;
		}

		return null;
	});

	return (
		<Container className="informational-wrapper">
			<div className="informational-intro-img">{informationalContentPhoto}</div>

			<Content className="informational-content">
				<div className="informational-details">
					<Title tag="h4"> Result &amp; Impact </Title>
					<p>{informationalText}</p>
				</div>

				<div className="informational-data">
					<span>
						<Title tag="h2">{rateConversion}</Title>
						<p>incrase rate</p>
					</span>
					<span>
						<Title tag="h2">{conversionConversion}</Title>
						<p>incrase conversion</p>
					</span>
					<span>
						<Title tag="h2">{orderConversion}</Title>
						<p>incrased order</p>
					</span>
				</div>
			</Content>
		</Container>
	);
};
export default InformationalContent;
