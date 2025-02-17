import React, { useEffect, useState } from "react";
import DefaultButton from "@/Components/Button/DefaultButton";
import { Label } from "@/Components/ui/label";
import DeleteConfirm from "@/Components/Popup/Delete Popup";
import { useNavigate } from "react-router-dom";
import { getAllEmployees, deleteEmployee } from "@/apis/Apis";
import Spinner from "@/Components/Spinner/Spinner";

const EmployeeCard = ({ id }) => {
  const [employee, setEmployee] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const navigate = useNavigate();

  // Fetch all employees and filter by ID
  useEffect(() => {
    getAllEmployees()
        .then((employees) => {
          const foundEmployee = employees.find((item) => item.employeeId === id);
          if (foundEmployee) {
            setEmployee(foundEmployee);
          }
        })
        .catch((error) => console.error("Error fetching employees:", error));
  }, [id]);

  if (!employee) return <Spinner />;

  return (
      <div className="flex h-full ">
        <div className="w-3/5 h-full mt-20 ">
          <img
              src={employee.image}
              alt="Employee"
              className="w-3/5 h-auto ml-6"
          />
        </div>

        <div className="relative max-w-xl p-6 mx-auto mt-20 mr-32 bg-white rounded-lg shadow-lg">
          <div className="mb-6">
            <Label className="text-3xl font-semibold text-black font-inter">
              {employee.name}
            </Label>
          </div>

          <div className="mb-5">
            <Label className="leading-relaxed text-gray-700 font-inter">
              {employee.position}
            </Label>
          </div>

          <ul className="pl-5 mb-6 text-gray-700 list-disc font-inter">
            <li>
              Department: <span className="font-medium">{employee.department}</span>
            </li>
            <li>
              Contact: <span className="font-medium">{employee.contact}</span>
            </li>
            <li>
              Email: <span className="font-medium">{employee.email}</span>
            </li>
            <li>
              Address: <span className="font-medium">{employee.address}</span>
            </li>
          </ul>

          <div className="text-right">
            <DefaultButton
                btnLabel="Delete"
                handleClick={() => setShowDeleteModal(true)}
                className="px-4 py-2 font-semibold text-white rounded w-44 from-red_btn to-red_btn font-inter hover:bg-gradient-to-r hover:from-red-400 hover:to-red-400"
            />
            {showDeleteModal && (
                <DeleteConfirm
                    onDelete={() => {
                      deleteEmployee(employee.employeeId)
                          .then(() => {
                            console.log("Employee deleted");
                            setShowDeleteModal(false);
                            navigate("/employee-list");
                          })
                          .catch((error) => {
                            console.error("Error deleting employee:", error);
                          });
                    }}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
          </div>
        </div>
      </div>
  );
};

export default EmployeeCard;
