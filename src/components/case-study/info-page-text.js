import * as React from 'react';
import { Content, Title, Subtitle, Container } from 'bloomer';
import './info-page-text.scss';

const InfoPageText = (props) => {
	const lftBar = props.leftBar.map((item, index) => (
		<li key={index} className="is-flex is-flex-direction-column">
			<Subtitle tag="h6"> {item.leftBarTitle} </Subtitle>
			<p> {item.leftBarText} </p>
		</li>
	));

	const pageTextContent = props.contentText.map((content, index) => (
		<p key={index}> {content.text} </p>
	));

	return (
		<div className={props.bg}>
			<Container>
				<Content className="is-flex py-6">
					<ul className="page-text-lext-bar is-flex is-flex-direction-column mt-0">
						{lftBar}
					</ul>

					<div className="page-text-content is-flex is-flex-direction-column is-justify-content-center">
						<Title tag="h4"> {props.contentTitle} </Title>
						{pageTextContent}
					</div>
				</Content>
			</Container>
		</div>
	);
};
export default InfoPageText;
