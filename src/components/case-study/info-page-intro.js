import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Content } from 'bloomer';
import './info-page-intro.scss';

const InfoPageIntro = () => {
	return (
		<div>
           <StaticImage
			// src=""
			alt="avatar"
			layout="fullWidth"
		   />

		   <Content>
			   <div>
				<div>
					<h4>Services</h4>
					<p>Text1</p>
				</div>
				<div>
					<h4>Industry</h4>
					<p>Text2</p>
				</div>
			   </div>

			   <div>
					<h4>Overview</h4>
					<p>Text3</p>
				</div>
		   </Content>
		</div>
	);
};
export default InfoPageIntro;