import { data } from "autoprefixer";
import axios from "axios";

const api = axios.create({
  baseURL: "https://react-intern-practical-test-server-dyz8.vercel.app/",
});

// Add a product
export const addEmployee = async (employee) => {
  try {
    const response = await api.post("/employee/add", employee);
    const employees = response.data;
    console.log("employees:", employees);
    return response.data;
  } catch (error) {
    console.error("Error adding employee:", error);
    throw error;
  }
};

// Get all products
export const getAllEmployees = async () => {
  try {
    const response = await api.get("/employees");
    const employees = response.data;
    console.log("employees:", employees);
    return employees;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};

//Delete product
export const deleteEmployee = async (id) => {
  try {
    const response = await api.delete(`/employees/${id}`);
    console.log("Employee deleted:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error);
    throw error;
  }
};

export default api;
