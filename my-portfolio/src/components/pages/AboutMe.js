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

          <p>Hello! <br></br> I am a passionate Web Development enthusiast with a BSc in Industrial Design and a Higher Diploma in Science in Computing. With over 10 years of experience in product design, graphic design, and illustration for various B2B and B2C clients across different industries, I bring design concepts to life using HTML, CSS, and JavaScript, effectively translating UX ideas into functional code.
My educational background, which combines design and technical expertise, has given me a unique perspective on product usability and functionality. I also have a deep passion for the arts, often expressing my creativity through drawing and painting.
<br></br> Feel free to explore my website to learn more about my work and skills. If you’d like more information or wish to connect, don’t hesitate to reach out.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
