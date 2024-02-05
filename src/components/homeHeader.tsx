import React from 'react';
import { Link } from 'react-router-dom';

const HomePageHeader = () => {
    return (
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/login" className="navigationLink">
                            Login
                        </Link>
                        <Link to="/userSignUp" className="navigationLink">
                            Signup
                        </Link>
                    </div>
                </header>
    )
}

export default HomePageHeader;
