import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import './footer.css';

const footer = () => {
    return (
        <footer>
        <div className='footerNavigations'>
            <div>
                <h6 className='footerHeading'>Our Location</h6>
                <ul className='footerLocationData'>
                    <li className='listItem'>Star City Dental</li>
                    <li className='listItem'>4525 S. 86th Street, #A</li>
                    <li className='listItem'>Lincoln, NE 68526-9277</li>
                    <li className='listItem'>Phone: (402) 858-0525</li>
                    <li className='listItem'>Email: lincoln@starcitydentalne.com</li>
                </ul>
            </div>
            <div>
                <h6 className='footerHeading'>Links</h6>
                <ul className='footerDatalist'>
                    <li className='listItem'> <Link to="/" className="footerDatalist">
                        Home
                    </Link></li>
                    <li className='listItem'> <Link to="/" className="footerDatalist">
                        About Us
                    </Link></li>
                    <li className='listItem'> <Link to="/" className="footerDatalist">
                        Our Services
                    </Link></li>
                    <li className='listItem'> <Link to="/" className="footerDatalist">
                        Blog
                    </Link></li>
                    <li className='listItem'> <Link to="/" className="footerDatalist">
                        Contact Us
                    </Link></li>
                </ul>
            </div>
            <div>
                <h6 className='footerIconHeading'>Stay Connected</h6>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="social">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com/learnbuildteach/"
                    className="social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com/jamesqquick" className="social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com/learnbuildteach"
                    className="social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
            <div className="widget">Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>

    </footer>
    )
}

export default footer;
