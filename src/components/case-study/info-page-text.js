import * as React from 'react';
import { Content, Title, Subtitle } from 'bloomer';
import './info-page-text.scss';

const InfoPageIntro = () => {
	return (
		   <Content className='is-flex py-5'>

			   <div className='is-flex is-flex-direction-column mr-6'>
					<div className='is-flex is-flex-direction-column'>
						<Subtitle tag="h6">Services</Subtitle>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
					</div>
					<div className='is-flex is-flex-direction-column py-3'>
						<Title tag="h6">Industry</Title>
						<p>There are many variations of passages of Lorem Ipsum available</p>
					</div>
			   </div>

			   <div className='is-flex is-flex-direction-column'>
					<Title tag="h6">Overview</Title>
					<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
					<p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
				</div>
		   </Content>
	);
};
export default InfoPageIntro;