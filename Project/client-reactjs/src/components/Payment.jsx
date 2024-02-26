import React from 'react';
import './Payment.css'; // Import CSS file for styling
import Footer from './Footer';
import NavbarHeader from './NavbarHeader';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
    // Extract individual details from the query parameters
    // const urlSearchParams = new URLSearchParams(window.location.search);
    // const fullName = urlSearchParams.get('fullName');
    // const mobileNo = urlSearchParams.get('mobileNo');
    // const dateOfBirth = urlSearchParams.get('dateOfBirth');
    // const gender = urlSearchParams.get('gender');
    // const occupation = urlSearchParams.get('occupation');

    // const individualFormData = JSON.parse(localStorage.getItem('individualFormData'));

    const navigation = useNavigate();

    const individualFormData = JSON.parse(localStorage.getItem('individualFormData')) || {};
    const { fullName, mobileNo, dateOfBirth, gender, occupation } = individualFormData;


    // const familyFormData = JSON.parse(localStorage.getItem('familyFormData')) || {};
    // const { fullName2, mobileNo2,relationship, dateOfBirth2, gender2, occupation2 } = familyFormData;


    // Extract policy details from localStorage
    const policyData = JSON.parse(localStorage.getItem('selectedPolicy'));
    const { policyNo, policyName, sumInsured, premium, policyPeriod, coverageType } = policyData;

    // Calculate annual premium
    const annualPremium = premium * 12;

    const handleLogout = () => {
        // Clear localStorage
        // localStorage.clear();
        // Redirect to login page or perform any other logout actions
        // For example:
        // window.location.href = '/login'; // Redirect to login page

        navigation('/login');

    };

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
                            <td>Annual Premium:</td>
                            <td>{annualPremium}</td>
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
        <div className="buttons-container">
            <button className="payment-button">Payment</button>
            <button className="invoice-button">Invoice</button>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Payment;
