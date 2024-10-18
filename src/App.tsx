import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { checkAccess } from './utils/rbac';

const ProtectedRoute: React.FC<{ element: React.ReactElement; path: string }> = ({ element, path }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!checkAccess(user.role, path)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} path="/dashboard" />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<Admin />} path="/admin" />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;