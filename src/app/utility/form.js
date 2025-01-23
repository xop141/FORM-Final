"use client"
import React, { useState } from 'react';
import Page1 from '../component/Page1';
import Page2 from '../component/Page2';
import Page3 from '../component/Page3';
import Success from "../component/Success";


const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName:'',
    email: '',
    phone: '',
    password: '',
   password2:''
  });

  const nextStep = () => {
    setStep(step + 1);
    checkValid()
  };

  const checkValid = ()=>{
if (!formData.firstName==true) {
    return <p>first name error</p>
} 
  }


  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to an API
    nextStep();
  };

  switch (step) {
    case 1:
      return <Page1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Page2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Page3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
      case 4:
        return <Success/>
    default:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;

  }
};

export default MultiStepForm;