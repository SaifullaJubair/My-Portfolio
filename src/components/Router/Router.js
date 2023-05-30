import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../About/About";
import Blog from "../Blogs/Blog";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import Edmy from "../Projects/Project/Edmy";
import MoboSell from "../Projects/Project/MoboSell";
import TheKitchen from "../Projects/Project/TheKitchen";
import Projects from "../Projects/Projects";
import UnKnownRoutes from "./UnKnownRoutes";
import FareBd from "../Projects/Project/FareBd";
import News71 from "../Projects/Project/News71";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <Main></Main>,
      errorElement: <UnKnownRoutes></UnKnownRoutes>,
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
         {
            path: "/contact",
            element: <Contact></Contact>
         },
         {
            path: "/projects/mobosell",
            element: <MoboSell></MoboSell>
         },
         {
            path: "/projects/farebd",
            element: <FareBd></FareBd>
         },
         {
            path: "/projects/news71",
            element: <News71></News71>
         },
         // {
         //    path: "/projects/thekitchen",
         //    element: <TheKitchen></TheKitchen>
         // },
         // {
         //    path: "/projects/edmy",
         //    element: <Edmy></Edmy>
         // },

      ]
   }
])
export default router