import React, { useState } from 'react';
import { UilPen } from "@iconscout/react-unicons";
import './InfoCard.css';
import ProfileModal from '../ProfileModal/ProfileModal';

const InfoCard = () => {

    const [infoModal, setInfoModal] = useState(false);
    return (
        <div className='InfoCard'>
            <div className='infoHead'>
                <h4 className='font-semibold'>Your Info</h4>
                <div><UilPen width="2rem"
                    height="1.2rem" onClick={() => setInfoModal(true)} ></UilPen></div>
                <ProfileModal
                    infoModal={infoModal}
                    setInfoModal={setInfoModal}
                ></ProfileModal>
            </div>

            <div className="info">
                <span>
                    <b>Status </b>
                </span>
                <span>In Relationship</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives In </b>
                </span>
                <span>Dhaka, Bangladesh</span>
            </div>

            <div className="info">
                <span>
                    <b>Works at </b>
                </span>
                <span>Unilever Ltd</span>
            </div>
            <button className='button logout-button'>Log out</button>
        </div>
    );
};

export default InfoCard;