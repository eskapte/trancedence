import React from "react";
import ProfileSection from "../../components/ProfileSection";
import StatisticSection from "../../components/StatisticSection";

const Profile: React.FC = () => {
    return (
        <section id='profile' className="main-window">
            <ProfileSection/>
			<StatisticSection/>
        </section>
    )
}

export default Profile;