import React from 'react'
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function GerGarage() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>Ger's Garage Web App</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-1.png'
                            text="Ger's Garage Web Application Booking System- full stack project  "
                            text2="See more "
                        />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-2.png'
                            text='New Way Website Project'
                            text2="See more"
                            path='/newway'
                        />
                        <CardItem
                            src='images/img-work-3.png'
                            text='Coffee Shop Website Project'
                            text2="See more"
                            path='/coffeeshop'
                        />
                        <CardItem
                            src='images/img-work-4.png'
                            text="Arraial D'Ajuda Eco Resort Website Project"
                            text2="See more"
                            path='/ecoresort'
                        />
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default GerGarage
