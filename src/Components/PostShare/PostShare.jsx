import React, { useState, useRef } from 'react';
import profileImage from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
    const [image, setImage] = useState(null)
    const imgRef = useRef()



    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img),
            });
        }
    };

    return (
        <div className='PostShare'>
            <div className='profileimage'>
                <img src={profileImage} alt="" />
            </div>
            <div className='status'>
                <input type="text" placeholder="What's on your mind?" />
                <div className='postOptions'>
                    <div className="option flex " style={{ color: "var(--photo)", cursor: "pointer" }}
                        onClick={() => imgRef.current.click()}
                    >
                        <UilScenery />
                        Photo
                    </div>
                    <div className="option flex" style={{ color: "var(--video)" }} >
                        <UilPlayCircle />
                        Video
                    </div>
                    <div className="option flex" style={{ color: "var(--location)" }}>
                        <UilLocationPoint />
                        Location
                    </div>
                    <div className="option flex" style={{ color: "var(--shedule)" }} >
                        <UilSchedule />
                        Shedule
                    </div>
                    <button className='button ps-btn'>
                        Share
                    </button>
                    <div className="hidden">
                        <input type="file" name="myImage" multiple accept='image/png, image/jpg, image/webp' ref={imgRef} onChange={onImageChange} />
                    </div>
                </div>
                {image && (

                    <div className="previewImage">
                        <UilTimes onClick={() => setImage(null)} />
                        <img src={image.image} alt="" />
                    </div>

                )}
            </div>

        </div>
    );
};

export default PostShare;