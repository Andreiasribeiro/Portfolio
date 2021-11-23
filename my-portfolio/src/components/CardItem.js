import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap" >
                        <img src={props.src} alt="Interfaces" className="cards__item__img"></img>
                    </figure>
                    <div className="cards__item__info"></div>
                    <h5 className="cards__item__text">{props.text}</h5>
                    <h3 className="cards__item__p">{props.text2}</h3>
                    <h3 className="cards__item__p">{props.text3}</h3>
                </Link>
            </li>
        </>
    )
}

export default CardItem
