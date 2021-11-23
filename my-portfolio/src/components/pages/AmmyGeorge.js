import React from 'react'
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function AmmyGeorge() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>Ammy George Website</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-5.png'
                            text="Ammy George website "
                            text2="See more "
                        />
                    </ul>
                    <div>
                       
                    </div>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-2.png'
                            text='New Way Website Project'
                            text2="See more"
                            path='/newway'
                        />
                        <CardItem
                            src='images/img-work-1.png'
                            text="Ger's Garage Web App Project"
                            text2="See more"
                            path='/gersgarage'
                        />

                        <CardItem
                            src='images/img-work-3.png'
                            text='Coffee Shop Website Project'
                            text2="See more"
                            path='/coffeeshop'
                        />
                    </ul>
                    

                </div>
            </div>
        </div>
    );
}

export default AmmyGeorge
