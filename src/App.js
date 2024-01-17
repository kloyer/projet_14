// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<EmployeeList />} />
      </Routes>
    </Router>
  );
}

export default App;
