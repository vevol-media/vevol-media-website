import React from "react";
import "./team-section.scss";
import {Title, Content } from "bloomer";

const TeamSection = () => {
    return (
        <Content className="content-team">
            <h1 className="content-title">Company name</h1>
            <Title  className="content-subtitle" isSize={1}>Professional work team</Title>
            <p>Is the component to handle WYSIWYG generated content</p>
        </Content>
    );
};
export default TeamSection;