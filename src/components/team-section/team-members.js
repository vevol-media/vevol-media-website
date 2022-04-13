import React from "react";
import SingleMember from "./single-member";
import teamList from "../../enums/team-list"
import { useStaticQuery, graphql } from 'gatsby';
// import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./team-members.scss";

const TeamMembers = ({ data }) => {
    const nodes =  data.allFile.nodes;
    console.log('DataTTT:', nodes)
    const singleMember = nodes.map((m, index) =>  <SingleMember data={data} key={index}/>)
    
    return (
        <div className="team-container">
            {singleMember}
        </div>
    );

  
};
export default TeamMembers;
