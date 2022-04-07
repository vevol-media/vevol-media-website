import * as React from "react";
import Layout from "../components/layout/layout";
import TeamInfo from "../components/team-section/team-info";
import TheTeam from "../components/team-section/the-team";
import "../styles/team.scss";

const Team = () => {
    return (
       <Layout>
            <div className="team-wrapper">
                <TeamInfo />
                <TheTeam />
            </div>
       </Layout>
    );
};
export default Team;