import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import ProfileHeader from './ProfileHeader';
import AboutCard from './about/AboutCard';
import {fetchOwnerProfile} from '../../actions/profileAction';

const About = ({fetchOwnerProfile}) => {
    useEffect(() => {
        fetchOwnerProfile()
    }, [fetchOwnerProfile])
    return (
        <>
        <ProfileHeader value={1}/>
        <div>
            <AboutCard/>
        </div>
        </>
    )
}

export default connect(null,{fetchOwnerProfile})(About);
