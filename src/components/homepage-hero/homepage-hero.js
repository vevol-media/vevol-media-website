import React from "react";
import { Container, Title } from "bloomer";
import { Link } from "gatsby";
import "./homepage-hero.scss";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function HomepageHero() {
  return (
    <>
      <div className="homepage-hero">
        <div className="homepage-hero__bg-image">
          <StaticImage
            src="../../images/hero-background-2.jpg"
            alt="Vevol Media - Shopify Partners"
            placeholder="dominantColor"
            quality={100}
          />
        </div>
        <Container>
          <div className="homepage-hero__content">
            <Fade top>
              <p className="">Europe Based</p>
            </Fade>
            <Fade left>
              <Title>Digital Agency You Can Trust</Title>
            </Fade>
            <Fade left delay={400}>
              <p>
                As Shopify partners and experienced developers, we can become a
                pillar of your success story.
              </p>
            </Fade>
            <Fade bottom delay={800}>
              <Link
                to="/"
                className="vm-button vm-button--yellow vm-button--big"
              >
                Let's work together
              </Link>
            </Fade>
          </div>
        </Container>
        <div className="homepage-hero__continue-icon">
          <Fade down delay={3000}>
            <Jump duration={3000} delay={3000}>
              <FontAwesomeIcon icon={faChevronDown} />
            </Jump>
          </Fade>
        </div>
      </div>
    </>
  );
}
