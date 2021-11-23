import React from 'react'
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function EcoResort() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>Arraial D'Ajuda Eco Resort Website</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-4.png'
                            text="Arraial D'Ajuda Eco Resort Website "
                            text2="See more "
                        />
                    </ul>
                    <h3>More Projects</h3>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-1.png'
                            text="Ger's Garage Web App Project"
                            text2="See more"
                            path='/gersgarage'
                        />
                        <CardItem
                            src='images/img-work-2.png'
                            text='New Way Website Project'
                            text2="See more"
                            path='/newway'
                        />
                        <CardItem
                            src='images/img-work-5.png'
                            text="Ammy George Website Project"
                            text2="See more"
                            path='/ammygeorge'

                        />
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default EcoResort
