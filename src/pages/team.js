import * as React from "react";
import TeamInfo from "../components/team-section/team-info";
import TeamMember from "../components/team-section/team-member";
import Layout from "../components/layout/layout";
import "../styles/team.scss";

const Team = () => {
    return (
       <Layout>
           <div className="container-section">
                <TeamInfo />
                <div className="container-team-members">
                    <div className="container-team-members-pair">
                        <TeamMember/>
                        <TeamMember/>
                    </div>
                    <div className="container-team-members-pair">
                        <TeamMember/>
                        <TeamMember/>
                    </div>
                </div>
           </div>
       </Layout>
    );
};
export default Team;