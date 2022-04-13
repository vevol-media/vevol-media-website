import React from "react";
import teamList from "../../enums/team-list"
// import { Link, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./team-member.scss";
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
import "./team-member.scss";
import { v4 as uuid } from 'uuid';

const TeamMember = ({ data }) => {

    return (
        <div className="team-container">
          {teamList.map((team, index) => {
        return (
            <div className="card-team" key={uuid()}>
                <CardImage className="card-img-team">
                    {/* <GatsbyImage image={image} alt={avatar} /> */}
                    <StaticImage
                        src="../../images/m.png"
                        alt="avatar"
                        layout="fixed"
                        width={200}
                        height={200}
                        
                       />
                </CardImage>
                <CardContent className="card-content">
                    <Media>
                        <MediaContent className="card-media-content">
                            <Title className="card-title" hasTextAlign={'centered'} isSize={4}>{team.name}</Title>
                            <Subtitle className="card-subtitle" hasTextAlign={'centered'} isSize={6}>{team.role}</Subtitle>
                        </MediaContent>
                    </Media>
                </CardContent>
            </div>
        );
    })}
        </div>
    );

  
};
export default TeamMember;

