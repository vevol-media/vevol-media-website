import React from "react";
import { Title } from "bloomer";
import { Link } from "gatsby";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faAngleDoubleRight,
    faShoppingCart,
    faSearchDollar,
    faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePanel({
    icon,
    heading,
    intro,
    sublist,
    url,
    delayTime,
}) {
    const iconSwitch = (iconName) => {
        switch (iconName) {
            case "faCode":
                return (
                    <FontAwesomeIcon icon={faCode} className="hs-block__icon" />
                );
            case "faShoppingCart":
                return (
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="hs-block__icon"
                    />
                );
            case "faSearchDollar":
                return (
                    <FontAwesomeIcon
                        icon={faSearchDollar}
                        className="hs-block__icon"
                    />
                );
            default:
                return (
                    <FontAwesomeIcon icon={faCode} className="hs-block__icon" />
                );
        }
    };

    return (
        <Fade bottom delay={delayTime}>
            <li className="hs-list__block">
                {iconSwitch(icon)}
                <FontAwesomeIcon icon={faPlus} className="hs-block__plus" />
                <Title tag="h3">{heading}</Title>
                <p>{intro}</p>
                <ul className="hs-block__items">
                    {sublist.map((item, index) => {
                        return (
                            <li key={index}>
                                <FontAwesomeIcon
                                    icon={faAngleDoubleRight}
                                    className="hs-block-items__icon"
                                />
                                <p>{item}</p>
                            </li>
                        );
                    })}
                </ul>
                <Link to={url}>Interested? Learn More</Link>
            </li>
        </Fade>
    );
}
