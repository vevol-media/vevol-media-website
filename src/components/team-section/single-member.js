import React from "react";
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
import { StaticImage } from "gatsby-plugin-image";

const SingleMember = ({ data }) => {
    // const nodes =  data.allFile.nodes;
    console.log('DataSM:', data)
       
    return (
            <div className="card-team">
                <CardImage className="card-img-team">
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
                            <Title className="card-title" hasTextAlign={'centered'} isSize={4}>T name</Title>
                            <Subtitle className="card-subtitle" hasTextAlign={'centered'} isSize={6}> T role</Subtitle>
                        </MediaContent>
                    </Media>
                </CardContent>
            </div>
        );
};
export default SingleMember;
