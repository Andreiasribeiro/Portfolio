import React from 'react';
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function Illustrations() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>ILLUSTRATIONS</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/illustration-poetry.jpg'
                            text="Illustration/Portrait - Poetry "
                            text2="See more"
                            path='/illustrations'
                        />
                        <CardItem
                          src='images/illustration-dream.jpg'
                          text="Illustration/Portrait - Poetry "
                          text2="See more"
                          path='/illustrations'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/illustration-colors.jpg'
                            text="Illustration/Portrait - Poetry "
                            text2="See more"
                            path='/illustrations'
                        />
                        <CardItem
                            src='images/illustration-quenga.jpg'
                            text="Illustration/Portrait - Poetry "
                            text2="See more"
                            path='/illustrations'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/illustration-gratitude.jpg'
                            text="Illustration/Portrait - Poetry "
                            text2="See more"
                            path='/illustrations'
                        />
                        <CardItem
                            src='images/illustration-queen.jpg'
                            text="Illustration - Illustration/Portrait - Inspiration"
                            text2="See more"
                            path='/illustrations'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Illustrations
