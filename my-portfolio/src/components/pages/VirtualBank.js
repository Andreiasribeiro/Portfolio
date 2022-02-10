import React from 'react'
import '../../App.css';
import './WorkContent.css';


function VirtualBank() {
    window.scrollTo(0, 0)

    return (
        <div className='container'>
            <h1>RSJ Virtual Bank</h1>
            <section>
                <div className="banner-virtualbank">
                </div>
            </section>

            <div className='text'>
            <p>Responsive React web-based application layout concept for virtual bank</p>
                <p>Project uses React Styled-components</p>
               <p><a href="https://rjsvirtualbank.netlify.app/" target="_blank">Full app online</a></p>
               <p><a href="https://github.com/Andreiasribeiro/VirtualBank-App" target="_blank">Source code</a></p>
            </div>
        </div>
    );
 
}

export default VirtualBank
