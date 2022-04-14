import React from "react";
import SingleMember from "./single-member";
import teamList from "../../enums/team-list"
import { getImage } from "gatsby-plugin-image";
import "./team-members.scss";

const TeamMembers = ({ data }) => {
    const nodes =  data.allFile.nodes;
    const singleMember = nodes.map((info, index) => {
        const idMember = info.name; 
        let fullName;
        let role;
        let img = getImage(info.childImageSharp.gatsbyImageData);

        teamList.forEach(i => {
            if (i.id === idMember) {
                fullName = i.fullName;
                role = i.role;
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
