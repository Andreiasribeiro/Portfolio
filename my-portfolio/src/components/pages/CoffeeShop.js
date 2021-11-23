import React from 'react'
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function CoffeeShop() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>Coffee Shop Website</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-3.png'
                            text="Coffee Shop website "
                            text2="See more " 
                        />
                    </ul>
                   
                    <ul className='cards__items'>
                    <CardItem
                            src='images/img-work-4.png'
                            text="Arraial D'Ajuda Eco Resort Website Project"
                            text2="See more"
                            path='/ecoresort'
                        />
                        <CardItem
                            src='images/img-work-5.png'
                            text="Ammy George Website Project"
                            text2="See more"
                            path='/ammygeorge'
                        />
                        <CardItem
                             src='images/img-work-1.png'
                             text="Ger's Garage Web App Project"
                             text2="See more"
                             path='/gersgarage'
                        />
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default CoffeeShop
