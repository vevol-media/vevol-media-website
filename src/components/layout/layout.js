import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import Fade from "react-reveal/Fade";
import { Cursor } from "../cursor/cursor";
import { useSpring, animated } from "react-spring";

export default function Layout({ children }) {
    const [animatedProps, setAnimatedProps] = useSpring(() => ({
        transform: `translate3d(0px, 0px, 0)`,
    }));

    const handleMouseMove = (event) => {
        setAnimatedProps({
            transform: `translate3d(${event.clientX}px, ${event.clientY}px, 0)`,
        });
    };
    return (
        <Fade>
            <div onMouseMove={handleMouseMove} role="document">
                <div className="cursor-container">
                    <animated.div
                        style={animatedProps}
                        className="cursor-wrapper"
                    >
                        <Cursor />
                    </animated.div>
                </div>
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </Fade>
    );
}
