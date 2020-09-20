
import React from 'react';
import Nav from '../navigation';
import './index.css';

const BackgroundVideo = () => {
    const videoSource = "./video/background-video.mp4";
    return (
        <div className="container" >
            <video autoPlay="autoplay" loop="loop" muted className="video" >
                <source src={videoSource} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <Nav />
                <div className="sub-content" >
                    <h1>Northern Contracting</h1>
                    <p>Let us tear some shit up...</p>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;