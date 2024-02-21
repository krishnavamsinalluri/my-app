import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  
import reportWebVitals from './reportWebVitals';
import Home from './features/Dashbord/home';
import Dashbord from './features/Dashbord/dashboard';
import Register from './features/Dashbord/resition';
const router= createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/dashbord",
                element:<Dashbord></Dashbord>
        
            },{
                path:"/register",
                element:<Register></Register>

            }
         
        ]
    },
   
   

        

       
    
      
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
