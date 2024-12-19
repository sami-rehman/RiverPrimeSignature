import React, { useRef, useState } from "react";
import html2canvas from 'html2canvas';

import logo from './logo.svg'
import qrcode from './qrcode.svg'

import website from './website.svg'
import phone from './phone.svg'
import email from './email.svg'

const EmailSignature = () => {

  const [userData, setUserData] = useState({
    name: "Sami ur",
    lastname: "Rehman",
    title: "JavaScript Developer",
    phone: "+971 50 123 2852",
    email: "s.rahman@riverprime.com",
    website: "www.riverprime.com"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const componentRef = useRef();

  const handleDownload = () => {
   html2canvas(componentRef.current, {
  useCORS: true,
  scale: 2, // Higher scale for better resolution
}).then((canvas) => {
  const image = canvas.toDataURL('image/png');
  const link = document.createElement('a');
  link.href = image;
  link.download = 'component-image.png';
  link.click();
});

  };

  return (
<div
  className="App h-screen flex flex-col bg-[#2D2D2D] text-white overflow-hidden"
>
  <div className=" mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-lg font-bold text-center my-6 text-gray-800 text-white">
      Please Update Your Details
    </h2>
    <span class="animate-blink text-red-500 font-semibold">
    Note: Enter your details below the click the Download button to issue your Email Signature.
    </span>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[
        { label: "First Name", name: "name", value: userData.name },
        { label: "Last Name", name: "lastname", value: userData.lastname },
        { label: "Designation", name: "title", value: userData.title },
        { label: "Phone Number", name: "phone", value: userData.phone },
        { label: "Email", name: "email", value: userData.email },
      ].map((field) => (
        <div key={field.name}>
          <label
            htmlFor={field.name}
            className="block text-sm font-medium text-gray-300"
          >
            {field.label}
          </label>
          <input
            type="text"
            id={field.name}
            name={field.name}
            value={field.value}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-200 text-gray-700 border-gray-600"
          />
        </div>
      ))}
    </div>
  </div>

  <div
    ref={componentRef}
    className="flex flex-wrap items-center justify-between max-w-4xl mx-auto bg-[#EFEFEF] mt-4"
  >
    <div className="flex items-center bg-[#26519F] p-4 max-w-60 min-w-48">
      <div className="bg-[#FDD200] h-[65px] w-[8px] ml-[-16px]"></div>
      <div className="ml-3 mb-4">
        <h2 className="text-xl font-bold text-white">
          {userData?.name}{" "}
          <span className="text-[#FDD200]">{userData?.lastname}</span>
        </h2>
        <p className="text-white text-xs">{userData?.title}</p>
      </div>
    </div>

    <div className="flex flex-col items-center justify-center p-4 text-center">
      <img src={logo} alt="logo" />
    </div>

    <div className="flex items-center space-x-4 px-4 pb-3">
      <img src={qrcode} alt="qrcode"/>
      <div className="flex flex-col text-gray-700 space-y-2">
        {[
          { icon: phone, text: userData?.phone },
          { icon: email, text: userData?.email },
          { icon: website, text: userData?.website },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-start space-x-2"
            style={{ minWidth: "200px", alignItems: "center" }}
          >
          <div>
          <img src={item.icon} alt={item.text} className="mt-4"/>
          </div>
          <div className="text-sm text-gray-700">
          <span>{item.text}</span>
          </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-4">
    <button
      className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      onClick={handleDownload}
    >
      Download as Image
    </button>
  </div>
</div>


  );
};

export default EmailSignature;
