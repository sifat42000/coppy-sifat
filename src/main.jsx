import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/root/Root.jsx';
import Home from './component/Home/Benar.jsx';
import ApplaedJobs from './component/APlaedjobs/ApplaedJobs.jsx';
import ErrorElement from './component/ErrorElement/ErrorElement.jsx';
import Jobdetails from './Jobdetails/Jobdetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/applied',
        element: <ApplaedJobs></ApplaedJobs>
      },
      {
        path: '/job/:id',
        element: <Jobdetails></Jobdetails>,
        loader: () => fetch('../jobs.json')
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
