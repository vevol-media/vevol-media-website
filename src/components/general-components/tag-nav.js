import React from 'react';
import { Link } from 'gatsby';

export default function TagNav({ isBuildsPage }) {
	return (
		<nav className="tag-nav" aria-label="Shopify navigation">
			<ul className="tag-nav__list">
				<li>
					{isBuildsPage ? (
						<span className="tag-nav__tag tag-nav__tag--selected" tabIndex={0} aria-current="page">Shopify Builds</span>
					) : (
						<Link className="tag-nav__tag" to="/work">Shopify Builds</Link>
					)}
				</li>
				<li>
					{!isBuildsPage ? (
						<span className="tag-nav__tag tag-nav__tag--selected" tabIndex={0} aria-current="page">Shopify Apps</span>
					) : (
						<Link className="tag-nav__tag" to="/apps">Shopify Apps</Link>
					)}
				</li>
			</ul>
		</nav>
	);
} 