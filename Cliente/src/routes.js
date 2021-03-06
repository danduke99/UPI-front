import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import MainLayout from 'src/components/MainLayout';
import Account from 'src/pages/Account';
import CustomerList from 'src/pages/Materias';
import Dashboard from 'src/pages/Dashboard';
import ProductList from 'src/pages/Calendar';
import Settings from 'src/pages/Settings';
import SingIn from 'src/components/login/login';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },

    ]
  },
  { path: 'login', element: <SingIn /> },
  {
    path: '/',
    element: <MainLayout />,
    children: [{ path: '/', element: <Navigate to="/app/dashboard" /> }]
  }
];

export default routes;
