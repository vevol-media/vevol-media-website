import * as React from "react";
import Layout from "../components/layout/layout";
import TeamInfo from "../components/team-section/team-info";
import TeamMembers from "../components/team-section/team-members";
import { graphql } from 'gatsby';
import "../styles/team.scss";

const Team = ({data}) => {

    return (
       <Layout>
            <div className="team-wrapper">
                <TeamInfo />
            </div>
            <TeamMembers data={data} />
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
