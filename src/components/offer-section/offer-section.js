import React, { Component } from 'react';
import SectionsInfo from '../sections-info'
import HttpService from '../../services/http-service'
import OfferItem from '../offer-item';
import './offer-section.css'
import '../app/app.css'

class OfferSection extends Component {
    state = {
        offer : [],
        offerItems : [
            {   iconClass: 'icon-group' , 
                subtitle: 'Talented Coaches',
                id: 1
            }, 
            {   iconClass: 'icon-door' , 
                subtitle: 'Cozy rooms for training',
                id: 2
            }, 
            {   iconClass: 'icon-cup' , 
                subtitle: 'Coffee, tea, and cookies',
                id: 3
            }, 
            {   iconClass: 'icon-body' , 
                subtitle: 'Good physical form',
                id: 4
            }, 
            {   iconClass: 'icon-star' , 
                subtitle: 'Self Confidence and success on your event',
                id: 5
            }, 
            {   iconClass: 'icon-friends' , 
                subtitle: 'Exciting emotions and a lot of fun',
                id: 6
            }, 
            {   iconClass: 'icon-card' , 
                subtitle: 'Great photos from your event',
                id: 7
            }, 
            {   iconClass: 'icon-smile' , 
                subtitle: 'Spend hours together in happiness',
                id: 8
            }
        ]
    }

    http = new HttpService();

    async componentDidMount(){
        const response = await this.http.getSectionByType('offer');
        this.setState({offer : response})
    }

    render() {
        const {offer, offerItems} = this.state

        if(!offer.meta){
            return <p>Loading...</p>
        }

        return (
            <section className="offer">
			    <div className="container">
                    <SectionsInfo title = {offer.meta.title} description = {offer.meta.description}/>
                    <div className="offer__advantages">
                        {
                            offerItems.map(item => {
                                const { id, ...itemProps } = item;
                                return <OfferItem {...itemProps} key={item.id}/>
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default OfferSection;
