import React from 'react';
import './table-of-contents.scss';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

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
					const id = entry.target.getAttribute('id').toString().replaceAll(' ', '-').replaceAll('/n', '');
					const currentChapter = document.querySelector(`.table-of-contents__chapter[data-id="${id}"]`);
					const allChapters = document.querySelectorAll(`.table-of-contents__chapter`);

					if (id !== 'about-author' && id !== 'header') {
						isTableOfContentsHidden(false);

						if (entry.isIntersecting && currentChapter && allChapters) {
							allChapters.forEach((chapter) => {
								chapter.classList.remove('active');
							});
							currentChapter.classList.add('active');
						}
					} else {
						allChapters.forEach((chapter) => {
							chapter.classList.remove('active');
						});

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
	}, []);

	const contentRender = content
		.filter((item) => item.children || item.children.length !== 0)
		.map((item) => {
			let id = `${item.children.toString().replaceAll(' ', '-').replaceAll('/n', '')}`;
			return (
				<div
					className="table-of-contents__chapter"
					data-id={id}
					onClick={(event) =>
						scrolltoId(event, `${item.children.toString().replaceAll(' ', '-').replaceAll('/n', '')}`)
					}
					onKeyPress={(event) =>
						scrolltoId(event, `${item.children.toString().replaceAll(' ', '-').replaceAll('/n', '')}`)
					}
					role="button"
					tabIndex="0"
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
