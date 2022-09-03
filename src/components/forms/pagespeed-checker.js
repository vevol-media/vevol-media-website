import React, { useState } from 'react';
import { Field, Control, Container, Title, Help, Input, Message, MessageHeader, MessageBody } from 'bloomer';
import { Fade } from 'react-reveal';
import { Link } from 'gatsby';
import ScoreCircle from './score-circle';
import './pagespeed-checker.scss';
import VevolSection from '../general-components/vm-section';

export default function PagespeedChecker({ title, subtitle }) {
	const [isChecking, setIsChecking] = useState(false);
	const [isValidUrl, setIsValidUrl] = useState(true);
	const [isFetched, setIsFetched] = useState(false);

	const [performanceScore, setPerformanceScore] = useState(0);
	const [seoScore, setSeoScore] = useState(0);
	const [bestPracticesScore, setBestPracticesScore] = useState(0);
	const [pwaScore, setPwaScore] = useState(0);
	const [averageScore, setAverageScore] = useState(0);

	const validURL = (string) => {
		var pattern = new RegExp(
			'^(https?:\\/\\/)?' + // protocol
				'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
				'((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
				'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
				'(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
				'(\\#[-a-z\\d_]*)?$',
			'i'
		); // fragment locator

		return !!pattern.test(string);
	};

	const formatUrl = (string) => {
		return string.slice(0, 3) === 'www' ? `https://${string}` : string;
	};

	const analyseUrl = async (inputUrl) => {
		setIsValidUrl(true);

		if (validURL(inputUrl)) {
			const url = formatUrl(inputUrl);
			const apiKey = 'AIzaSyAaqDE_7UL_vTOI-S-BobCeoDfjOa_jxog';
			const categories = '&category=performance&category=seo&category=pwa&category=best-practices';
			const apiQuery = `https://sleepy-atoll-73441.herokuapp.com/https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${url}&key=${apiKey}${categories}`;

			setIsChecking(true);
			setIsFetched(false);
			setPerformanceScore(0);
			setBestPracticesScore(0);
			setPwaScore(0);
			setSeoScore(0);

			await fetch(apiQuery)
				.then((response) => response.json())
				.then((json) => {
					// See https://developers.google.com/speed/docs/insights/v5/reference/pagespeedapi/runpagespeed#response

					const results = json.lighthouseResult.categories;

					setPerformanceScore(results['performance'].score * 100);
					setBestPracticesScore(results['best-practices'].score * 100);
					setPwaScore(results['pwa'].score * 100);
					setSeoScore(results['seo'].score * 100);
					setAverageScore((performanceScore + bestPracticesScore + seoScore + pwaScore) / 4);
				})
				.finally(() => {
					setIsChecking(false);
					setIsFetched(true);
				});
		} else {
			setIsValidUrl(false);
		}
	};

	const getResultMessage = (score) =>
		(score > 60 && score < 81 && 'Looks like this could be improved.') ||
		(score > 80 && score < 94 && `That's not bad! Still not perfect though.`) ||
		(score > 93 && `Oh WOW! That's an amazing score!`) ||
		'Oops! This score is defintely something you need to sort out.';

	const getResultMessageTone = (score) =>
		(score > 60 && score < 81 && 'warning') || (score > 80 && 'success') || 'danger';

	return (
		<VevolSection className={'pagespeed-checker'}>
			<Container>
				<Title tag="h2" isSize={2}>
					Check your website's speed
				</Title>
				<p>
					Simply type in your website's URL in the input below and find out what are the PageSpeed scores. It
					can take up to 30 seconds to get the results back. Patience is gold!
				</p>

				<Field>
					<Control>
						<Input placeholder="https://www.vevolmedia.com" />
						<button
							className={`vm-button vm-button--green-alt button ${isChecking && 'is-loading'}`}
							type="submit"
							onClick={(e) => analyseUrl(e.target.previousElementSibling.value)}
						>
							Run Analyser
						</button>
					</Control>
					{!isValidUrl && (
						<Help isColor="warning">URL must be in following format: "https://www.yourwebsite.com"</Help>
					)}
				</Field>

				<div className="pagespeed-checker__scores">
					<Fade bottom>
						<ScoreCircle score={performanceScore} title={'Performance'} />
					</Fade>
					<Fade bottom delay={100}>
						<ScoreCircle score={seoScore} title={'SEO'} />
					</Fade>
					<Fade bottom delay={200}>
						<ScoreCircle score={bestPracticesScore} title={'Best Practices'} />
					</Fade>
					<Fade bottom delay={300}>
						<ScoreCircle score={pwaScore} title={'PWA'} />
					</Fade>
				</div>
				<Fade bottom collapse when={isFetched}>
					<Message className="pagespeed-checker__action" isColor={getResultMessageTone(averageScore)}>
						<MessageHeader>
							<p>Results are in!</p>
						</MessageHeader>
						<MessageBody>
							<p className="pb-4">
								Your average of all 4 scores is <strong>{averageScore}</strong>.{' '}
								<strong>{getResultMessage(averageScore)}</strong> Obviously there is much more to a
								performant website so let's get talking about how can we help.
							</p>
							<Link className="vm-button vm-button--black" to="/contact">
								Contact us
							</Link>
						</MessageBody>
					</Message>
				</Fade>
			</Container>
		</VevolSection>
	);
}
