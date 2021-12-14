import React from 'react';
import './MainSection.css';
import '../App.css';


function MainSection() {
    return (
        <div className='main-container'>
            <video src='/videos/video-3.mp4' autoPlay loop muted />
            <h1>ANDREIA RIBEIRO</h1>
            <p>Welcome to my website</p>
        </div>
    )
}

export default MainSection
