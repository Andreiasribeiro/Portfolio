import React from 'react'
import '../../App.css';


function VirtualBank() {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <h1>RSJ Virtual Bank</h1>
            <section>
                <div className="banner-virtualbank">
                </div>
            </section>

            <div className='text-ammygeorge'>
                <p>Responsive React web-based application layout concept for virtual bank</p>
                <p>Project using React Styled-components</p>
                <p><a href="https://rjsvirtualbank.netlify.app/" target="_blank">Full app online</a></p>
            </div>
        </div>
    );
    
}

export default VirtualBank