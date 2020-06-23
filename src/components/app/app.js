import React, { Component } from 'react';
import Navigation from '../navigation'
import HeroSection from '../hero-section'
import ServicesSection from '../services-section'
import OfferSection from '../offer-section'
import CoachesSection from '../coaches-section/coaches-section';
import Footer from '../footer'
import AuthModal from '../auth-modal'
import LogoutButton from '../logout-button'
import EditNavigationModal from '../edit-navigation-modal'
import TokenService from '../../services/token-service';
import './app.css'


export default class App extends Component{

  state = {
    isUserLogined : false
  }

  componentDidMount(){
    const token = new TokenService();
    if(token.getToken()){
      this.setState({isUserLogined : true})
    }
  }

  render(){
    return(
      <div>
        {
          !this.state.isUserLogined ? <AuthModal /> :  <div><EditNavigationModal /><LogoutButton /></div> 
        }
        <Navigation />
        <HeroSection />
        <ServicesSection />
        <OfferSection />
        <CoachesSection />
        <Footer />
      </div>
    )
  }
}
