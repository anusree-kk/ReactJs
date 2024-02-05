import React from 'react';
import './additionalFeatures.css';

const AdditionalFeatures = () => {
    return (
        <div className="additionalFeatures">
        <div className='fecilities'>
            <h2 className="sectionHeading">Our Facilities</h2>
            <ul className="facilityList">
                <li>24X7 Care</li>
                <li>Quality Treatments</li>
                <li>Latest Technology</li>
                <li>Excellent Services</li>
            </ul>
        </div>
        <div className='fecilities'>
            <div className='bookAppointment'>
                <table className='consultTime'>
                    <h2 className="userAppointmentHeading"><mark>Opening hours</mark></h2>
                    <p>Monday-Saturday <b>10:00 A.M - 01:00 P.M</b><br></br>
                        Monday-Saturday <b>04:00 P.M - 06:00 P.M</b></p>
                </table>
            </div>
        </div>
        <div className="Expertise">
            <h2 className="sectionHeading">Expertise </h2>
            <ul className="expertiseList">
                <li>Faciomaxillary Surgeries</li>
                <li>Dental crowns and bridges</li>
                <li>All kind of dental related treatments.</li>
                <li>All kind of minor oral surgical procedures</li>
                <li>Dental implants & Dental Braces</li>
                <li>ARoot canal treatment</li>
                <li>Cosmetic dentistry</li>
            </ul>
        </div>
    </div>
    )
}

export default AdditionalFeatures;
