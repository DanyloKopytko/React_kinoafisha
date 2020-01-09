import React from "react";

import {userAvatar} from "../../assets/imgs";

const userInfo = () => (
    <div>
        <img src={userAvatar} alt="userAvatar"/>
        <p>Welcome John</p>
    </div>
);

export default userInfo;
