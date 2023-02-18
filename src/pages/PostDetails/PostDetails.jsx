import React from 'react';
import ProfileLeft from '../../Components/ProfileLeft/ProfileLeft';
import RightSide from '../../Components/RightSide/RightSide';

const PostDetails = () => {
    return (
        <div>
            <div className='Profile'>
                <ProfileLeft />
                <div className='post-details-center'>

                </div>
                <div>
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;