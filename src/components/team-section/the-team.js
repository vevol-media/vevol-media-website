import React from "react";
import TeamMember from "./team-member";
// import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./the-team.scss";
import {
    Title,
    CardImage,
    Image,
    CardContent,
    Media,
    MediaContent,
    Subtitle,
    Card }
from "bloomer";


const TheTeam = ({ data }) => {

    return (
        <div className="team-container">
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
            <TeamMember/>
        </div>
    );
};
export default TheTeam;