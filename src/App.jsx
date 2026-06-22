import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import AuthLayout from './components/AuthLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import InhaberDashboard from './pages/InhaberDashboard';
import ApothekerDashboard from './pages/ApothekerDashboard';

function App() {
  const token = localStorage.getItem('userToken') || localStorage.getItem('pharmacyToken');
  const role = localStorage.getItem('userType');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!token ? <Navigate to="/login" /> : (role === 'pharmacist' ? <Navigate to="/apotheker" /> : <Navigate to="/inhaber" />)} />
        
        {/* Public Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={token ? <DashboardLayout /> : <Navigate to="/login" />}>
          <Route path="/inhaber/*" element={role === 'pharmacy' ? <InhaberDashboard /> : <Navigate to="/apotheker" />} />
          <Route path="/apotheker/*" element={role === 'pharmacist' ? <ApothekerDashboard /> : <Navigate to="/inhaber" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
