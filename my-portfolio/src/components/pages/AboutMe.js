import React from 'react';
import '../../App.css';




function AboutMe() {
  window.scrollTo(0, 0)
  return (
    <div className='main-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>ANDREIA S RIBEIRO</h1>
      <div className="main-banner">
        <div className='banner-left'>
          <div className='banner-left-img'>
          </div>
        </div>
        <div className='banner-right'>
          <p>I convert customer problems and business requirements into elegant design solutions. I am passionate about art, crafts, technology and I am always in search of challenges.

            I have a bachelor's degree in graphic design from the Federal University of Bahia-Brazil and a higher diploma in science in computing from CCT College Dublin-Ireland.

            I have a curious mind, and I like to explore different areas, so I am always experimenting with new techniques and forms of artistic expression in my work.

            I also love drawing, in particular, portraits as you can see on the 'Illustrations' page on this website.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
