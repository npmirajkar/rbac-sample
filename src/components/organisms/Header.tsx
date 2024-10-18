import React from 'react';
import { useAuth } from '../../context/AuthContext';
import NavItem from '../molecules/NavItem';
import Button from '../atoms/Button';

const Header: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">RBAC App</span>
            </div>
            <nav className="ml-10 flex items-baseline space-x-4">
              <NavItem to="/" label="Home" />
              <NavItem to="/dashboard" label="Dashboard" />
              <NavItem to="/admin" label="Admin" />
            </nav>
          </div>
          <div className="flex items-center">
            {user ? (
              <>
                <span className="text-gray-300 mr-4">Welcome, {user.name} ({user.role})</span>
                <Button onClick={logout} variant="secondary">Logout</Button>
              </>
            ) : (
              <NavItem to="/login" label="Login" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;