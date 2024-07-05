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
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: '/products',
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: '/products/:id',
    element: (
      <Layout>
        <ProductPage />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
]);
