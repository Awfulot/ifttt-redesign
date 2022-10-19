import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./HomePage";
import AppletsPage from "./AppletsPage";
import DevelopersPage from "./DevelopersPage";
import ExplorePage from "./ExplorePage";
import CreatePage from "./CreatePage";
import SignUpPage from "./SignUpPage";
import LogInPage from "./LogInPage";
import UserApplets from "./UserApplets";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/AppletsPage",
                element: <AppletsPage/>
            }
            ,
            {
                path: "/DevelopersPage",
                element: <DevelopersPage/>
            }
            ,
            {
                path: "/ExplorePage",
                element: <ExplorePage/>
            },
            {
                path: "/CreatePage",
                element: <CreatePage/>
            }
            ,
            {
                path: "/sign-up-page",
                element: <SignUpPage/>
            }
            ,
            {
                path: "/log-in-page",
                element: <LogInPage/>
            },
            {
                path: "/applet-hub/:id",
                element: <UserApplets/>
            }
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
