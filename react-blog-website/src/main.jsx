import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../src/pages/Home.jsx";
import About from "../src/pages/About.jsx";
import Blogs from "../src/pages/Blogs.jsx";
import Contact from "../src/pages/Contact.jsx";
import Services from "../src/pages/Services.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element:<About/>
    },
    {
      path: "/blogs",
      element:<Blogs/>
    },
    {
      path: "/Contact",
      element:<Contact/>
    },
    {
      path: "/services",
      element:<Services/>
    },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
