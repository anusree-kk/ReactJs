
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './login/loginForm';
import UserSignUpPage from './user/userSignUp';
import EmployeeSignUpPage from './signUp/employeeSignUp';
import UserHomePage from './user/userHomePage';
import AppointmentBooking from './user/appointmentBooking';
import DoctorHome from './doctor/doctorHome';
import AddPrescription from './doctor/addPrescription';
import ConfirmAppointment from './doctor/confirmAppointment';
import UpdateAppointmentLimit from './doctor/updateAppointmentLimit';
import ManagerHome from './manager/managerHome';
import AddWorkSchedule from './manager/addWorkSchedule';
import PharmacyHome from './pharmacy/pharmacyHome';
import ViewMedicines from './pharmacy/viewMedicines';
import ViewExpiringMedicines from './pharmacy/viewLowStockMedicnes';
import AddMedicine from './pharmacy/addMedicine';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/userSignUp" element={<UserSignUpPage />} />
        <Route path="/employeeSignUp" element={<EmployeeSignUpPage />} />
        <Route path="/" element={<UserHomePage />} />
        <Route path="/appointmentBooking" element={<AppointmentBooking />} />
        <Route path="/doctorHome" element={<DoctorHome />} />
        <Route path="/addPrescription" element={<AddPrescription />} />
        <Route path="/confirmAppointment" element={<ConfirmAppointment />} />
        <Route path="/updateAppointmentLimit" element={<UpdateAppointmentLimit />} />
        <Route path="/managerHome" element={<ManagerHome />} />
        <Route path="/addWorkSchedule" element={<AddWorkSchedule />} />
        <Route path="/pharmacyHome" element={<PharmacyHome />} />
        <Route path="/viewMedicines" element={<ViewMedicines />} />
        <Route path="/viewExpiringMedicines" element={<ViewExpiringMedicines />} />
        <Route path="/addMedicine" element={<AddMedicine />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
