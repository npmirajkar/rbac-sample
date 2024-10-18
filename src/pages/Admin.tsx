import React from 'react';
import Layout from '../components/templates/Layout';
import { useAuth } from '../context/AuthContext';
import ActionButton from '../components/molecules/ActionButton';
import { useRBAC } from '../hooks/useRBAC';

const Admin: React.FC = () => {
  const { user } = useAuth();
  const { getActions } = useRBAC();

  const availableActions = getActions();

  if (user?.role !== 'admin') {
    return (
      <Layout>
        <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
        <p className="text-red-600">You do not have permission to view this page.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
      <p className="text-gray-600 mb-4">Welcome to the admin panel, {user.name}!</p>
      <div className="space-y-4">
        {availableActions.map(action => (
          <ActionButton
            key={action.id}
            actionId={action.id}
            label={action.name}
            variant={['create_user', 'assign_roles', 'system_backup'].includes(action.id) ? 'secondary' : 'primary'}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Admin;