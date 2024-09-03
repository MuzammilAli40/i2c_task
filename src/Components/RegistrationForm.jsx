import React, { useState, useEffect } from "react";
import AssistantBot from "../assets/assistant-bot.png";
import Bubbles from "../assets/assistant-bubbles.png";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const storedData = localStorage.getItem("registrationData");
    if (storedData) {
      const { name } = JSON.parse(storedData);
      setIsSubmitted(true);
      setSubmitMessage(
        `Hi ${name}, thanks for registering. somebody will contact you soon.`
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is not invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("registrationData", JSON.stringify(formData));
      setIsSubmitted(true);
      setSubmitMessage("Registration successful! Thank you for submitting.");
    }
  };

  return (
    <div className="app-container grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 md:mt-24 items-center">
      <div className="relative">
        <img
          src={AssistantBot}
          alt="Assistant Bot"
          className="w-full max-w-md mx-auto z-10 relative"
        />
        <img
          src={Bubbles}
          alt="Bubbles"
          className="absolute inset-0 w-full h-full object-contain z-0"
        />
      </div>
      <div className="bg-white p-14 rounded-lg shadow-md">
        <h2
          className={`font-bold text-3xl mb-4 ${
            isSubmitted ? "text-green-600" : "text-black"
          }`}
        >
          Registration
        </h2>
        <p
          className={`text-black mb-6 text-base ${
            isSubmitted ? "hidden" : "block"
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in
          tristique senectus dui pharetra sit.
        </p>
        {isSubmitted ? (
          <div className="text-black font-normal">{submitMessage}</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-base font-medium text-black"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-[#F9FAFF] border border-[#DEE6FF] rounded-md shadow-sm focus:outline-none"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-base font-medium text-black"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-[#F9FAFF] border border-[#DEE6FF] rounded-md shadow-sm focus:outline-none"
                placeholder="Enter your company name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-base font-medium text-black"
              >
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-[#F9FAFF] border border-[#DEE6FF] rounded-md shadow-sm focus:outline-none"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-customeOrange shadow-2xl text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 transition duration-200"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default RegistrationForm;
