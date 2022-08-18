import React from 'react';
import { Container, Title } from 'bloomer';
import { Link } from 'gatsby';
import './bottom-CTA.scss';
import Fade from 'react-reveal/Fade';

export default function BottomCTA({ heading, text }) {
	return (
		<div className="bottom-cta">

            <div className="bottom-cta__logos-container">
                <Fade top>
                    <Title>Lets Work Togheter</Title>
                </Fade> 
                <Fade bottom >      
                    <div className="bottom-cta__logos">
                        <img src='shopify' alt="Shopify Logo" />
                        <img src='react' alt="React Logo" />
                    </div>
                </Fade>
            </div>

            <div className="bottom-cta__button-container">
                <Fade top>
                    <p>
                        blajjjkffj  jfaklajfpf
                    </p>
                </Fade>    
                <Fade bottom delay={1200}>
					<Link to="/" className="vm-button vm-button--green">
						Read more
					</Link>
				</Fade>
            </div>
		</div>
	);
}
