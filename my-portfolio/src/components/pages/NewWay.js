import React from 'react'
import '../../App.css';
import './WorkContent.css';

function NewWay() {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <h1>NewWay Website</h1>
            <section>
                <div className="banner-newway">
                </div>
            </section>

            <div className='text-newway'>
                <p>Website layout concept for a sunglasses store</p>
                <p> For additional information about this project please visit:</p>
                <p><a href="https://www.figma.com/file/0ShhXPzpSq9my4otTziIxN/New-Way" target="_blank">Full layout on Figma</a></p>
            </div>
        </div>
    );
}

export default NewWay
