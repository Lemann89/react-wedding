import React from 'react';
import './sections-info.css'

const SectionsInfo = ({ title, description }) => {
    return(
        <div>
            <h2 className="sections__title " >
                { title }
            </h2>
            <p className="sections__subtitle " >
                { description }
            </p>
        </div>
    )
}
export default SectionsInfo;