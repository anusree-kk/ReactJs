import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addWorkSchedule.css';
import { fetchData } from '../util/util'
import Footer from '../components/footer'


type employeeWorkscheduleData = {
    date: string;
    timeFrom: string;
    timeTo: string;
    employeesId: number;
    department: string;
}
const AddWorkSchedule = () => {

    const managerenvFile = `${process.env.REACT_APP_employeeWorkschedule}`
    const managerUrlFile = `${process.env.REACT_APP_OriginURL}`

    const [formData, setFormData] = useState<employeeWorkscheduleData>({
        date: '',
        timeFrom: '',
        timeTo: '',
        employeesId: 0,
        department: '',
    })
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.removeItem('token')
        navigate('/login')
    };
    const managerToken = localStorage.getItem('token')
    useEffect(() => {
        console.log('token', managerToken);
        if (!managerToken) {
            navigate('/login')
        }
    })
    const employeeHomeNavigate = useNavigate();
    const handleInputChangeOfEmployeeWorkscheduleData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleEmployeeWorkschedule = async () => {
        try {
            const response = await fetchData(managerenvFile, formData, managerToken, managerUrlFile)
            if (response.ok) {
                console.log('Workschedule added');
                employeeHomeNavigate('/managerHome');
            }
            else {
                const responseData = await response.json();
                console.log('responsedata', responseData);

                if (responseData.message) {
                    console.error('Process failed:');
                } else {
                    console.error('Process failed. Please try again later.');
                }
            }
        } catch (err) {
            console.error('Error during Process:', err);
        }
    }
    return (
        <body className='managerWorkscheduleBody'>
            <header className="mainHeader">
                <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                <div className="userNavigationLinks">
                    <button className="logoutButton" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
            <div className='managerWorkschedule'>
                <div className="managerWorkscheduleContainer">
                    <h1 className='heading'>Add workschedule</h1>
                    <form className='managerWorkscheduleForm'>
                        <label className='userText'>date:<input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={(e) => handleInputChangeOfEmployeeWorkscheduleData(e)}
                        />
                        </label>
                        <label className='userText'>Time From:<input
                            type="time"
                            name="timeFrom"
                            value={formData.timeFrom}
                            onChange={(e) => handleInputChangeOfEmployeeWorkscheduleData(e)}
                        />
                        </label>
                        <label className='userText'>Time To:<input
                            type="time"
                            name="timeTo"
                            value={formData.timeTo}
                            onChange={(e) => handleInputChangeOfEmployeeWorkscheduleData(e)}
                        />
                        </label>
                        <div className='dropDownDiv'>
                            <p className='employeesId'> employee Name:</p>
                            <label className='labelClass'>
                                <select className='selectType' name="employeesId" value={formData.employeesId} onChange={(e) => handleInputChangeOfEmployeeWorkscheduleData(e)}>
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
                        <div className='dropDownDiv'>
                            <p className='departments'> Department:</p>
                            <label className='labelClass'>
                                <select className='selectType' name="department" value={formData.department} onChange={(e) => handleInputChangeOfEmployeeWorkscheduleData(e)}>
                                    <option value="">Select department</option>
                                    <option value="GeneralDentist">General Dentist</option>
                                    <option value="Pedodontist">Pedodontist</option>
                                    <option value="Orthodontist">Orthodontist</option>
                                    <option value="Pharmacy">Pharmacy</option>
                                    <option value="DentalNurse">Dental Nurse</option>
                                    <option value="NonProfessional">Non-professional</option>
                                </select>
                            </label>
                        </div>

                        <button type="button" className='submitButton' onClick={handleEmployeeWorkschedule}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </body>
    )
}

export default AddWorkSchedule;

