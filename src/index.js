import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Html from './pages/Html';
import Css from './pages/Css';
import Javascript from './pages/Javascript';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Html",
    element: <Html/>,
  },
  {
    path: "/Css",
    element: <Css/>,
  },
  {
    path: "/Javascript",
    element: <Javascript/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

