import React from 'react'
import '../../App.css';
import Cards from '../Cards';
import MainSection from '../MainSection';


function Home() {
    //scrolls to a particular set of coordinates in the document 
    window.scrollTo(0, 0)
    return (
        <>
            <MainSection/>
            <Cards/>
        
        </>
    )
}

export default Home;
