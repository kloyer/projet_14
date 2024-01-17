// src/components/CreateEmployee.jsx
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: new Date(),
    startDate: new Date(),
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  });

  const states = [
    { name: "Alabama", abbreviation: "AL" },
    { name: "Alaska", abbreviation: "AK" },
    { name: "American Samoa", abbreviation: "AS" },
    { name: "Arizona", abbreviation: "AZ" },
    { name: "Arkansas", abbreviation: "AR" },
    { name: "California", abbreviation: "CA" },
    { name: "Colorado", abbreviation: "CO" },
    { name: "Connecticut", abbreviation: "CT" },
    { name: "Delaware", abbreviation: "DE" },
    { name: "District Of Columbia", abbreviation: "DC" },
    { name: "Federated States Of Micronesia", abbreviation: "FM" },
    { name: "Florida", abbreviation: "FL" },
    { name: "Georgia", abbreviation: "GA" },
    { name: "Guam", abbreviation: "GU" },
    { name: "Hawaii", abbreviation: "HI" },
    { name: "Idaho", abbreviation: "ID" },
    { name: "Illinois", abbreviation: "IL" },
    { name: "Indiana", abbreviation: "IN" },
    { name: "Iowa", abbreviation: "IA" },
    { name: "Kansas", abbreviation: "KS" },
    { name: "Kentucky", abbreviation: "KY" },
    { name: "Louisiana", abbreviation: "LA" },
    { name: "Maine", abbreviation: "ME" },
    { name: "Marshall Islands", abbreviation: "MH" },
    { name: "Maryland", abbreviation: "MD" },
    { name: "Massachusetts", abbreviation: "MA" },
    { name: "Michigan", abbreviation: "MI" },
    { name: "Minnesota", abbreviation: "MN" },
    { name: "Mississippi", abbreviation: "MS" },
    { name: "Missouri", abbreviation: "MO" },
    { name: "Montana", abbreviation: "MT" },
    { name: "Nebraska", abbreviation: "NE" },
    { name: "Nevada", abbreviation: "NV" },
    { name: "New Hampshire", abbreviation: "NH" },
    { name: "New Jersey", abbreviation: "NJ" },
    { name: "New Mexico", abbreviation: "NM" },
    { name: "New York", abbreviation: "NY" },
    { name: "North Carolina", abbreviation: "NC" },
    { name: "North Dakota", abbreviation: "ND" },
    { name: "Northern Mariana Islands", abbreviation: "MP" },
    { name: "Ohio", abbreviation: "OH" },
    { name: "Oklahoma", abbreviation: "OK" },
    { name: "Oregon", abbreviation: "OR" },
    { name: "Palau", abbreviation: "PW" },
    { name: "Pennsylvania", abbreviation: "PA" },
    { name: "Puerto Rico", abbreviation: "PR" },
    { name: "Rhode Island", abbreviation: "RI" },
    { name: "South Carolina", abbreviation: "SC" },
    { name: "South Dakota", abbreviation: "SD" },
    { name: "Tennessee", abbreviation: "TN" },
    { name: "Texas", abbreviation: "TX" },
    { name: "Utah", abbreviation: "UT" },
    { name: "Vermont", abbreviation: "VT" },
    { name: "Virgin Islands", abbreviation: "VI" },
    { name: "Virginia", abbreviation: "VA" },
    { name: "Washington", abbreviation: "WA" },
    { name: "West Virginia", abbreviation: "WV" },
    { name: "Wisconsin", abbreviation: "WI" },
    { name: "Wyoming", abbreviation: "WY" }
];

  const departments = [
    "Sales",
    "Marketing",
    "Engineering",
    "Human Resources",
    "Legal",
  ];

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
    openConfirmationModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConfirmationModal = () => {
    setIsModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
  };

  const ConfirmationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-backdrop">
        <div className="modal-content">
          <h2>Confirmation</h2>
          <p>L'employé a été ajouté avec succès.</p>
          <button onClick={onClose}>OK</button>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="link-container">
        <a href="/employee-list">View Current Employees</a>
      </div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input name="firstName" type="text" value={employee.firstName} onChange={handleInputChange} />
        </label>
        <label>
          Last Name:
          <input name="lastName" type="text" value={employee.lastName} onChange={handleInputChange} />
        </label>
        <label>
          Date of Birth:
          <DatePicker 
            selected={employee.dateOfBirth} 
            onChange={(date) => setEmployee({ ...employee, dateOfBirth: date })}
            dateFormat="MM/dd/yyyy"
          />
        </label>
        <label>
          Start Date:
          <DatePicker 
            selected={employee.startDate} 
            onChange={(date) => setEmployee({ ...employee, startDate: date })}
            dateFormat="MM/dd/yyyy"
          />
        </label>
        <fieldset>
          <legend>Address</legend>
          <label>
            Street:
            <input name="street" type="text" value={employee.street} onChange={handleInputChange} />
          </label>
          <label>
            City:
            <input name="city" type="text" value={employee.city} onChange={handleInputChange} />
          </label>
          <label>
            State:
            <select name="state" value={employee.state} onChange={handleInputChange}>
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Zip Code:
            <input name="zipCode" type="text" value={employee.zipCode} onChange={handleInputChange} />
          </label>
        </fieldset>
        <label>
          Department:
          <select name="department" value={employee.department} onChange={handleInputChange}>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Save</button>
      </form>
      <ConfirmationModal isOpen={isModalOpen} onClose={closeConfirmationModal} />
    </div>
  );
};

export default CreateEmployee;
