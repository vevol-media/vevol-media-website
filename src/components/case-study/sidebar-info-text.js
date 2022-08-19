import React from 'react';
import { Content, Title, Subtitle, Container } from 'bloomer';
import './sidebar-info-text.scss';

export default function SidebarInfoText({ sidebarContent, mainContent, backgroundWhite }) {
	return (
		<div className={backgroundWhite ? 'vm-bg--white' : ''}>
			<Container>
				<Content className="sidebar-info-text">
					<ul className="sidebar-info-text__left mb-0">
						{sidebarContent.map((item, index) => (
							<li key={index}>
								<Subtitle tag="h6">{item.title}</Subtitle>
								<p>{item.text}</p>
							</li>
						))}
					</ul>

					<div className="sidebar-info-text__right">
						{mainContent.map((item, index) => (
							<React.Fragment key={index}>
								{item.title ? <Title tag="h4">{item.title}</Title> : <></>}
								<p>{item.text}</p>
							</React.Fragment>
						))}
					</div>
				</Content>
			</Container>
		</div>
	);
}
