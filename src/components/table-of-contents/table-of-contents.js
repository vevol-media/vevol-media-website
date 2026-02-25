import React from 'react';
import './table-of-contents.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function getHeadingText(children) {
	if (children == null) return '';
	if (typeof children === 'string' || typeof children === 'number') return String(children).trim();
	if (Array.isArray(children)) return children.map(getHeadingText).join('').trim();
	if (typeof children === 'object' && children.props?.children !== undefined) {
		return getHeadingText(children.props.children);
	}
	return '';
}

function toId(text) {
	return getHeadingText(text).replace(/\s+/g, '-').replace(/\n/g, '') || 'heading';
}

function TableOfContents({ content, isTableOfContentsHidden }) {
	const [isTableOfContentsOpen, setIsTableOfContentsOpen] = useState(false);

	const handleToggleOpen = () => {
		isTableOfContentsOpen ? setIsTableOfContentsOpen(false) : setIsTableOfContentsOpen(true);
	};

	const scrolltoId = (event, id) => {
		event.stopPropagation();

		const title = document.getElementById(id);

		title.scrollIntoView();
		setIsTableOfContentsOpen(false);
	};

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const rawId = entry.target.getAttribute('id');
					const id = rawId != null ? String(rawId).replace(/\s+/g, '-').replace(/\n/g, '') : '';
					const isValidId = id && !id.includes('object');

					if (id !== 'about-author' && id !== 'header') {
						isTableOfContentsHidden(false);

						if (entry.isIntersecting && isValidId) {
							try {
								const currentChapter = document.querySelector(
									`.table-of-contents__chapter[data-id="${id}"]`
								);
								const allChapters = document.querySelectorAll('.table-of-contents__chapter');
								if (currentChapter && allChapters.length) {
									allChapters.forEach((chapter) => chapter.classList.remove('active'));
									currentChapter.classList.add('active');
								}
							} catch (_) {
								// invalid selector, skip
							}
						}
					} else {
						const allChapters = document.querySelectorAll('.table-of-contents__chapter');
						allChapters.forEach((chapter) => chapter.classList.remove('active'));
						isTableOfContentsHidden(true);
					}
				});
			},
			{ rootMargin: '0% 0px -50% 0px' }
		);

		const headings = document.querySelectorAll('.blog-content__container h2, .blog-content__container h4');
		const footer = document.querySelector('.about-author');
		const header = document.querySelector('.vm-header');

		headings.forEach((heading) => {
			observer.observe(heading);
		});

		observer.observe(footer);
		observer.observe(header);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const contentRender = content
		.filter((item) => getHeadingText(item.children).length > 0)
		.map((item, key) => {
			const id = toId(item.children);

			return (
				<div
					className="table-of-contents__chapter"
					data-id={id}
					onClick={(e) => scrolltoId(e, id)}
					onKeyPress={(e) => scrolltoId(e, id)}
					role="button"
					tabIndex={0}
					key={key}
				>
					<span className={`table-of-contents__${item.tag}`}>{item.children}</span>
				</div>
			);
		});

	if (content.length < 2) {
		return '';
	}

	return (
		<div
			className={`table-of-contents ${isTableOfContentsOpen === true ? 'table-of-contents__open' : ''}`}
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
					className="table-of-contents__toggle"
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
					<FontAwesomeIcon icon={faChevronDown} />
				</div>
			</div>
			<div className="table-of-contents__content" role="button" tabIndex="0">
				{contentRender}
			</div>
		</div>
	);
}

export default TableOfContents;
