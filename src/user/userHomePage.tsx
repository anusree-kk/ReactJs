import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './userHomePage.css';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'
import Footer from '../components/footer'


const UserHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');
        navigate('/login');
        localStorage.setItem('token', '')
        navigate('/login')
    };
    useEffect(() => {
        const userToken = localStorage.getItem('token')
        console.log('token', userToken);
        if (!userToken) {
            navigate('/login')
        }
        if (userToken) {
            navigate('/')
        }
    })
    return (
        <body className='userHomePageBody'>
            <div className="userMainContainer">
                <header className="mainHeader">

                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/appointmentBooking" className="navigationLink">
                            Book an appointment
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>

                <div className="clinicContainer">
                    <About></About>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/originals/f2/ef/37/f2ef37d34b5847b4afbbeb8d3e79474a.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
               <Footer></Footer>
                <div className="widget">Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}

export default UserHome;
