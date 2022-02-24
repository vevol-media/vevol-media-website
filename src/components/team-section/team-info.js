import React from "react";
import "./team-info.scss";
import {Title, Content } from "bloomer";

const TeamInfo = () => {
    return (
        <Content className="content-info-team">
            <div className="content-info-team-titles">
                <h1 className="content-title">Company name</h1>
                <Title  className="content-subtitle" isSize={1}>Professional work team</Title>
            </div>          
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
        </Content>
    );
};
export default TeamInfo;