import React from 'react';
import './table-of-contents.scss';
import { useEffect, useState } from 'react';
import iconClose from '../../images/icon-close.svg';

function TableOfContents({ content }) {
	const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);

	const handleToggleOpen = () => {
		isTableOfContentsOpen
			? setIsTableOfContentsOpen(false)
			: setIsTableOfContentsOpen(true);
	};

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target
					.getAttribute('id')
					.toString()
					.replaceAll(' ', '-')
					.replaceAll('/n', '');
				const currentChapter = document.querySelector(
					`.table-of-contents__content a[href="#${id}"]`
				);
				const allChapters = document.querySelectorAll(
					`.table-of-contents__content a`
				);
				if (entry.isIntersecting && currentChapter && allChapters) {
					currentChapter.classList.add('active');
					if (currentChapter.nextElementSibling) {
						currentChapter.nextElementSibling.classList.add(
							'active-next'
						);
					}
					if (currentChapter.previousElementSibling) {
						currentChapter.previousElementSibling.classList.add(
							'active-previous'
						);
					}

					allChapters.forEach((chapter) => {
						if (chapter !== currentChapter) {
							chapter.classList.remove('active');
						}
						if (chapter !== currentChapter.nextElementSibling) {
							chapter.classList.remove('active-next');
						}
						if (chapter !== currentChapter.previousElementSibling) {
							chapter.classList.remove('active-previous');
						}
					});
				}
			});
		});

		const headings = document.querySelectorAll(
			'.blog-content__container h2, .blog-content__container h4'
		);
		headings.forEach((heading) => {
			observer.observe(heading);
		});
	}, []);

	const contentRender = content
		.filter((content) => content.children !== null)
		.map((item) => {
			return (
				<a
					href={`#${item.children
						.toString()
						.replaceAll(' ', '-')
						.replaceAll('/n', '')}`}
				>
					<span className={`table-of-contents__${item.tag}`}>
						{item.children}
					</span>
				</a>
			);
		});

	if (content.length < 2) {
		return '';
	}

	return (
		<div
			className={`table-of-contents ${
				isTableOfContentsOpen === true ? 'table-of-contents__open' : ''
			}`}
			onClick={() => handleToggleOpen()}
			role="button"
			tabIndex={0}
			onKeyDown={() => {
				handleToggleOpen();
			}}
		>
			<div className="table-of-contents__title">
				<h5>Table of contents</h5>

				<div
					className="extra-nav__close"
					role="button"
					tabIndex={0}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							handleToggleOpen();
						}
					}}
					onClick={() => {
						handleToggleOpen();
					}}
				>
					<img src={iconClose} alt="Close Menu" />
				</div>
			</div>
			<div className="table-of-contents__content">{contentRender}</div>
		</div>
	);
}

export default TableOfContents;
