import React from 'react';
import { Title } from 'bloomer';
import './sidebar-info-text.scss';

export default function SidebarInfoText({
	sidebarContent,
	mainContent,
	className,
	sidebarContentTitle,
	sidebarContentIsList,
}) {
	return (
		<div className={`sidebar-info-text ${className ? className : ''}`}>
			{sidebarContent && (
				<div
					className={`sidebar-info-text__left mb-0 ${
						sidebarContentIsList ? 'sidebar-info-text__left--list' : ''
					}`}
				>
					{sidebarContentTitle && (
						<Title tag="h3" isSize={4}>
							{sidebarContentTitle}
						</Title>
					)}
					<ul>
						{sidebarContent.map((item, index) => (
							<li key={index}>
								{item.title && (
									<Title tag="h5" isSize={5}>
										{item.title}
									</Title>
								)}
								{item.text && <p>{item.text}</p>}
							</li>
						))}
					</ul>
				</div>
			)}

			<div className={`sidebar-info-text__right`}>
				{mainContent.map((item, index) => (
					<React.Fragment key={index}>
						{item.title ? (
							<Title tag="h4" isSize={4}>
								{item.title}
							</Title>
						) : (
							<></>
						)}
						{item.text && <p>{item.text}</p>}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
