import './App.css';
import ReactDOM  from 'react-dom/client';
import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider 
} from 'react-router-dom';
import ExpensesScreen from './pages/ExpensesScreen';
import AccountsScreen from './pages/AccountsScreen';
import BillsScren from './pages/BillsScren';
import GoalsScreen from './pages/GoalsScreen';
import TransactionsScreen from './pages/TransactionsScreen';


const router = createBrowserRouter([
  {
    path: '/',
    element: <ExpensesScreen></ExpensesScreen>
  },
  {
    path: '/expenses',
    element: <ExpensesScreen></ExpensesScreen>
  },
  {
    path: '/accounts',
    element: <AccountsScreen></AccountsScreen>
  },
  {
    path: '/bills',
    element: <BillsScren></BillsScren>
  },
  {
    path: '/goals',
    element: <GoalsScreen></GoalsScreen>
  },
  {
    path: '/transactions',
    element: <TransactionsScreen></TransactionsScreen>
  }
]);

export default function App() {
  return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    );
};
