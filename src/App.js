import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import EmployeeTable from './pages/employee/EmployeeTable';
import Home from './pages/components/Home';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/employees' element={<EmployeeTable/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
