"use client";
import React, { Profiler, useState } from 'react';
import Page1 from '../component/Page1';
import Page2 from '../component/Page2';
import Page3 from "../component/Page3";

import Success from '../component/Success';


import { stringify } from 'postcss';




const MultiStepForm = () => {
    const regex = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/;
    const regex2 = /^\d+$/
   

  const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      phone: '',
      password: '',
      password2: '',
      date: '',
      profile:''
    });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'Нэрээ оруулна уу';
      if (!formData.lastName.trim()) newErrors.lastName = 'Овгоо оруулна уу.';
      if (!formData.userName.trim()) newErrors.userName = 'Хэрэглэгчийн нэрээ оруулна уу';
    }

    if (step === 2) {
      if (!formData.email.trim()) newErrors.email = 'Мэйл хаягаа оруулна уу';
      if (!formData.email.endsWith('@gmail.com') || regex.test(formData.email[0])) newErrors.email = 'Please provide a valid email address.'; 
      if (formData.phone.length!==8  || !regex2.test(formData.phone)) newErrors.phone = 'Утасны дугаараа оруулна уу.';
      if (!formData.password.trim()) newErrors.password = 'Нууц үгээ оруулна уу';
      if (formData.password.length < 6) newErrors.password = '6 оронтой тоо оруулна уу';
      if (formData.password !== formData.password2) newErrors.password2 = 'Нууц үгээ давтаж оруулна уу';
    }
if (step === 3) {
  if (!formData.date.trim()|| 2025-formData.date.slice(0,4)<18) {
    newErrors.date = 'Please select a date.';
  }
  if (!formData.profile.trim()) {
    newErrors.profile = 'select img'
  }
}
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const nextStep = () => {
    if (validate()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
    
  };

  const handleSubmit = () => {
    if (validate()) {
      nextStep();
    }
  };

  switch (step) {
    case 1:
      return (
       
        <Page1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
          step={step}
        />
       
      );
    case 2:
      return (
        <Page2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
          step={step}

        />
      );
    case 3:
      return (
        <Page3
          nextStep={handleSubmit}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formData}
          errors={errors}
          step={step}
        />
      );
    case 4:
      return <Success />;
  }
};

export default MultiStepForm;
