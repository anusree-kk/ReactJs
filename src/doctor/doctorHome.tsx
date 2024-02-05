import React, { useEffect } from 'react';
import './doctorHome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'
import Footer from '../components/footer'


const DoctorHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.setItem('token', '')
        navigate('/login')
    };
    useEffect(()=>{
         const doctorToken =  localStorage.getItem('token')
         console.log('token', doctorToken);
          if(!doctorToken) {
             navigate('/login')
      }
        })
    return (
        <body className='doctorhomePageBody'>
            <div className="mainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/confirmAppointment" className="navigationLink">
                            Confirm Appointment
                        </Link>
                        <Link to="/addPrescription" className="navigationLink">
                            Add Prescription
                        </Link>
                        <Link to="/updateAppointmentLimit" className="navigationLink">
                            Update Appointment Limit
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>

                    </div>
                </header>
                <div className="clinicContainer">
                    <About></About>
                    <div className="doctorImageContainer">
                        <img src="https://i.pinimg.com/564x/f9/c2/9b/f9c29b810bfcc5721dd1920a5eddc686.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
               <Footer></Footer>
                <div className="widget">Timing : 10.00 am-1.00 pm &amp; 4.00 pm-6.00 pm </div>
            </div>
        </body>
    )
}
export default DoctorHome;
