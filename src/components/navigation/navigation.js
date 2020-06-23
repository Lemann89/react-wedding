import React, { Component } from 'react';
import MenuList from '../menu-list'
import HttpService from '../../services/http-service'
import './navigation.css'
import '../app/app.css'

export default class Navigation extends Component {
    state = {
        navigation: []
    }

    http = new HttpService();

    async componentDidMount(){
        const response = await this.http.getSectionByType('navigation')
        this.setState({navigation : response})
    }
    
    render(){
        const { navigation } = this.state;

        if(!navigation.content){
            return <p>Loading...</p>
        }

        return(
            <header className="header">
                <div className="container">
                    <div className="nav-container">
                        <a href="/#" className="logo">
                            { navigation.meta.title }
                        </a>
                        <nav className="nav ">
                            <div className="nav__menu">
                                <h3 className="nav__menu-heading">Menu</h3>
                                    <ul className="nav__menu__list" >
                                        {
                                            navigation.content.map((item) => {
                                                return <MenuList key={ item._id } title={ item.title } url={ item.url }/>
                                            })
                                        }
                                    </ul>
                                <button className="nav__menu-button">
                                   { navigation.action.title }
                                </button>
                                <button className="start-btn start-btn--nav">
                                    Let’s start
                                </button>
                                <span className="nav__menu-line"></span>
                            </div>
                        </nav>
                        <div className="burger">
                            <span className="burger-menu"></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}