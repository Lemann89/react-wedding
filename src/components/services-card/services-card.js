import React from 'react'
import ServicesCardList from '../services-card-list'
import './section-card.css'

const ServicesCard = ({card}) => {
    return (
    <div className="services__card ">
        <img className="services__card-img" src={card.img} alt="services" />
        <div className="services__card-content">
            <div className="services__card-title">
                {card.title}
            </div>
            { 
                <ServicesCardList services = { card.services } />
            }
        </div>
    </div>
    )
    
}

export default ServicesCard