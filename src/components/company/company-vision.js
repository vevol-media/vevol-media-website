import React from 'react';
import { Title, Content } from 'bloomer';
import { Link } from 'gatsby';
import Fade from 'react-reveal/Fade';
import './company-vision.scss';

const CompanyVision = ({ heading, subheading, text, image, name, company }) => {
	return (
		<div className="company-vision">
			<div className="company-vision__container mb-6">
				<div className="company-vision__titles heading-block ">
					<Fade top>
						<Title className="company-vision__title mb-0" tag="h2" isSize={2}>
							<span>{heading}</span>
						</Title>
					</Fade>

					<Fade left>
						<Title className="company-vision__subtitle" tag="h6" isSize={6}>
							{subheading}
						</Title>
					</Fade>
				</div>
				<Content className="company-vision__content is-flex is-align-items-center">
					<Fade left delay={400}>
						<p className="company-vision__text">{text}</p>
					</Fade>

					<Fade right>
						<div className="company-vision__owner is-flex is-flex-direction-column is-align-items-center">
							<div className="company-vision__img">
								<img src={image} alt="Vevol Media Logo Owner" />
								/>
							</div>
							<h3 className="company-vision__name has-text-black m-0">{name}</h3>
							<h6 className="company-vision__owner has-text-black mt-1">{company}</h6>
						</div>
					</Fade>
				</Content>
			</div>

			<Fade bottom delay={1200}>
				<div className="company-vision__contact is-flex is-align-items-center">
					<Link to="/">Contact us</Link>
					<span className="is-flex">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
							<path d="M24 12l-9-8v6h-15v4h15v6z" />
						</svg>
					</span>
				</div>
			</Fade>
		</div>
	);
};

export default CompanyVision;
