import React from "react";
import "./team-section.scss";
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

const TeamMember = () => {
    return (
        <Card className="card-team">
            <CardImage className="card-img-team">
                <Image isRatio='8x8'src='https://via.placeholder.com/96x96' />
            </CardImage>
            <CardContent className="card-content">
                <Media>
                    <MediaContent className="card-media-content">
                        <Title className="card-title" hasTextAlign={'centered'} isSize={4}>John Wick</Title>
                        <Subtitle className="card-subtitle" hasTextAlign={'centered'} isSize={6}>contabil</Subtitle>
                    </MediaContent>
                </Media>
            </CardContent>
        </Card>
    );
};
export default TeamMember;