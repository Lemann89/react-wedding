import React from 'react';
import CoachImg1 from '../../assets/img/coaches-1.jpg'
import './coaches-card.css'

const CoachesCard = ({ card }) => {
    return (
        <div className="coaches__card ">
            <div className="coaches__card-img">
                <img src={CoachImg1} alt="coaches-1" />
            </div>
            <div className="coaches__card-content">
                <span className="coaches__card-number"> {card.number} </span>
                <p className="coaches__card-title"> {card.name} </p>
                <p className="coaches__card-subtitle"> {card.direction} </p>
                <ul className="coaches__card-list">
                    <li className="coaches__card-item">
                        <span className="coaches__card-exp">
                            Work experience
                        </span>
                        {card.workExperience} years
                    </li>
                    <li className="coaches__card-item">
                        <span className="coaches__card-exp">
                            Teacher
                        </span>
                        for {card.teachExperience} years
                    </li>
                    <li className="coaches__card-item">
                        <span className="coaches__card-exp">
                            Style
                        </span>
                        { card.style }
                    </li>
                </ul>
                <button className="start-btn start-btn--coach">Let's start</button>
            </div>
        </div>
    );
}

export default CoachesCard;
