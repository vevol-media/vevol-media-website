import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Content, Title, Subtitle } from 'bloomer';
import './informational-content.scss';

const InformationalContent = () => {
	return (
		<div className='informational-wrapper'>
            <div className="informational-intro-img">
				<StaticImage
					className="informational-img"
					src='../../images/result-impact/margee-impact.png'
					layout="fullWidth"
					alt="hero background"
					placeholder="blurred"
					transformOptions={{ fit: 'cover', cropFocus: 'attention' }}
				/>
			</div>

			<Content className='informational-content'>
				<div className='informational-details'>
					<Title tag="h4"> Result &amp; Impact </Title>
					<p>Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
				</div>

				<div className='informational-data'>
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
		</div>
	);
};
export default InformationalContent;