import React from "react";
import SingleMember from "./single-member";
import teamList from "../../enums/team-list"
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import "./team-members.scss";
import { v4 as uuid } from 'uuid';

const TeamMembers = ({ data }) => {
    // const nodes =  data.allFile.nodes;
    // console.log('Data:', nodes)
    const singleMember = teamList.map((m, index) =>  <SingleMember data={data} key={index}/>)
    
    return (
        <div className="team-container">
            {singleMember}
        </div>
    );

  
};
export default TeamMembers;
