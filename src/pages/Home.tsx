import React from 'react';
import Layout from '../components/templates/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Welcome to RBAC App</h1>
      <p className="text-gray-600">This is the home page, accessible to all users.</p>
    </Layout>
  );
};

export default Home;