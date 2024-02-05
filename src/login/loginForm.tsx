
import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { fetchDatas } from '../util/signup'
import './login.css'
const envFile = `${process.env.REACT_APP_apiURL}`
const urlFile = `${process.env.REACT_APP_OriginURL}`

type loginData = {
    username: string;
    password: string;
    userTypes: string;
}
const LoginPage = () => {
    const [formData, setFormData] = useState<loginData>({
        username: '',
        password: '',
        userTypes: ''
    })
    const navigate = useNavigate();
    const handleInputChangeOfLoginData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleLogin = async () => {
        try {
            const response = await fetchDatas(envFile, formData, urlFile)
            if (response.ok) {
                const responseData = await response.json();
                console.log('responseData', responseData);

                const { auth, token } = responseData;
                if (auth) {
                    localStorage.setItem('token', token);
                    console.log('Login successful');
                    const userTypesDestinations: { 
                        [key: string]: string } = {
                        patient: '/',
                        doctor: '/doctorHome',
                        nurse: '/',
                        dentalAssistant: '/',
                        technician: '/',
                        receptionist: '/',
                        pharmacist: '/pharmacyHome',
                        manager: '/managerHome'
                    };
                    const destination = userTypesDestinations[formData.userTypes]
                    navigate(destination)
                } else {
                    console.error('Login failed: ');
                }
            }else {
                    console.error('Login failed. Please try again later.');
                }
            } catch (err) {
                console.error('Error during login:', err);
            }
        }

return (
            <body className='loginBody'>
                <div className="container">
                    <h1 className='heading'>Login</h1>
                    <form className='loginForm'>
                        <label className='userText'>Username:<input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={(e) => handleInputChangeOfLoginData(e)}
                        />
                        </label>
                        <label className='userText'>Password:<input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={(e) => handleInputChangeOfLoginData(e)}
                        />
                        </label>
                        <div className='dropDownDiv'>
                            <p className='userTypes'> User Type:</p>
                            <label className='userTextUserTypes'>
                                <select className='userTypesOptions' name="userTypes" value={formData.userTypes} onChange={(e) => handleInputChangeOfLoginData(e)}>
                                    <option value="">Select User Type</option>
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                    <option value="nurse">Nurse</option>
                                    <option value="dentalAssistant">DentalAssistant</option>
                                    <option value="technician">Technician</option>
                                    <option value="receptionist">Receptionist</option>
                                    <option value="pharmacist">Pharmacist</option>
                                    <option value="manager">Manager</option>
                                </select>
                            </label>
                        </div>
                        <button type="button" className='submitButton' onClick={handleLogin}>
                            Login
                        </button>
                        <p className='signupText'>Don't you have an account
                        <Link to="/userSignUp" className="signUpNavigationLink">
                            Signup
                        </Link></p>
                    </form>
                </div>
            </body>
        )
    }

    export default LoginPage;
