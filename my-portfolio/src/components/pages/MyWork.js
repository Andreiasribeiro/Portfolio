import React from 'react'
import '../../App.css';
import '../Cards.css'
import CardItem from '../CardItem';

function MyWork() {
    window.scrollTo(0, 0)
    return (
        <div className='cards'>
            <h1>MY WORK</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-work-1.png'
                            text='Web Applications  '
                            text2="See more"
                            path='/userinterfaces'
                        />
                        <CardItem
                            src='images/img-work-3.png'
                            text='Websites'
                            text2="See more"
                            path='/userinterfaces'
                        />
                    </ul>

                    <ul className='cards__items'>
                        <CardItem
                            src='images/illustration-dream.jpg'
                            text="Illustration/portrait - 'Dreams'"
                            text2="See more"
                            path='/illustrations'
                        />
                        <CardItem
                            src='images/illustration-colors.jpg'
                            text='Illustration/portrait  - Colors Experience'
                            text2="See more"
                            path='/illustrations'
                        />
                        <CardItem
                            src='images/illustration-poetry.jpg'
                            text='Illustration/portrait  - Poetry Experience'
                            text2="See more"
                            path='/illustrations'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MyWork
