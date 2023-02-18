import React from 'react';
import logo from '../../img/logo.jpg';
import { UilSearch } from '@iconscout/react-unicons'
import './LogoSearch.css';

const LogoSearch = () => {
    return (
        <div className='LogoSearch '>
            <img className='w-10 rounded-md' src={logo} alt="" />
            <div className="Search">
                <input type="text" placeholder='#Explore' />
                <div className="s-icon">
                    <UilSearch />
                </div>
            </div>
        </div>
    );
};

export default LogoSearch;