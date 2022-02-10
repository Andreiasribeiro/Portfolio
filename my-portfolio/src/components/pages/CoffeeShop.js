import React from 'react'
import '../../App.css';
import './WorkContent.css';

function CoffeeShop() {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <h1>Coffee Shop Website</h1>
            <section>
                <div className="banner-coffeeshop">
                </div>
            </section>

            <div className='text'>
                <p>Website layout concept for a coffee shop</p>
                <p> For additional information about this project please visit:</p>
                <p><a href="https://www.figma.com/file/YghT9WTWoUxbgSqCHZe2HB/Untitled?node-id=0%3A1" target="_blank">Full layout on Figma</a></p>
            </div>
        </div>
    );
}

export default CoffeeShop
