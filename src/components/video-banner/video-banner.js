import React, { useState } from 'react';
import frameZero from '../../images/case-studies/videoframe_0.jpg';
import videoFile from '../../images/case-studies/presentation-video.mp4';

export default function VideoBanner() {
	const [isVideoLoaded, setIsVideoLoaded] = useState(false);

	return (
		<div style={{ width: '100%', position: 'relative' }}>
			{!isVideoLoaded && (
				<img
					src={frameZero}
					alt="Video thumbnail"
					style={{
						width: '100%',
						display: isVideoLoaded ? 'none' : 'block',
					}}
				/>
			)}
			<video
				style={{
					width: '100%',
					display: isVideoLoaded ? 'block' : 'none',
				}}
				src={videoFile}
				autoPlay
				muted
				loop
				onLoadedData={() => setIsVideoLoaded(true)}
				loading="lazy"
			/>
		</div>
	);
}
