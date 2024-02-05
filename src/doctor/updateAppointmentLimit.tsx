import React, {useState } from 'react';
import '../manager/addWorkSchedule.css';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../util/util'
import Footer from '../components/footer'
import  useAuthAndNavigation  from '../components/authentication';


type appointmentLimitData = {
    employeesId: number;
    limit: number;
}
const UpdateAppointmentLimit = () => {
    const { handleLogout } = useAuthAndNavigation('/login');

    const doctorUpdateLimitEnvFile = `${process.env.REACT_APP_updateAppointmentLimit}`
    const doctorUrlFile = `${process.env.REACT_APP_OriginURL}`

    const [formData, setFormData] = useState<appointmentLimitData>({
        employeesId: 0,
        limit: 0,
    })
    const doctorToken = localStorage.getItem('token');
    const doctorHomeNavigate = useNavigate();
    const handleInputChangeOfAppointmentLimit = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleAppointmentLimit = async () => {
        try {
            const response = await fetchData(doctorUpdateLimitEnvFile, formData, doctorToken, doctorUrlFile)
            if (response.ok) {
                console.log('Limit updated');
                doctorHomeNavigate('/doctorHome');
            }
            else {
                const responseData = await response.json();
                console.log('responsedata', responseData);

                if (responseData.response) {
                    console.error('Process failed:');
                }
                else {
                    console.error('Process failed. Please try again later.');
                }
            }
        } catch (err) {
            console.error('Error during Process:', err);
        }
    }
    return (
        <body className='doctorAppointmentLimitBody'>
            <header className="mainHeader">
                <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                <div className="userNavigationLinks">
                    <button className="logoutButton" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
            <div className='doctorUpdateAppointmentLimit'>
                <div className="doctorUpdateAppointmentLimitContainer">
                    <h1 className='headingText'>Set Appointment Limit</h1>
                    <form className='doctorUpdateAppointmentLimitForm'>
                        <div className='dropDownDiv'>
                            <p className='employeesId'> employee Name:</p>
                            <label className='labelClass'>
                                <select className='selectType' name="employeesId" value={formData.employeesId} onChange={(e) => handleInputChangeOfAppointmentLimit(e)}>
                                    <option value="">Select employee</option>
                                    <option value="1">Akash Ravi</option>
                                    <option value="2">Veena Nikhil</option>
                                    <option value="3">Nila Nanda</option>
                                    <option value="4">Shiva Kumar</option>
                                    <option value="5">Nivesh Pandya</option>
                                    <option value="6">Nandhitha Manohar</option>
                                    <option value="7">Sadhak vindhor</option>
                                    <option value="8">Sradha Pandya</option>
                                    <option value="9">Mariya Sandra</option>
                                    <option value="44">AKASH</option>
                                </select>
                            </label>
                        </div>
                        <label className='userText'>Limit of appointment<input
                            type="text"
                            name="limit"
                            value={formData.limit}
                            onChange={(e) => handleInputChangeOfAppointmentLimit(e)}
                        />
                        </label>
                        <button type="button" className='submitButton' onClick={handleAppointmentLimit}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </body>
    )
}

export default UpdateAppointmentLimit;

