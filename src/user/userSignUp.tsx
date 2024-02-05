import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userSignUp.css';
import { fetchDatas } from '../util/signup'

const userenvFile = `${process.env.REACT_APP_signUpURL}`
const urlFile = `${process.env.REACT_APP_OriginURL}`

type userSignUpData = {
    name: string;
    username: string;
    password: string;
    age: string;
    gender: string;
    phone: string;
    bloodGroup: string;
    userType: string;
}
const UserSignUpPage = () => {
    const [formData, setFormData] = useState<userSignUpData>({
        name: '',
        username: '',
        password: '',
        age: '',
        gender: '',
        phone: '',
        bloodGroup: '',
        userType: '',
    })

    const loginNavigate = useNavigate();
    const handleInputChangeOfUserData = (e: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handleRegistration = async () => {
        try {
            const response = await fetchDatas(userenvFile, formData, urlFile)
            if (response.ok) {
                console.log('Registration successful');
                loginNavigate('/login');

            }
            else {
                const responseData = await response.json();
                if (responseData.message) {
                    console.error('Registration failed: ');
                } else {
                    console.error('Registration failed. Please try again later.');
                }
            }
        } catch (err) {
            console.error('Error during Registration:', err)
        }
    }
    return (
        <body className='userSignUpBody'>
        <div className="signUpcontainer">
            <h1 className='heading'>Registration</h1>
            <form className='RegistrationForm'>
                <label className='userText'>Name:<input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <label className='userText'>Username:<input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <label className='userText'>Password:<input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <label className='userText'>Age:<input
                    type="text"
                    name="age"
                    value={formData.age}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <label className='userText'>
                    <h5 className='gender'>Gender:</h5>
                    <div className="genderOptions">
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender === 'Male'}
                            onChange={(e) => handleInputChangeOfUserData(e)}
                        />Male</label>
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender === 'Female'}
                            onChange={(e) => handleInputChangeOfUserData(e)}
                        />Female</label>
                        <label className='options'><input
                            className='radioButton'
                            type="radio"
                            name="gender"
                            value="Other"
                            checked={formData.gender === 'Other'}
                            onChange={(e) => handleInputChangeOfUserData(e)}
                        />Other</label>
                    </div>
                </label>
                <label className='userText'>Phone:<input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <label className='userText'>BloodGroup:<input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={(e) => handleInputChangeOfUserData(e)}
                />
                </label>
                <br></br><br></br>
                <div className='userType'>
                    <h4 className='UserTypes'> userTypes:</h4>
                    <label className='user_type'>
                        <select className='selectUserType' name="userType" value={formData.userType} onChange={(e) => handleInputChangeOfUserData(e)}>
                            <option value="">UserType</option>
                            <option value="patient">patient</option>
                        </select>
                    </label>
                </div>
                <br></br><br></br>
                <button type="button" className='submitButton' onClick={handleRegistration}>
                    Register
                </button>
            </form>
        </div>
        </body>
    )
}

export default UserSignUpPage;
