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


     <p>Hello! <br></br>I am a QA Engineer and Web Development enthusiast with a unique background that blends creativity and technical analysis. Holding a BSc in Industrial Design and a Higher Diploma in Science in Computing, I leverage over ten years of experience in product design, technical support, and customer service to approach software quality with a user-centred and detail-oriented mindset.
<br></br> My journey from designing physical products to ensuring digital quality has equipped me with strong analytical thinking, problem-solving skills, and a deep understanding of how users interact with systems. Currently, I focus on manual testing, test case design, bug reporting, and API testing with Postman, while strengthening my QA foundation through structured training and hands-on crowdtesting practice.
<br></br> Feel free to explore my website, check out my projects on {' '}<a href="https://github.com/Andreiasribeiro" target="_blank" rel="noopener noreferrer"> GitHub </a>, or {' '}<a href="https://www.linkedin.com/in/andreiasalesribeiro" target="_blank" rel="noopener noreferrer"> LinkedIn. /a></p>

    
        </div>
      </div>
    </div>
  )
}

export default AboutMe
