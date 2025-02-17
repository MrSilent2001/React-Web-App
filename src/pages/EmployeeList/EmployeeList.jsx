import React from 'react'
import Layout from '@/Components/Layout/Layout'
import { EmployeeTable } from '@/Components/Product/EmployeeTable/EmployeeTable.jsx'

const EmployeeList = () => {
  return (
    <Layout>
        <div className='p-9'>
            <EmployeeTable/>
        </div>
    </Layout>
  )
}

export default EmployeeList
