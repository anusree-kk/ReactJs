import React from 'react';
import '../homePage/homePage.css';
import HomePageHeader from '../components/homeHeader'
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'

const HomePage = () => {
    return (
        <body className='homePageBody'>
            <div className="mainContainer">
                <HomePageHeader ></HomePageHeader>
                <div className="clinicContainer">
                    <About/>
                    <div className="imageContainer">
                        <img src="https://www.kevinmd.com/wp-content/uploads/shutterstock_143110750.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
               
                <div className="widget">
                    Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}

export default HomePage;
