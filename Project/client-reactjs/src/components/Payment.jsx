import React from 'react';
import './Payment.css'; // Import CSS file for styling
import Footer from './Footer';
import NavbarHeader from './NavbarHeader';

const Payment = () => {
    // Extract individual details from the query parameters
    // const urlSearchParams = new URLSearchParams(window.location.search);
    // const fullName = urlSearchParams.get('fullName');
    // const mobileNo = urlSearchParams.get('mobileNo');
    // const dateOfBirth = urlSearchParams.get('dateOfBirth');
    // const gender = urlSearchParams.get('gender');
    // const occupation = urlSearchParams.get('occupation');

    // const individualFormData = JSON.parse(localStorage.getItem('individualFormData'));

    const individualFormData = JSON.parse(localStorage.getItem('individualFormData')) || {};
    const { fullName, mobileNo, dateOfBirth, gender, occupation } = individualFormData;
    
    // Extract policy details from localStorage
    const policyData = JSON.parse(localStorage.getItem('selectedPolicy'));
    const { policyNo, policyName, sumInsured, premium, policyPeriod, coverageType } = policyData;

    return (
        <>
        <NavbarHeader></NavbarHeader>
        <div className="payment-container">
            <h2>Payment Details</h2>
            {/* Display individual details */}
            <hr></hr>
            <div className="individual-details">
                <h3>Individual Details:</h3>
                <table className="details-table">
                    <tbody>
                        <tr>
                            <td><strong>Full Name:</strong></td>
                            <td>{fullName}</td>
                        </tr>
                        <tr>
                            <td><strong>Mobile Number:</strong></td>
                            <td>{mobileNo}</td>
                        </tr>
                        <tr>
                            <td><strong>Date of Birth:</strong></td>
                            <td>{dateOfBirth}</td>
                        </tr>
                        <tr>
                            <td><strong>Gender:</strong></td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td><strong>Occupation:</strong></td>
                            <td>{occupation}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Display policy details */}
            <hr></hr>
            <div className="policy-details">
                <h3>Policy Details:</h3>
                <table className="policy-table">
                    <tbody>
                        <tr>
                            <td>Policy No:</td>
                            <td>{policyNo}</td>
                        </tr>
                        <tr>
                            <td>Policy Name:</td>
                            <td>{policyName}</td>
                        </tr>
                        <tr>
                            <td>Sum Insured:</td>
                            <td>{sumInsured}</td>
                        </tr>
                        <tr>
                            <td>Premium:</td>
                            <td>{premium}</td>
                        </tr>
                        <tr>
                            <td>Policy Period:</td>
                            <td>{policyPeriod}</td>
                        </tr>
                        <tr>
                            <td>Type:</td>
                            <td>{coverageType.type}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* Additional payment form */}
        </div>
        <Footer></Footer>
        </>
    );
};

export default Payment;
