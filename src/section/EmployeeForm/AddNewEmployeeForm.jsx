import React, { useState } from "react";
import InputField from "@/Components/InputField/InputField";
import { Textarea } from "@/Components/ui/textarea";
import { AddNewEmployeeSchema } from "@/schema/employeeSchema/employeeSchema";
import DefaultButton from "@/Components/Button/DefaultButton";
import SuccessConfirm from "@/Components/Popup/SuccessConfirm";
import { addEmployee } from "@/apis/Apis";

const AddNewEmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    role: "",
    address: "",
    salary: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "salary" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = AddNewEmployeeSchema.safeParse(formData);

    if (!result.success) {
      const formattedErrors = result.error.format();
      setErrors(formattedErrors);
    } else {
      try {
        await addEmployee(formData);
        setShowSuccessPopup(true);
      } catch (error) {
        console.error("Error adding employee:", error);
      }
    }
  };

  const handleClear = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      department: "",
      role: "",
      address: "",
      salary: "",
      joiningDate: "",
    });
    setErrors({});
  };

  const onConfirm = () => {
    handleClear();
    setShowSuccessPopup(false);
  };

  return (
      <div className="w-6/12 p-8 mx-auto mt-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <h2 className="mb-6 text-2xl font-semibold text-black">Add New Employee</h2>

          <InputField
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              name="name"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name._errors[0]}</p>}

          <InputField
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              name="email"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email._errors[0]}</p>}

          <InputField
              id="phone"
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              name="phone"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone._errors[0]}</p>}

          <InputField
              id="department"
              type="text"
              placeholder="Department"
              value={formData.department}
              onChange={handleInputChange}
              name="department"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.department && <p className="text-sm text-red-500">{errors.department._errors[0]}</p>}

          <InputField
              id="role"
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={handleInputChange}
              name="role"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.role && <p className="text-sm text-red-500">{errors.role._errors[0]}</p>}

          <Textarea
              id="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
              name="address"
              className="w-full h-24 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.address && <p className="text-sm text-red-500">{errors.address._errors[0]}</p>}

          <InputField
              id="salary"
              type="number"
              placeholder="Salary"
              value={formData.salary}
              onChange={handleInputChange}
              name="salary"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.salary && <p className="text-sm text-red-500">{errors.salary._errors[0]}</p>}

          <InputField
              id="joiningDate"
              type="date"
              placeholder="Joining Date"
              value={formData.joiningDate}
              onChange={handleInputChange}
              name="joiningDate"
              className="w-full h-11 px-3 py-2 border-2 border-purple-400 rounded-lg focus:outline-purple-600"
          />
          {errors.joiningDate && <p className="text-sm text-red-500">{errors.joiningDate._errors[0]}</p>}

          <div className="flex justify-end gap-10">
            <DefaultButton
                handleClick={handleClear}
                btnLabel="Clear"
                className="w-24 text-red-500 from-white to-white hover:from-red-200 hover:to-red-200"
            />
            <DefaultButton
                btnLabel="Add"
                handleClick={handleSubmit}
                className="w-28"
            />
          </div>
        </form>
        {showSuccessPopup && <SuccessConfirm message="Employee added successfully!" onConfirm={onConfirm} />}
      </div>
  );
};

export default AddNewEmployeeForm;
