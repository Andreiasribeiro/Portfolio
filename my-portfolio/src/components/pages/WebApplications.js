import React from 'react';
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function WebApplications() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>WEB APPLICATIONS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-1.png'
                            text="AR MOTOR Garage - full stack project  "
                            text2="See more"
                            path='/gersgarage'
                        />
                        <CardItem
                          src='images/virtualbank5.png'
                          text='RJS Virtual Bank React App'
                          text2="See more"
                          path='/virtualbank'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                           src='images/img-work-6.png'
                           text='Web Application Booking System - in construction '
                           text2="See more"
                           path='/userinterfaces'
                        />
                        <CardItem
                            src='images/img-work-6.png'
                            text='Web Application Booking System - in construction '
                            text2="See more"
                            path='/userinterfaces'
                        />
                    </ul>
                   
                </div>
            </div>
        </div>
    );
}

export default WebApplications
