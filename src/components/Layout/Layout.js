import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import Services from "../Pages/Services/Services";
import Error from '../Pages/Error/Error'
import Admin from "../Admin/Admin";
import Project from "../Pages/Projects/Project/Project";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
  path:'/',
  element:<Home/>
},
{
path:'/about',
element:<About/>
},
{
  path:'/admin',
  element:<Admin/>
  },
{
  path:'/projects',
  element:<Projects/>
  },
  {
    path:'/project',
    element:<Project/>
    },
  {
    path:'/services',
    element:<Services/>
    },
    {
      path:'/contact',
      element:<Contact/>
      },
      {
        path:'*',
        element:<Error/>
      }
])
const Layout = () => {
  return <RouterProvider router={router}/>
};

export default Layout;
