import React, { Component } from 'react'
import HttpService from '../../services/http-service'
import HeroImg from '../../assets/img/first-dance1.jpg'
import './hero-section.css'

export default class HeroSection extends Component {
    state = { 
        info : []
    }

    http = new HttpService();

    async componentDidMount(){
        const response = await this.http.getSectionByType('info');
        this.setState({info : response})
    }

    render(){
        const {info} = this.state
        
        if(!info.content){
            return <p>Loading...</p>
        }

        return(
            <div className="container">
                <div className="lesson">
                    <div className="lesson__content">
                        <h1 className="lesson__content-title">
                           { info.meta.title }
                        </h1>
                        <h2 className="lesson__content-subtitle">
                            { info.meta.location }
                        </h2>
                        <p className="lesson__content-text">
                            { info.meta.description }
                        </p>
                        <button className="start-btn start-btn--lesson">
                            Let’s start
                        </button>
                    </div>
                    <div className="lesson__bg ">
                        <img src={ HeroImg } alt="background"/>
                    </div>
                </div>
            </div>
        )
    }
}