import React from "react";
import { Container, Title, Box } from "bloomer";
import { Link } from "gatsby";
import "./homepage-services.scss";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faAngleDoubleRight,
    faShoppingCart,
    faSearchDollar,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Blob } from "react-blob";

export default function HomepageServices() {
    return (
        <div className="homepage-services">
            <Container>
                <div className="heading-block">
                    <Title tag="h2" isSize={2}>
                        Experience the <span>right</span> way
                    </Title>
                    <p>
                        You deserve quality digital services from people who
                        know their stuff. We do that. That's our promise.
                    </p>
                </div>

                <ul className="homepage-services__list">
                    <Fade bottom delay={250}>
                        <li className="hs-list__block">
                            <FontAwesomeIcon
                                icon={faCode}
                                className="hs-block__icon"
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="hs-block__plus"
                            />
                            <Title tag="h3">Web Development</Title>
                            <p>
                                Text text text text text text text text text
                                text text text text text text text text text
                                text text text text text text text text text.
                            </p>
                            <ul className="hs-block__items">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                            </ul>
                            <Link to="/">Interested?</Link>
                        </li>
                    </Fade>
                    <Fade bottom>
                        <li className="hs-list__block">
                            <FontAwesomeIcon
                                icon={faShoppingCart}
                                className="hs-block__icon"
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="hs-block__plus"
                            />
                            <Title tag="h3">eCommerce Solutions</Title>
                            <p>
                                Text text text text text text text text text
                                text text text text text text text text text
                                text text text text text text text text text.
                            </p>
                            <ul className="hs-block__items">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                            </ul>
                            <Link to="/">Interested?</Link>
                        </li>
                    </Fade>
                    <Fade bottom delay={100}>
                        <li className="hs-list__block">
                            <FontAwesomeIcon
                                icon={faSearchDollar}
                                className="hs-block__icon"
                            />
                            <FontAwesomeIcon
                                icon={faPlus}
                                className="hs-block__plus"
                            />
                            <Title tag="h3">SEO Services</Title>
                            <p>
                                Text text text text text text text text text
                                text text text text text text text text text
                                text text text text text text text text text.
                            </p>
                            <ul className="hs-block__items">
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faAngleDoubleRight}
                                        className="hs-block-items__icon"
                                    />
                                    <p>Text text text text</p>
                                </li>
                            </ul>
                            <Link to="/">Interested?</Link>
                        </li>
                    </Fade>
                </ul>
                <Fade delay={500}>
                    <div className="has-text-centered homepage-sevices__actions">
                        <p>We can do much more than that</p>
                        <Link to="/" className="vm-button vm-button--green">
                            Find out more
                        </Link>
                    </div>
                </Fade>
            </Container>
        </div>
    );
}
