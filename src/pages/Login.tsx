import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/templates/Layout';
import Button from '../components/atoms/Button';
import { useAuth } from '../context/AuthContext';
import { User, Role } from '../types/rbac';

const Login: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<Role>('user');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const user: User = {
      id: '1',
      name: `Test ${selectedRole}`,
      role: selectedRole,
    };
    login(user);
    navigate('/dashboard');
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Select Role:
          </label>
          <select
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value as Role)}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="user">User</option>
            <option value="manager">Manager</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <Button onClick={handleLogin} className="w-full">
          Login as {selectedRole}
        </Button>
      </div>
    </Layout>
  );
};

export default Login;