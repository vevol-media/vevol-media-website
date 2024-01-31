import React, {useEffect } from 'react';
import {
    Content, Container, Title
} from 'bloomer';
import { IconTopo } from '../../helpers/icons';
import './main-form.scss';
import { Fade } from 'react-reveal';
import VevolSection from '../general-components/vm-section';
import { BgImage } from 'gbimage-bridge';

export default function HubspotForm({ title, subtitle, standalone, backgroundImage }) {

    useEffect(() => {
        const script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.src = "https://js.hsforms.net/forms/embed/v2.js";

        script.addEventListener("load", () => {
            if (window && window.hbspt) {
                window.hbspt.forms.create({
                    region: "eu1",
                    portalId: "143516866",
                    formId: "05c102fd-fd82-469b-84a0-e5cadb5e044f",
                    target: '#form-container'
                });
            }
        });

        document.head.appendChild(script);

        return () => {

            document.head.removeChild(script);
        };
    }, []);

    const formContent = (
        <div id="form-container" className="main-contact__form"></div>
    );

    return (
        <>
            {standalone ? (
                formContent
            ) : (
                <VevolSection className={'main-contact'}>
                    <IconTopo className="main-contact__pattern-one" />
                    <BgImage className="main-contact__background-image" image={backgroundImage} />
                    <Container>
                        <Content className="main-contact__intro">
                            <Fade bottom>
                                <Title tag="h2" isSize={1}>
                                    {title}
                                </Title>
                            </Fade>
                            <Fade bottom delay={100}>
                                <p>{subtitle}</p>
                            </Fade>
                        </Content>
                        {formContent}
                    </Container>
                </VevolSection>
            )}
        </>
    );
}
