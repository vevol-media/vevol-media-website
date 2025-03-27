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
	const sidebarItems = Array.isArray(sidebarContent) ? sidebarContent : [sidebarContent];
	const mainItems = Array.isArray(mainContent) ? mainContent : [mainContent];

	const renderContent = (text) => {
		// If text is a React element and its type is 'ul', wrap it in a div
		if (React.isValidElement(text) && text.type === 'ul') {
			return <div>{text}</div>;
		}
		// For arrays (multiple elements), check if any is a ul
		if (Array.isArray(text)) {
			return <div>{text}</div>;
		}
		// Otherwise, render as paragraph
		return <p>{text}</p>;
	};

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
						{sidebarItems.map((item, index) => (
							<li key={index}>
								{item.title && (
									<Title tag="h5" isSize={5}>
										{item.title}
									</Title>
								)}
								{item.text && <p>{item.text}</p>}
								{!item.title && !item.text && item}
							</li>
						))}
					</ul>
				</div>
			)}

			<div className={`sidebar-info-text__right`}>
				{mainItems.map((item, index) => (
					<React.Fragment key={index}>
						{item.title ? (
							<Title tag="h4" isSize={4}>
								{item.title}
							</Title>
						) : (
							<></>
						)}
						{item.text && renderContent(item.text)}
						{!item.title && !item.text && item}
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
