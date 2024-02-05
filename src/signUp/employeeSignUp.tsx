import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './employeeSignUp.css';
import { fetchDatas } from '../util/signup'
import { UseSelector, UseDispatch, useDispatch } from 'react-redux';

type employeeSignUpData = {
    name: string;
    qualification: string;
    experience: string;
    gender: string;
    phone: string;
    hiringDate: string;
    employeeTypesId: number;
    departmentId: number;
    username: string;
    password: string;
}

const EmployeeSignUpPage = () => {

    const dispatch = useDispatch()
    const name = useSelector((name) => formData.name)

    const employeeenvFile = `${process.env.REACT_APP_employeeSignUpURL}`
    const employeeUrlFile = `${process.env.REACT_APP_OriginURL}`

    const [formData, setFormData] = useState<employeeSignUpData>({
        name: '',
        qualification: '',
        experience: '',
        gender: '',
        phone: '',
        hiringDate: '',
        employeeTypesId: 0,
        departmentId: 0,
        username: '',
        password: '',
    })
    const employeeLoginNavigate = useNavigate();
    const handleInputChangeOfEmployeeData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleEmployeeRegistration = async () => {
        try {
            const response = await fetchDatas(employeeenvFile, formData, employeeUrlFile)
            if (response.ok) {
                console.log('Registration successful');
                employeeLoginNavigate('/login');

            }
            else {
                const responseData = await response.json();
                console.log('responsedata', responseData);

                if (responseData.message) {
                    console.error('Registration failed:');
                } else {
                    console.error('Registration failed. Please try again later.');
                }
                dispatch({ type: 'submitButton' })
            }
        } catch (err) {
            console.error('Error during Registration:', err);
        }
    }
    return (
        <body className='employeeSignUpBody'>
            <div className="employeeSignUpContainer">
                <h1 className='heading'>Registration</h1>
                <form className='employeeRegistrationForm'>
                    <label className='userText'>Name:<input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>
                    <label className='userText'>Qualification:<input
                        type="text"
                        name="qualification"
                        value={formData.qualification}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>
                    <div className='dropDownDiv'>
                        <h4 className='experience'> Experience:</h4>
                        <label className='labelClass'>
                            <select className='selectType' name="experience" value={formData.experience} onChange={(e) => handleInputChangeOfEmployeeData(e)}>
                                <option value="">Select your experience</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="More than 5">More than 5</option>
                            </select>
                        </label>
                    </div>
                    <label className='userText'>
                        <h5 className='gender'>Gender:</h5>
                        <div className="genderOptions">
                            <label className='options'><input
                                className='radioButton'
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={(e) => handleInputChangeOfEmployeeData(e)}
                            />Male</label>
                            <label className='options'><input
                                className='radioButton'
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={(e) => handleInputChangeOfEmployeeData(e)}
                            />Female</label>
                            <label className='options'><input
                                className='radioButton'
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={(e) => handleInputChangeOfEmployeeData(e)}
                            />Other</label>
                        </div>
                    </label>
                    <br></br><br></br>
                    <label className='userText'>Phone:<input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>
                    <label className='userText'>HiringDate:<input
                        type="text"
                        name="hiringDate"
                        value={formData.hiringDate}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>
                    <div className='dropDownDiv'>
                        <h4 className='typesOfEmployees'> EmployeeTypes:</h4>
                        <label className='labelClass'>
                            <select className='selectType' name="employeeTypesId" value={formData.employeeTypesId} onChange={(e) => handleInputChangeOfEmployeeData(e)}>
                                <option value="">UserType</option>
                                <option value="1">Doctor</option>
                                <option value="2">Nurse</option>
                                <option value="3">DentalAssistant</option>
                                <option value="4">Technician</option>
                                <option value="5">Receptionist</option>
                                <option value="6">Pharmacist</option>
                            </select>
                        </label>
                    </div>
                    <div className='dropDownDiv'>
                        <h4 className='departments'> Department:</h4>
                        <label className='labelClass'>
                            <select className='selectType' name="departmentId" value={formData.departmentId} onChange={(e) => handleInputChangeOfEmployeeData(e)}>
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
                    <label className='userText'>Username:<input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>
                    <label className='userText'>Password:<input
                        type="text"
                        name="password"
                        value={formData.password}
                        onChange={(e) => handleInputChangeOfEmployeeData(e)}
                    />
                    </label>

                    <button type="button" className='submitButton' onClick={handleEmployeeRegistration}>
                        SignUp
                    </button>
                </form>
            </div>
        </body>
    )
}

export default EmployeeSignUpPage;

