import React from 'react';
import ProfileHeader from './ProfileHeader';
import AboutCard from './about/AboutCard';

const About = () => {
    return (
        <>
        <ProfileHeader value={1}/>
        <div>
            <AboutCard/>
        </div>
        </>
    )
}

export default About
