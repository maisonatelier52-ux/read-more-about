"use client";

import { useState } from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

export default function SubscribeBox() {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Email validation function
  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
    setShowSuccess(false);
  };

  // Handle subscribe button click
  const handleSubscribe = () => {
    if (isEmailValid) {
      setShowSuccess(true);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Subscribe</h2>
      <input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email address"
        className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
      
      {/* Success Message */}
      {showSuccess && (
        <div className="flex items-center gap-2 mb-3">
          <IoCheckmarkCircle className="h-5 w-5 text-green-500" />
          <span className="text-green-600 font-medium text-sm">Email submitted successfully!</span>
        </div>
      )}
      
      <button 
        onClick={handleSubscribe}
        disabled={!isEmailValid}
        className={`w-full text-xs font-bold py-4 px-4 rounded transition ${
          isEmailValid
            ? 'bg-red-600 hover:bg-red-500 text-white cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        I WANT IN →
      </button>
      {/* <div className="mt-3">
        <label className="flex items-start gap-2 text-xs">
          <input type="checkbox" className="mt-1" />
          <span>I've read and accept the Privacy Policy.</span>
        </label>
      </div> */}
    </div>
  );
}