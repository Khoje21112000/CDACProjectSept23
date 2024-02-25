import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ViewPolicyToAdmin.css";
import { useNavigate } from 'react-router-dom';

const ViewPolicyToAdmin = () => {
    const [policyData, setPolicyData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataCount, setDataCount] = useState(0); 
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "http://localhost:8080/view-policy-api";
                const response = await axios.get(url);
                setPolicyData(response.data);
                setDataCount(response.data.length);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRedirectUpdate = (policyId) => {
        navigate(`/Update/${policyId}`);
    };

    const handleDelete = async (policyId) => {
        try {
            await axios.delete(`http://localhost:1111/delete-policy-api/${policyId}`);
            setPolicyData(policyData.filter(policy => policy.policyId !== policyId));
            setDataCount(dataCount - 1);
        } catch (error) {
            console.error('Error deleting policy:', error);
        }
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className='policy-div'>
            <h2>Total Data Count: {dataCount}</h2>
            <div className="policy-card-container">
                {policyData.map((curPost) => {
                    const { policyName, keyFeatures, sumInsured, premium, policyNo, policyPeriod, policyId, coverageType } = curPost;
                    const { type } = coverageType;

                    return (
                        <div className="policy-card" key={policyId}>
                            <div className="policy-card-info">
                                <h2>Policy No: {policyNo}</h2>
                                <h2>Policy Name: {policyName}</h2>
                            </div>
                            <p><strong>Key Features:</strong> {keyFeatures}</p>
                            <div className="policy-info">
                                <div className="policy-details">
                                    <p><strong>Sum Insured:</strong> {sumInsured}</p>
                                </div>
                                <div className="policy-details">
                                    <p><strong>Premium:</strong> {premium}</p>
                                </div>
                            </div>
                            <div className="policy-info">
                                <div className="policy-details">
                                    <p><strong>Policy Period:</strong> {policyPeriod}</p>
                                </div>
                                <div className="policy-details">
                                    <p><strong>Type:</strong> {type}</p>
                                </div>
                            </div>
                            <div className="button-container">
                                <button className="update-button" onClick={() => handleRedirectUpdate(policyId)}>Update</button>
                                <button className="delete-button" onClick={() => handleDelete(policyId)}>Delete</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ViewPolicyToAdmin;