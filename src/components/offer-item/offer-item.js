import React, { Component } from 'react';
import './offer-item.css'

class OfferItem extends Component {
    
    render() {
        const {iconClass, subtitle} = this.props;

        return (
            <div className="offer__item " >
                <i className={'icon ' + iconClass}></i>
                <p className="offer__item-subtitle">
                    {subtitle}
                </p>
			</div>
        );
    }
}

export default OfferItem;
