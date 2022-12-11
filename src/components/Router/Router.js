import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../About/About";
import Blog from "../Blogs/Blog";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/projects",
            element: <Projects></Projects>
         },
         {
            path: "/about",
            element: <About></About>
         },
         {
            path: "/blog",
            element: <Blog></Blog>
         },

      ]
   }
])
export default router