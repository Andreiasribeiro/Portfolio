import React from 'react';
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function UserInterfaces() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>USER INTERFACES</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-3.png'
                            text='Coffee Shop Website'
                            text2="See more"
                            path='/coffeeshop'
                        />
                        <CardItem
                            src='images/img-work-4.png'
                            text="Arraial D'Ajuda Eco Resort Web App Booking System"
                            text2="See more"
                            path='/ecoresort'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-5.png'
                            text="Ammy George Web Application Booking System"
                            text2="See more"
                            path='/ammygeorge'
                        />
                        <CardItem
                            src='images/img-work-2.png'
                            text='Website layout concept for a sunglasses store '
                            text2="See more"
                            path='/newway'
                        />
                    </ul>

                   
                </div>
            </div>
        </div>
    );
}

export default UserInterfaces
