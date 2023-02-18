import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import ProfileCard from '../ProfileCard/ProfileCard';


const Profileside = () => {
    return (
        <div className='profileSide flex flex-col gap-4'>
            <LogoSearch></LogoSearch>
            <ProfileCard></ProfileCard>
            <FollowersCard></FollowersCard>
        </div>
    );
};

export default Profileside;