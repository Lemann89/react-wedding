import React, { Component } from 'react';

export default class MenuList extends Component {
    render(){
        const { title, url } = this.props;

        return(
            <li className="nav__menu__list-item"><a href={ url }> { title } </a></li>
        )
    }
}