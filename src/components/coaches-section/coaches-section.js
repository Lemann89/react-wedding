import React, { Component } from 'react';
import CoachesCard from '../coaches-card';
import HttpService from '../../services/http-service';
import SectionsInfo from '../sections-info';
import './coaches-section.css';
import '../app/app.css';

class CoachesSection extends Component {
    state = {
        coaches: [],
        coachesCards: [
            {   
                number: '01',
                style: ' Disco, Hip-Hop',
                name: ' Alan Walker',
                direction: ' Dancer',
                workExperience: ' 10',
                teachExperience: ' 8',
                id: 1
            },
            {   
                number: '01',
                style: ' Disco, Hip-Hop',
                name: ' Alan Walker',
                direction: ' Dancer',
                workExperience: ' 10',
                teachExperience: ' 8',
                id: 2
            }
        ]
    }

    http = new HttpService();

    async componentDidMount(){
        const response = await this.http.getSectionByType('coach');
        this.setState({coaches : response})
    }

    render() {
        const {coaches, coachesCards} = this.state

        if(!coaches.meta){
            return <p>Loading...</p>
        }

        return (
            <section className='coaches'>
			    <div className='container'>
                    <SectionsInfo title={coaches.meta.title} description={coaches.meta.description} />
                    <div className='coaches__cards'>
                        {
                            coachesCards.map(card => {
                                return <CoachesCard card = {card} key={card.id}/>
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default CoachesSection;
