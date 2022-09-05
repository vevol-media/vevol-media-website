import React from 'react';
import { Title } from 'bloomer';
import './sidebar-info-text.scss';

export default function SidebarInfoText({ sidebarContent, mainContent, className }) {
	return (
		<div className={`sidebar-info-text ${className ? className : ''}`}>
			<ul className="sidebar-info-text__left mb-0">
				{sidebarContent.map((item, index) => (
					<li key={index}>
						<Title tag="h5" isSize={5}>
							{item.title}
						</Title>
						<p>{item.text}</p>
					</li>
				))}
			</ul>

			<div className="sidebar-info-text__right">
				{mainContent.map((item, index) => (
					<React.Fragment key={index}>
						{item.title ? (
							<Title tag="h4" isSize={4}>
								{item.title}
							</Title>
						) : (
							<></>
						)}
						<p>{item.text}</p>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
