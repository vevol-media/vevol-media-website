import React from 'react';
import { Container, Title } from 'bloomer';
import './sideway-text-banner.scss';
import Fade from 'react-reveal/Fade';
import calendarInfo from '../../enums/general';
import { Parallax } from 'react-parallax';

export default function SidewayText() {
	const today = new Date();
	const day = today.getDate();
	const weekday = calendarInfo.DAYS[today.getDay()];
	const month = calendarInfo.MONTHS[today.getMonth()];
	const year = today.getFullYear();

	return (
		<div
			className="sideway-text vm-section"
			onScroll={() => {
				console.log('asd');
			}}
		>
			<Container>
                <div className="sideway-text__intro">
                    {/* <div className="intro__time">
                        <Fade top duration={300}>
                            <span>Today is</span>
                        </Fade>
                        <Fade delay={600}>
                            <span>{weekday}</span>
                        </Fade>
                        <Fade bottom delay={900}>
                            <span>{`${day} ${month} ${year}`}</span>
                        </Fade>
                    </div> */}
                    <div className="intro__text">
                        <Fade>
                            <p>
                                You've already waited for too long. Your business
                                needs something better.
                            </p>
                        </Fade>
                    </div>
                </div>
            </Container>
			<div className="sideway-text__blocks">
				<Parallax
					strength={200}
					renderLayer={(percentage) => (
						<div>
							<p
								style={{
									left: -200 + percentage * 150,
								}}
							>
								{[...Array(10)].map((x, i) => (
									<span key={i}>Fresh</span>
								))}
							</p>
							<p
								style={{
									left: -800 + percentage * 400,
								}}
							>
								{[...Array(10)].map((x, i) => (
									<span key={i}>Bold</span>
								))}
							</p>
							<p
								style={{
									right: percentage * 200,
								}}
							>
								{[...Array(10)].map((x, i) => (
									<span key={i}>Effective</span>
								))}
							</p>
						</div>
					)}
				></Parallax>
			</div>
			<Container>
				<Title tag="h2" className="sideway-text__heading">
					<Fade left>
						<span>We</span>
					</Fade>
					<Fade top delay={750}>
						<span>Can</span>
					</Fade>
					<Fade right delay={1500}>
						<span>Help</span>
					</Fade>
				</Title>
			</Container>
		</div>
	);
}
