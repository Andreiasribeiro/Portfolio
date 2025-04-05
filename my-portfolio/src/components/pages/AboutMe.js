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

          <p>Hello! <br></br> I am a passionate Web Development and Quality Assurance enthusiast with a BSc in Industrial Design and a Higher Diploma in Science in Computing. With over ten years of experience in product design, graphic design, and illustration for various B2B and B2C clients across diverse industries, I specialize in bringing design concepts to life using HTML, CSS, and JavaScript.
<br></br> My educational background, which blends design and technical expertise, provides me with a unique perspective on product usability and functionality. Currently, I work as a Tech Support Engineer, where I am dedicated to learning and applying QA methodologies, tools, and best practices. In addition to my technical work, I have a strong passion for the arts, channeling my creativity through drawing and painting.
<br></br> Feel free to explore my website. Check out insights about me in {' '}<a href="https://1drv.ms/b/c/cf17f682b336d7a9/EUjlWMmIbJhFsI-EzWcJsdcBDfxHVW6wLfhDDhbgynnsKQ?e=kvhxRP" target="_blank" rel="noopener noreferrer"> data </a>. Reach out if you'd like more information or want to connect.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
