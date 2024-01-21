// src/reducers/employeeReducer.js
import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    // Define other actions like removeEmployee, updateEmployee, etc.
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
