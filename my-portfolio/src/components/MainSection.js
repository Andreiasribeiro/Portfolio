import React from 'react';
import './MainSection.css';



function MainSection() {
    return (
        <div className='main-container'>
            <video src='/videos/video-7.mp4' playsInline autoPlay loop muted />
            <h1>ANDREIA RIBEIRO</h1>
            <p>Welcome to my website</p>
        </div>
    )
}

export default MainSection
