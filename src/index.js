import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './store/store';
import { Provider } from 'react-redux';
import Login from './features/dashboard/login';
import Home from './features/dashboard/Home';
import Dashboard from './features/dashboard/Dashboard';
import Mandal from './features/dashboard/Mandal';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
     { path:"/login",
      element:<Login></Login>},
      {
        path:"/dashbord",
        element:<Dashboard></Dashboard>,
        children:[
          {
            path:"/dashbord/:mid",
            element:<Mandal></Mandal>
          }
     
        ]
      },

    ]
  
  }
  ])
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
        <RouterProvider router={router} />
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
