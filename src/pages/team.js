import * as React from "react";
import Layout from "../components/layout/layout";
import TeamInfo from "../components/team-section/team-info";
import TeamMember from "../components/team-section/team-member";
import "../styles/team.scss";

const Team = () => {
    return (
       <Layout>
            <div className="team-wrapper">
                <TeamInfo />
                <TeamMember />
            </div>
       </Layout>
    );
};
export default Team;