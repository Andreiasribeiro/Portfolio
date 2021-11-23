import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';

function Home() {
    window.scrollTo(0, 0)
    return (
        <>
            <MainSection/>
            <Cards/>
        </>
    )
}

export default Home;
