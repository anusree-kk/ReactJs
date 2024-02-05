import React,{useEffect} from 'react';
import './pharmacyHome.css';
import { Link,useNavigate } from 'react-router-dom';
import About from '../components/AboutHospital'
import AdditionalFeatures from '../components/additionalFeatures'
import Footer from '../components/footer'

const PharmacyHome = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.setItem('token', '')
        navigate('/login')
    };
    useEffect(()=>{
         const PharmacyToken =  localStorage.getItem('token')
         console.log('token', PharmacyToken);
          if(!PharmacyToken) {
             navigate('/login')
      }
        })
    return (
        <body className='doctorhomePageBody'>
            <div className="mainContainer">
                <header className="mainHeader">
                    <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                    <div className="userNavigationLinks">
                        <Link to="/viewMedicines" className="NavigationLink">
                            Medicines
                        </Link>
                        <Link to="/viewLowStockMedicines" className="NavigationLink">
                            Low Stock Medicines
                        </Link>
                        <Link to="/viewExpiringMedicines" className="NavigationLink">
                            Expiring Medicines List
                        </Link>
                        <Link to="/addMedicine" className="NavigationLink">
                           Add Medicine
                        </Link>
                        <button className="logoutButton" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </header>
                <div className="clinicContainer">
                    <About></About>
                    <div className="imageContainer">
                        <img src="https://i.pinimg.com/564x/0c/1c/1a/0c1c1af72ca90df75be865789bfa26d2.jpg" alt="Clinic" />
                    </div>
                </div>
                <AdditionalFeatures></AdditionalFeatures>
                <Footer></Footer>
            </div>
        </body>
    )
}
export default PharmacyHome;
