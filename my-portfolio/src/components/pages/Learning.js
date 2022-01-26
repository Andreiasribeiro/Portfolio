import React from 'react';
import '../../App.css';


function Learning() {
    window.scrollTo(0, 0)
    return (
        <div className='container'>
            <h1>Learning Page</h1>
            <h2>Troubleshoot React</h2>
            <section>
                <div className="banner-ammygeorge">
                </div>
            </section>

            <div className='text-ammygeorge'>
                <p>Switch' is not exported from 'react-router-dom</p>
                <p>npm uninstall react-router-dom</p>
                <p>npm install react-router-dom@5.2.0</p>
                <p><a href="https://www.pexels.com/" target="_blank">Source</a></p>
            </div>

            <h1>VS Extentions</h1>
            <section>
                <div className="banner-ammygeorge">
                </div>
            </section>

            <div className='text-ammygeorge'>
                <p>ES7 React/Redux/GraphQL/React-Native snippets</p>

                <p><a href="https://www.pexels.com/" target="_blank">Source</a></p>
            </div>

            <p>ES7 React/Redux/GraphQL/React-Native snippets</p>
        </div>
    );

}

export default Learning
