import React from 'react';
import { Title } from 'bloomer/lib/elements/Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import './pros-cons.scss';

export default function ProsCons({ title, pros, cons }) {
	return (
		<div className="pros-cons">
			<div className="pros-cons__col pros-cons__col--left">
				<Title tag="h5" isSize={4}>
					Pros
				</Title>
				<ul className="pc-col__list">
					{pros.map((item, itemIndex) => (
						<li key={itemIndex}>
							<span className="icon">
								<FontAwesomeIcon icon={faCheck} />
							</span>
							{item}
						</li>
					))}
				</ul>
			</div>
			<div className="pros-cons__col">
				<Title tag="h5" isSize={4}>
					Cons
				</Title>
				<ul className="pc-col__list">
					{cons.map((item, itemIndex) => (
						<li key={itemIndex}>
							<span className="icon">
								<FontAwesomeIcon icon={faTimes} />
							</span>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
