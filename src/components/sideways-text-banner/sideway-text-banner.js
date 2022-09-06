import React from 'react';
import { Parallax } from 'react-parallax';
import './sideway-text-banner.scss';

export default function SidewayText({
	lineOne,
	lineTwo,
	lineThree,
	backgroundWhite,
	lineOneRepeat = 10,
	lineTwoRepeat = 10,
	lineThreeRepeat = 10,
}) {
	return (
		<div className={`sideway-text ${backgroundWhite ? 'vm-bg--white' : ''}`}>
			<div className="sideway-text__blocks">
				<Parallax
					strength={200}
					renderLayer={(percentage) => (
						<div>
							{lineOne && (
								<p
									style={{
										left: -200 + percentage * 150,
									}}
								>
									{[...Array(lineOneRepeat)].map((x, i) => (
										<span key={i}>{lineOne}</span>
									))}
								</p>
							)}
							{lineTwo && (
								<p
									style={{
										left: -800 + percentage * 400,
									}}
								>
									{[...Array(lineTwoRepeat)].map((x, i) => (
										<span key={i}>{lineTwo}</span>
									))}
								</p>
							)}
							{lineThree && (
								<p
									style={{
										right: percentage * 200,
									}}
								>
									{[...Array(lineThreeRepeat)].map((x, i) => (
										<span key={i}>{lineThree}</span>
									))}
								</p>
							)}
						</div>
					)}
				></Parallax>
			</div>
		</div>
	);
}
