import React from 'react';
import Posts from '../Posts/Posts';
import PostShare from '../PostShare/PostShare';
import './postside.css';

const PostSide = () => {
    return (
        <div className='postSide'>
            <PostShare></PostShare>
            <Posts></Posts>
        </div>
    );
};

export default PostSide;