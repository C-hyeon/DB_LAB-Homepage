import React from "react";
import Webcam from "react-webcam";

import '../assets/css/reset.css'
import '../assets/css/style.css'

const Live = () => {
    const videoConstraints = {
        width:500,
        height:500,
        facingMode:"user"
    }

    return (
        <div id='main' className='wrapper'>
            <br/>
            <div className="page__container">
                <br/>
                <h1>DataBase Laboratory</h1>
                <Webcam audio={false} width={600} height={700} videoConstraints={videoConstraints}/>
            </div>
            <br/>
        </div>
    )
}

export default Live