import React from 'react'
import './services-card-list.css'

const ServicesCardList = ({ services }) => {
    return (
        <div>
            <ul className="services__card-list">
                {
                    services.map((service, id) => {
                        return <li className="services__card-item" key = { id } >{ service }</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ServicesCardList