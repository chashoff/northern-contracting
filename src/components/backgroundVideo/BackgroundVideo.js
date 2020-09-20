
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
                    <h2 style={{fontSize: '2.8rem', marginBottom: '3rem'}}>Northern is here for you and<br />any projects you need.</h2>
                    <p className="intro-para">Contact us today to show you the northern standard<br /> and everything
                    we do on the daily. Let us show you what sets<br />us apart from the rest of the industry.</p>
                    <a className="btn" href="">Learn More</a>
                </div>
            </div>
        </div>
    )
}

export default BackgroundVideo;