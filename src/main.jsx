import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AllTouristsSpot from './components/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './components/AddTouristsSpot/AddTouristsSpot';
import MyList from './components/MyList/MyList';
import { HelmetProvider } from 'react-helmet-async';
import AuthProviders from './AuthProviders/AuthProviders';
import PraivetRoute from './PraivetRoute/PraivetRoute';
import SpotDetails from './components/SpotDetails/SpotDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      },
      {
        path: "allTouristsSpot",
        element: <AllTouristsSpot />,
        loader: () => fetch('https://peaceful-tour-server.vercel.app/spot')
      },
      {
        path: "addTouristsSpot",
        element: <PraivetRoute><AddTouristsSpot /></PraivetRoute>
      },
      {
        path: "myList",
        element: <PraivetRoute><MyList /></PraivetRoute>
      },
      {
        path: "/spotDetails/:id",
        element: <SpotDetails></SpotDetails>,
        loader: () => fetch('https://peaceful-tour-server.vercel.app/spot')
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProviders>
  </React.StrictMode>,
)
