import React from 'react';
import Layout from '../components/templates/Layout';
import { useAuth } from '../context/AuthContext';
import ActionButton from '../components/molecules/ActionButton';
import { useRBAC } from '../hooks/useRBAC';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { getActions } = useRBAC();

  const availableActions = getActions();

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-4">Welcome to your dashboard, {user?.name}!</p>
      <div className="space-y-4">
        {availableActions.map(action => (
          <ActionButton
            key={action.id}
            actionId={action.id}
            label={action.name}
            variant={['create_task', 'approve_expense', 'generate_report'].includes(action.id) ? 'secondary' : 'primary'}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Dashboard;