import React, { useState } from 'react';
import axios from 'axios';
import './AddPolicyForm.css';
import Sidebar from './SideBar';

const AddPolicyForm = () => {
  const [formData, setFormData] = useState({
    policyNo: '', // Use policyNo instead of policyNumber
    policyPeriod: '',
    policyName: '',
    sumInsured: '',
    premium: '',
    coverageType: '',
    keyFeatures: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure policyNo is treated as an integer if needed
    const newValue = name === 'policyNo' ? parseInt(value) : value;
    console.log(value);
    // If coverageType is selected, construct the coverage object
    const finalValue = name === 'coverageType' ? { coverageId: parseInt(value) } : newValue;
    // Update the formData state
    setFormData(prevState => ({
      ...prevState,
      [name]: finalValue
    }));

    // Log the selected value in the console
    console.log(finalValue);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to your backend
      const response = await axios.post('http://localhost:8080/add-policy-api', formData);
      console.log(response.data); // Log the response from the server
      
      // Clear the form after successful submission
      setFormData({
        policyNo: '',
        policyPeriod: '',
        policyName: '',
        sumInsured: '',
        premium: '',
        coverageType: '',
        keyFeatures: '',
        description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    
  };


  return (
    <>
    <Sidebar></Sidebar>
    <div className="form-container">
      <h2>Add New Policy</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Policy Number:</label>
          <input type="text" name="policyNo" value={formData.policyNo} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Policy Name:</label>
          <input type="text" name="policyName" value={formData.policyName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Policy Period:</label>
          <input type="text" name="policyPeriod" value={formData.policyPeriod} onChange={handleChange} />
        </div>
        <div className="form-group">
          <div className="side-by-side">
            <div>
              <label>Sum Insured:</label>
              <input type="text" name="sumInsured" value={formData.sumInsured} onChange={handleChange} />
            </div>
            <div>
              <label>Premium:</label>
              <input type="text" name="premium" value={formData.premium} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label>Coverage Type:</label>
          <select className="addpolicy-select" name="coverageType" onChange={handleChange} value={formData.coverageType}>
            <option value="">Select Coverage Type</option>
            <option value="1">Adult: 1 Child: 0</option>
            <option value="2">Adult: 2 Child: 0</option>
            <option value="3">Adult: 2 Child: 1</option>
            <option value="4">Adult: 2 Child: 2</option>
          </select>
        </div>
        <div className="form-group">
          <label>Key Features:</label>
          <textarea name="keyFeatures" value={formData.keyFeatures} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default AddPolicyForm;