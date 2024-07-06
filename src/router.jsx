import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Products from './pages/Products';
import ProductPage from './pages/ProductPage';
import Layout from './layout/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <App /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:id', element: <ProductPage /> },
      { path: '/contact', element: <Contact /> },
      { path: '/about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);
