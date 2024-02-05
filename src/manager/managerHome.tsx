import React,{ useEffect } from 'react';
import './managerhome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'
import Footer from '../components/footer'

const ManagerHome = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.removeItem('token')
        navigate('/login')
    };
    useEffect(()=>{
         const managerToken =  localStorage.getItem('token')
         console.log('token', managerToken);
          if(!managerToken) {
             navigate('/login')
      }
        })
    return (
        <body className='managerhomePageBody'>
            <div className="mainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/addWorkSchedule" className="navigationLink">
                            Add WorkSchedule
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>
                <div className="clinicContainer">
                    <About></About>
                    <div className="managerHomeImage">
                        <img src="https://i.pinimg.com/564x/f9/c2/9b/f9c29b810bfcc5721dd1920a5eddc686.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
               <Footer></Footer>
            </div>
        </body>
    )
}
export default ManagerHome;
