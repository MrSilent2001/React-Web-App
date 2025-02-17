import DefaultButton from '@/Components/Button/DefaultButton';
import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import InputField from '@/Components/InputField/InputField';
import PasswordField from '@/Components/InputField/PasswordField';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
});

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data using Zod
    const result = loginSchema.safeParse({ email, password });

    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
    } else {
      
      setErrors({});
      console.log('Form submitted with:', { email, password });
      
      navigate('/employee-list');
    }
  };

  return (
    <div className="max-w-sm px-12 rounded-lg shadow-lg bg-purple-20 py-14 ">
      <h2 className="mb-6 text-3xl font-semibold text-center text-black">Welcome Back!</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <InputField
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            icon={<FaRegUser className="w-5 h-5 mr-3" />}
          />
          {errors?.email && <p className="text-sm text-red-500">{errors.email._errors[0]}</p>}
        </div>

        <div className="relative">
          <PasswordField
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors?.password && <p className="text-sm text-red-500">{errors.password._errors[0]}</p>}
        </div>

        <DefaultButton btnLabel="Sign In" handleClick={handleSubmit} className="w-full py-2 text-white bg-purple-500 rounded-md mt-9 hover:bg-purple-600" />
      </form>
    </div>
  );
};

export default LoginForm;
