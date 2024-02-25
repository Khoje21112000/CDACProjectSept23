import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css'; // Import CSS file for styling

const Payment = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const policyNo = searchParams.get('policyNo');
    const policyName = searchParams.get('policyName');
    const sumInsured = searchParams.get('sumInsured');
    const premium = searchParams.get('premium');
    const policyPeriod = searchParams.get('policyPeriod');
    const type = searchParams.get('type');

    const selectedPolicy = JSON.parse(localStorage.getItem('selectedPolicy'));

    return (
        <div className="payment-container">
            <h2>Payment Details</h2>
            <table className="payment-table">
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
                        <td>{type}</td>
                    </tr>
                </tbody>
            </table>
            {/* Additional payment form */}
        </div>
    );
};

export default Payment;
