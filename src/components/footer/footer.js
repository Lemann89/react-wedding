import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__flex">
                    <a href="/#" className="footer__logo">
                        Wedding Dance
                    </a>
                    <p className="footer__copyright">
                        Copyright © 2019
                    </p>
                </div>
            </div>
	    </footer>
    )
}

export default Footer;