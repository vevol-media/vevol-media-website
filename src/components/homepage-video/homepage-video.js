import React, { useEffect, useRef, useState } from 'react';

import './homepage-video.scss';

const YOUTUBE_IFRAME_SRC = 'https://www.youtube.com/iframe_api';

let youtubeApiPromise;

function getYoutubeNamespace() {
	if (typeof window === 'undefined') {
		return undefined;
	}

	return /** @type {any} */ (window).YT;
}

function loadYoutubeApi() {
	if (youtubeApiPromise) {
		return youtubeApiPromise;
	}

	youtubeApiPromise = new Promise((resolve, reject) => {
		if (typeof document === 'undefined') {
			reject(new Error('YouTube API cannot be loaded during server-side rendering.'));

			return;
		}

		const existingScript = document.querySelector(`script[src="${YOUTUBE_IFRAME_SRC}"]`);
		const youtubeNamespace = getYoutubeNamespace();

		if (existingScript) {
			if (youtubeNamespace && typeof youtubeNamespace.ready === 'function') {
				youtubeNamespace.ready(resolve);

				return;
			}

			existingScript.addEventListener('load', () => {
				const readyNamespace = getYoutubeNamespace();

				if (readyNamespace && typeof readyNamespace.ready === 'function') {
					readyNamespace.ready(resolve);

					return;
				}

				reject(new Error('YouTube API failed to initialize.'));
			});

			existingScript.addEventListener('error', reject);

			return;
		}

		const scriptElement = document.createElement('script');

		scriptElement.src = YOUTUBE_IFRAME_SRC;
		scriptElement.async = true;

		scriptElement.onload = () => {
			const onloadNamespace = getYoutubeNamespace();

			if (onloadNamespace && typeof onloadNamespace.ready === 'function') {
				onloadNamespace.ready(resolve);

				return;
			}

			reject(new Error('YouTube API failed to initialize.'));
		};

		scriptElement.onerror = () => {
			reject(new Error('Failed to load the YouTube API script.'));
		};

		document.body.appendChild(scriptElement);
	});

	return youtubeApiPromise;
}

export default function HomepageVideo({ videoId }) {
	const playerContainerRef = useRef(null);

	/** @type {React.MutableRefObject<any>} */
	const playerRef = useRef(null);

	const [isMuted, setIsMuted] = useState(true);

	const [isPlayerReady, setIsPlayerReady] = useState(false);

	const [hasLoadError, setHasLoadError] = useState(false);

	const desiredPlaybackQuality = 'hd1080';

	useEffect(() => {
		let isComponentMounted = true;

		if (!videoId) {
			setHasLoadError(true);

			return undefined;
		}

		loadYoutubeApi()
			.then(() => {
				if (!isComponentMounted || !playerContainerRef.current) {
					return;
				}

				const youtubeNamespace = getYoutubeNamespace();

				if (!youtubeNamespace || !youtubeNamespace.Player) {
					setHasLoadError(true);

					return;
				}

				playerRef.current = new youtubeNamespace.Player(playerContainerRef.current, {
					videoId,
					playerVars: {
						autoplay: 1,
						controls: 0,
						playsinline: 1,
						modestbranding: 1,
						rel: 0,
						showinfo: 0,
						loop: 1,
						playlist: videoId,
						mute: 1,
					},
					events: {
						onReady: (event) => {
							event.target.mute();
							event.target.playVideo();
							event.target.setPlaybackQuality(desiredPlaybackQuality);

							setIsPlayerReady(true);
							setIsMuted(event.target.isMuted());
						},
						onStateChange: (event) => {
							// 1 === YT.PlayerState.PLAYING
							if (event.data === 1) {
								event.target.setPlaybackQuality(desiredPlaybackQuality);
							}
						},
						onError: () => {
							setHasLoadError(true);
						},
					},
				});
			})
			.catch(() => {
				if (isComponentMounted) {
					setHasLoadError(true);
				}
			});

		return () => {
			isComponentMounted = false;

			if (playerRef.current) {
				playerRef.current.destroy();
				playerRef.current = null;
			}

			setIsPlayerReady(false);
		};
	}, [videoId]);

	const handleToggleMute = () => {
		if (!playerRef.current) {
			return;
		}

		if (playerRef.current.isMuted()) {
			playerRef.current.unMute();
			playerRef.current.playVideo();
			setIsMuted(false);

			return;
		}

		playerRef.current.mute();
		setIsMuted(true);
	};

	if (hasLoadError) {
		return null;
	}

	return (
		<section className="homepage-video">
			<div className="homepage-video__frame">
				<div className="homepage-video__player" ref={playerContainerRef} role="presentation" />
				{isPlayerReady && (
					<button
						type="button"
						className="homepage-video__mute-button vm-button vm-button--white"
						onClick={handleToggleMute}
						aria-pressed={!isMuted}
						aria-label={isMuted ? 'Unmute video' : 'Mute video'}
					>
						{isMuted ? 'Unmute' : 'Mute'}
					</button>
				)}
				<div className="homepage-video__overlay">
					<h2 className="homepage-video__title">Shopify Meetup Dublin by Vevol Media</h2>
				</div>
			</div>
		</section>
	);
}

