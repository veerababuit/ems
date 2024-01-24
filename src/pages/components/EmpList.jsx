import React, { useEffect, useState } from 'react'
// import employeesData from '../services/employeesData'
import axios from 'axios'

const EmpList = () => {
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

    // setEmpList(employeesData)
  }, [])

  const handleGetEmpDetails = emp => {
    setSelectEmp(emp)
  }

  return (
    <div className='' style={{ margin: '30px' }}>
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
      {empList.map((emp, index) => (
        <h5 className='' key={index} onClick={() => handleGetEmpDetails(emp)} style={{cursor:'pointer'}}>
          {emp.name}
        </h5>
      ))}
    </div>
  )
}

export default EmpList
