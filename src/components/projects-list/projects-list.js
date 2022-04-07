import React from 'react';
import { Container, Title } from 'bloomer';
import './projects-list.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function ProjectsList() {
	return (
		<div className="projects-list vm-section">
			<Container>
				<div className="heading-block">
					<Title tag="h2" isSize={2}>
						Our previously <span>successful</span> projects
					</Title>
					<p>Proven track record of our hard work.</p>
				</div>

				<Splide
					className="projects__list"
					options={{
                        rewind: true,
						perPage: 3,
						gap: '1rem',
					}}
				>
					<SplideSlide>
						<p>slide1</p>
					</SplideSlide>
					<SplideSlide>
						<p>slide2</p>
					</SplideSlide>
					<SplideSlide>
						<p>slide3</p>
					</SplideSlide>
					<SplideSlide>
						<p>slide4</p>
					</SplideSlide>
				</Splide>
			</Container>
		</div>
	);
}
