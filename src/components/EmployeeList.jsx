// src/components/EmployeeList.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('employees')) || []);
  }, []);

  // Function to format date strings for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{formatDate(employee.startDate)}</td>
              <td>{employee.department}</td>
              <td>{formatDate(employee.dateOfBirth)}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">Home</Link> {/* Use Link instead of <a> for internal routing */}
    </div>
  );
};

export default EmployeeList;
