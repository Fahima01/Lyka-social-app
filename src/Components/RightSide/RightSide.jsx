import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";

import ShareModal from "../ShareModal/ShareModal";
import TrendCard from "../TreandCard/TrendCard";
import StatusModal from "../StatusModal/StatusModal";

const RightSide = () => {
    const [infoModal, setInfoModal] = useState(false);
    return (
        <div className="RightSide">
            <div className="navIcons">
                <img src={Home} alt="" />
                <UilSetting />
                <img src={Noti} alt="" />
                <img src={Comment} alt="" />
            </div>

            <TrendCard />

            <button className="button r-button" onClick={() => setInfoModal(true)}>
                Share Something
            </button>
            <StatusModal
                infoModal={infoModal}
                setInfoModal={setInfoModal}
            ></StatusModal>
        </div>
    );
};

export default RightSide;