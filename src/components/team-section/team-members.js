import React from "react";
import SingleMember from "./single-member";
import teamList from "../../enums/team-list"
import { getImage } from "gatsby-plugin-image";
import "./team-members.scss";

const TeamMembers = ({ data }) => {
    const nodes =  data.allFile.nodes;
    const singleMember = nodes.map((image, index) => {
        const idMember = image.name; 
        let fullName;
        let role;
        let img = getImage(image.childImageSharp.gatsbyImageData);

        teamList.forEach(info => {
            if (info.id === idMember) {
                fullName = info.fullName;
                role = info.role;
            }
        } );
            
        return (
            <SingleMember role={role} fullName={fullName} img={img}  key={index}/>
        );
    });
    
    return (
        <div className="team-container">
            {singleMember}
        </div>
    );

  
};
export default TeamMembers;
