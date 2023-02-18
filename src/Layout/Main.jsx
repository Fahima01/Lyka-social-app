import React from 'react';
import { Outlet } from 'react-router-dom';
import PostSide from '../Components/PostSide/PostSide';
import Profileside from '../Components/Profileside/Profileside';
import RightSide from '../Components/RightSide/RightSide';

const Main = () => {
    return (
        <div className='home'>
            <Profileside></Profileside>
            <div className='postSide'>
                <Outlet></Outlet>
            </div>
            <div className='rightSide'>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default Main;