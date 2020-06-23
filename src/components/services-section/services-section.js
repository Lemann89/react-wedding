import React, { Component } from 'react'
import SectionsInfo from '../sections-info'
import HttpService from '../../services/http-service'
import ServicesCard from '../services-card'
import ServiceImg1 from '../../assets/img/services-1.jpg'
import ServiceImg2 from '../../assets/img/services-2.jpg'
import ServiceImg3 from '../../assets/img/services-3.jpg'
import './services-section.css'
import '../app/app.css'

export default class ServicesSection extends Component {
    state = {
        service : [],
        servicesCards : [
            { 
                img: ServiceImg1, 
                title: 'For Bride and Groom', 
                services: [ 'First Dance', 'Parent & Child Dance'],
                id : 0
            }, 
            { 
                img: ServiceImg2, 
                title: 'For Guests', 
                services: [ 'Groomsmen Dance', 'Parent Dance', 'Children’s Dance'],
                id : 1
            }, 
            { 
                img: ServiceImg3, 
                title: 'Other events', 
                services: [ 'Bridal Party Dance', 'Anniversary Dance'],
                id : 2
            }
        ]
    }

    http = new HttpService();

    async componentDidMount(){
        const response = await this.http.getSectionByType('service');
        this.setState({service : response})
    }

    render() {
        const { service, servicesCards } = this.state

        if(!service.content){
            return <p>Loading...</p>
        }

        return (
            <div className="container">
                <SectionsInfo title={service.meta.title} description={service.meta.description}/>
                <div className="services__cards">
                {
                    servicesCards.map(card => {
                        return  <ServicesCard card = { card } key = { card.id }/>
                    })
                }
                </div>
            </div>
        )
    }
}
