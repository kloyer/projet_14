// src/pages/CreateEmployee.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import Dropdown from '../components/Dropdown';
import ConfirmationModal from '../components/ConfirmationModal';
import { states, departments } from '../data/data';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../reducers/employeeReducer';
import 'react-datepicker/dist/react-datepicker.css';

const CreateEmployee = () => {
  const dispatch = useDispatch();
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

  const handleInputChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleDropdownChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the action to add an employee to the store
    dispatch(addEmployee(employee));
    openConfirmationModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openConfirmationModal = () => {
    setIsModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <div className="link-container">
      <Link to="/employee-list">View current employees</Link>
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
          <Dropdown
            name="state"
            value={employee.state}
            options={states.map((state) => ({ value: state.abbreviation, label: state.name }))}
            onChange={handleDropdownChange}
            label="State"
          />
          <label>
            Zip Code:
            <input name="zipCode" type="text" value={employee.zipCode} onChange={handleInputChange} />
          </label>
        </fieldset>
        <Dropdown
          name="department"
          value={employee.department}
          options={departments.map((dept) => ({ value: dept, label: dept }))}
          onChange={handleDropdownChange}
          label="Department"
        />
        <button type="submit">Save</button>
      </form>
      <ConfirmationModal isOpen={isModalOpen} onClose={closeConfirmationModal}>
        <h2>Confirmation</h2>
        <p>L'employé a été ajouté avec succès.</p>
      </ConfirmationModal>
    </div>
  );
};

export default CreateEmployee;
