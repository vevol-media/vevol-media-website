import React from 'react';

export default function ScoreCircle({ title, score }) {
	const finalScore = 440 - score * 4.4;
	const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

	return (
		<div className="score-circle">
			<p className="score-circle__info">
				<span>{title}</span>
				<span>{score}</span>
			</p>
			<svg width="160" height="160" xmlns="http://www.w3.org/2000/svg">
				<g>
					<title>Layer 1</title>
					<circle
						id="circle"
						r={windowWidth < 767 ? 66 : 69.85699}
						cy={windowWidth < 767 ? 76 : 81}
						cx={windowWidth < 767 ? 76 : 81}
						strokeWidth={windowWidth < 767 ? 12 : 15}
						stroke="#444"
						fill="none"
						strokeDasharray={440}
						strokeDashoffset={0}
					/>
					<circle
						id="circle"
						className="score-circle__animated"
						r={windowWidth < 767 ? 66 : 69.85699}
						cy={windowWidth < 767 ? 76 : 81}
						cx={windowWidth < 767 ? 76 : 81}
						strokeWidth={windowWidth < 767 ? 12 : 15}
						stroke="#22ffb8"
						fill="none"
						strokeDasharray={440}
						strokeDashoffset={finalScore}
					/>
				</g>
			</svg>
		</div>
	);
}
