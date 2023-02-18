import React from 'react';
import { Followers } from '../../Data/FollowersData';
import FollowersCard from '../FollowersCard/FollowersCard';
import InfoCard from '../InfoCard/InfoCard';
import LogoSearch from '../LogoSearch/LogoSearch';

const ProfileLeft = () => {
    return (
        <div className='profileSide'>
            <LogoSearch />
            <InfoCard />
            <FollowersCard></FollowersCard>

        </div>
    );
};

export default ProfileLeft;