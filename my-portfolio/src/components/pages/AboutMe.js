import React from 'react';
import '../../App.css';




function AboutMe() {
  window.scrollTo(0, 0)
  return (
    <div className='main-container'>
      <video src='/videos/video-3.mp4' playsInline autoPlay loop muted />
      <h1>ANDREIA RIBEIRO</h1>
      <div className="main-banner">
        <div className='banner-left'>
          <div className='banner-left-img'>
          </div>
        </div>
        <div className='banner-right'>

          <p>Hello! <br></br> I am a UI designer and frontend web developer holding a BSc in Industrial Design, Higher Diploma in Science in Computing,
            with overall 10 years of experience in product design, and graphic & illustration design for several B2B and B2C customers in different sectors and industries.
            I bring the design concept to life through a mix of HTML, CSS, and JavaScript, translating UX concepts into code.
            I am also passionate about the arts, and I like drawing and painting to express my creativity. <br></br>
            Welcome to explore this website and know more about my work and skills. Feel free to contact me if you want to obtain more information.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
