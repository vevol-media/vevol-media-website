import * as React from "react";
import Layout from "../components/layout/layout";
import TeamInfo from "../components/team-section/team-info";
import TeamMember from "../components/team-section/team-member";
import { graphql } from 'gatsby';
import "../styles/team.scss";

const Team = ({data}) => {

    return (
       <Layout>
            <div className="team-wrapper">
                <TeamInfo />
            </div>
            <TeamMember data={data} />
       </Layout>
    );
};
export default Team;

export const data = graphql`
    query MembersData {
        allFile(filter: {extension: {ne: "svg"}}) {
            nodes {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, placeholder: BLURRED)
                }
            }
        }
    }
`
