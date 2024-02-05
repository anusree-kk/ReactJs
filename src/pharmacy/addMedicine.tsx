import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../manager/addWorkSchedule.css';
import { fetchData } from '../util/util'
import Footer from '../components/footer'


type addMedicineData = {
    name: string;
    stock: number;
    price: number;
    productionDate: any;
    dosage: number;
    expiryDate: any;
    manufacturer: string;
    code: string;
}
const AddMedicine = () => {

    const pharmacyMedicineAddEnvFile = `${process.env.REACT_APP_addMedicineToPharmacy}`
    const pharmacyUrlFile = `${process.env.REACT_APP_OriginURL}`

    const [formData, setFormData] = useState<addMedicineData>({
        name: '',
        stock: 0,
        price: 0,
        productionDate: '',
        dosage: 0,
        expiryDate: '',
        manufacturer:'',
        code:''
    })
    const navigate = useNavigate();
    const handleLogout = () => {
        console.log('Logout successfully');

        localStorage.removeItem('token')
        navigate('/login')
    };
    const pharmacyToken = localStorage.getItem('token')
    useEffect(() => {
        console.log('token', pharmacyToken);
        if (!pharmacyToken) {
            navigate('/login')
        }
    })
    const pharmacyHomeNavigate = useNavigate();
    const handleInputChangeOfAddMedicineData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }
    const handlepharmacyMedicine = async () => {
        try {
            const response = await fetchData(pharmacyMedicineAddEnvFile, formData, pharmacyToken, pharmacyUrlFile)
            if (response.ok) {
                console.log('medicine added');
                pharmacyHomeNavigate('/pharmacyHome');
            }
            else {
                const responseData = await response.json();
                console.log('responsedata', responseData);

                if (responseData.response) {
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
        <body className='pharmacyAddMedicineBody'>
            <header className="mainHeader">
                <h1 className="clinicHeading">NARAYANA SPECIALTY DENTAL CARE</h1>
                <div className="userNavigationLinks">
                    <button className="logoutButton" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </header>
            <div className='pharmacyAddMedicine'>
                <div className="pharmacyAddMedicineContainer">
                    <h1 className='heading'>Add Medicine</h1>
                    <form className='pharmacyAddMedicineForm'>
                        <label className='userText'>Name:<input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Stock<input
                            type="text"
                            name="stock"
                            value={formData.stock}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Price<input
                            type="text"
                            name="price"
                            value={formData.price}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Production Date<input
                            type="date"
                            name="productionDate"
                            value={formData.productionDate}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label><label className='userText'>Dosage<input
                            type="text"
                            name="dosage"
                            value={formData.dosage}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Expiry Date<input
                            type="date"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Manufacturer<input
                            type="text"
                            name="manufacturer"
                            value={formData.manufacturer}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <label className='userText'>Code<input
                            type="text"
                            name="code"
                            value={formData.code}
                            onChange={(e) => handleInputChangeOfAddMedicineData(e)}
                        />
                        </label>
                        <button type="button" className='submitButton' onClick={handlepharmacyMedicine}>
                            Add
                        </button>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </body>
    )
}

export default AddMedicine;

