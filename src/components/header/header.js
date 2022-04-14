import React, { useState } from "react";
import { Link } from "gatsby";
import "./header.scss";
import logo from "../../images/logo-vevol-media.svg";
import iconClose from "../../images/icon-close.svg";
import MenuAnimation from "./menu-animation";
import { Container } from "bloomer";

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    return (
        <div className="vm-header">
            <Container>
                <Link to="/" className="vm-header__logo">
                    <img src={logo} alt="Vevol Media Logo" />
                </Link>

                <div className="vm-header__navigation">
                    <Link to="/">Services</Link>
                    <Link to="/">Portfolio</Link>
                    <Link
                        to="/"
                        className="vm-button vm-button--transparent-white"
                    >
                        Start Your Project
                    </Link>
                </div>
                <div
                    className="vm-header__burger"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                        if (e.keyCode === 13) {
                            setIsNavVisible(!isNavVisible);
                        }
                    }}
                    onClick={() => {
                        setIsNavVisible(!isNavVisible);
                    }}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={`vm-header__extra-nav ${
                        isNavVisible ? "show-nav" : ""
                    }`}
                >
                    <Link to="/">Services</Link>
                    <Link to="/">Portfolio</Link>
                    <Link to="/">About Us</Link>
                    <Link to="/frequently-asked-questions">FAQ</Link>
                    <Link to="/">Case Studies</Link>
                    <Link to="/">Contact Us</Link>
                    <Link to="/">Strategic Partnerships</Link>
                    <Link
                        to="/"
                        className="vm-button vm-button--transparent-white"
                    >
                        Start your project
                    </Link>

                    <div
                        className="extra-nav__close"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            console.log(e);
                            if (e.keyCode === 13) {
                                setIsNavVisible(!isNavVisible);
                            }
                        }}
                        onClick={() => {
                            setIsNavVisible(!isNavVisible);
                        }}
                    >
                        <img src={iconClose} alt="Close Menu" />
                    </div>

                    <MenuAnimation />
                </div>
            </Container>
        </div>
    );
}
