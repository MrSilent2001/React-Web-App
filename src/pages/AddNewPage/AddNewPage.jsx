import Layout from '@/Components/Layout/Layout'
import AddNewEmployeeForm from '@/section/EmployeeForm/AddNewEmployeeForm.jsx'
import React from 'react'

function AddNewPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center p-9">
      <AddNewEmployeeForm />
      </div>
    </Layout>
  )
}

export default AddNewPage