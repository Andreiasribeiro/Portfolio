import React from 'react';
import '../../App.css';




function AboutMe() {
  window.scrollTo(0, 0)
  return (
    <div className='main-container-2'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>ANDREIA RIBEIRO</h1>
      <div className="main-banner">
        <div className='banner-left'>
          <div className='banner-left-img'>
          </div>
        </div>
        <div className='banner-right'>
          <p>I am passionate about art, design, technology, and I like to explore different areas, so I am always experimenting with new techniques and forms of expression in my work.
I have a curious mind, and I am always in search of challenges. I have recently completed a Higher Diploma in Science in Computing [NFQ Level 8] at CCT College Dublin.
I also have a bachelor’s degree in Industrial design, and over 10 years of experience. Now I am seeking employment opportunities in the Technology sector, specifically in front-end development where I can continue to develop new skills whilst building on my existing experience and recent training.
</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
