import React from 'react';
import './about-us.scss';
import { Title, Content } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';

const AboutUs = ({ image, supraheading, heading, text }) => {
	return (
		<div className="about-us has-text-black is-flex mt-6">
			<Fade left>
				<div className="about-us__img">
					<img src={image} alt="company" />
				</div>
			</Fade>

			<div className="about-us__content is-flex is-flex-direction-column is-justify-content-space-between">
				<div className="about-us__titles">
					<Fade top>
						<div className="about-us__supratitle-container is-flex">
							<span className="about-us__supratitle-ex-bullet">
								<span className="about-us__supratitle-in-bullet">
									<svg
										clip-rule="evenodd"
										fill-rule="evenodd"
										stroke-linejoin="round"
										stroke-miterlimit="2"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
									</svg>
								</span>
							</span>

							<Title className="about-us__supratitle" tag="h6" isSize={6}>
								<span>{supraheading}</span>
							</Title>
						</div>
					</Fade>

					<Fade right>
						<Title className="about-us__title" tag="h2" isSize={2}>
							<span>{heading}</span>
						</Title>
					</Fade>
				</div>

				<Fade className="about-us__text" right delay={400}>
					<p>{text}</p>
				</Fade>

				<Fade bottom delay={1200}>
					<Link to="/" className="vm-button vm-button--green">
						Read more
					</Link>
				</Fade>
			</div>
		</div>
	);
};

export default AboutUs;
