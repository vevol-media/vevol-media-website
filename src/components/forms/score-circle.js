import React from 'react';

export default function ScoreCircle({ title, score }) {
	const finalScore = 440 - score * 4.4;

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
						r={window.innerWidth < 767 ? 66 : 69.85699}
						cy={window.innerWidth < 767 ? 76 : 81}
						cx={window.innerWidth < 767 ? 76 : 81}
						strokeWidth={window.innerWidth < 767 ? 12 : 15}
						stroke="#444"
						fill="none"
						strokeDasharray={440}
						strokeDashoffset={0}
					/>
					<circle
						id="circle"
						className="score-circle__animated"
						r={window.innerWidth < 767 ? 66 : 69.85699}
						cy={window.innerWidth < 767 ? 76 : 81}
						cx={window.innerWidth < 767 ? 76 : 81}
						strokeWidth={window.innerWidth < 767 ? 12 : 15}
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
