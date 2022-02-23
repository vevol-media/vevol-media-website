import * as React from "react";
import TeamSection from "../components/team-section/team-section";
import TeamMember from "../components/team-section/team-member";
import Layout from "../components/layout/layout";
import "../styles/team.scss";

const Team = () => {
    return (
       <Layout>
           <div className="container-section">
                <TeamSection className="container-team-section"/>
                <div className="container-team-members">
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                    <TeamMember/>
                </div>
           </div>
       </Layout>
    );
};
export default Team;