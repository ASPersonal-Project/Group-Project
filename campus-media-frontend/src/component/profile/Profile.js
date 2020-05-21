import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import ProfileHeader from './ProfileHeader';
import { fetchOwnerProfile } from '../../actions/profileAction';



const Profile = ({fetchOwnerProfile}) => {
    useEffect(() => {
        fetchOwnerProfile()
    }, [fetchOwnerProfile])

    return (
        <>
            <ProfileHeader value={0}/>
           
        </>
    )
}

export default connect(null,{fetchOwnerProfile})(Profile);
