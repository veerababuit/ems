import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EmpListTable = () => {
  const [empList, setEmpList] = useState([])
  const [selectEmp, setSelectEmp] = useState(null)

  useEffect(() => {
    const fetchEmployeesData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        )
        setEmpList(response.data)
      } catch (error) {
        console.error('Error fetching employee data:', error)
      }
    }

    fetchEmployeesData()
  }, [])

  const handleGetEmpDetails = emp => {
    setSelectEmp(emp)
  }

  return (
    <div className='' style={{ margin: '30px' }}>
      <h1 className=''>Testing</h1>

      {selectEmp && (
        <div>
          <h4>Emp Details</h4>
          <p>ID: {selectEmp.id}</p>
          <p>Name : {selectEmp.name}</p>
          <p>Email : {selectEmp.email}</p>
          <p>Phone : {selectEmp.phone}</p>
          <p>Website : {selectEmp.website}</p>
        </div>
      )}
      <hr />
      <table style={{ width: '100%', cursor:"pointer", }} >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {empList.map((emp, index) => (
            <tr key={index} onClick={() => handleGetEmpDetails(emp)}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EmpListTable
