import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../pages/LoginPage/LoginPage';
import AddNewPage from '@/pages/AddNewPage/AddNewPage';
import EmployeeList from '@/pages/EmployeeList/EmployeeList.jsx';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/employee-list' element={<EmployeeList/>}/>
        <Route path='/add-new-employee' element={<AddNewPage />} />
      </Routes>
    </div>
  )
}

export default Routers
