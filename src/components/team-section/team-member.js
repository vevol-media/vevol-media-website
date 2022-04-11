import React from "react";
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

const TeamMember = ({ data }) => {
    // const image = getImage(data.file.childImageSharp.fluid);
    // console.log('data', getImage(data))

    return (
        <div className="card-team">
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
                        <Title className="card-title" hasTextAlign={'centered'} isSize={4}>John Wick</Title>
                        <Subtitle className="card-subtitle" hasTextAlign={'centered'} isSize={6}>contabil</Subtitle>
                    </MediaContent>
                </Media>
            </CardContent>
        </div>
    );
};
export default TeamMember;

// export const query = graphql`
//     query MyQuery {
//         file(relativePath: {eq: "m.png"}) {
//             childrenImageSharp {
//             fluid {
//                 src
//                 srcSet
//                 sizes
//             }
//           }
//         }
//     }
// `

