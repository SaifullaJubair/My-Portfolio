import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../About/About";
import Blog from "../Blogs/Blog";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
// import UnKnownRoutes from "./UnKnownRoutes";
import MyServices from "../MyServices/MyServices";
import Skills from "../Skills/Skills";
import Charity from "../Projects/ProjectDetails/Charity";
import MoboSell from "../Projects/ProjectDetails/MoboSell";
import ShovonsGallery from "../Projects/ProjectDetails/Shovon'sGallery";
import FareBd from "../Projects/ProjectDetails/FareBd";
import News71 from "../Projects/ProjectDetails/News71";
import Projects from "../Projects/Projects";
import LensBD from "../Projects/ProjectDetails/LensBD";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <UnKnownRoutes></UnKnownRoutes>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service",
        element: <MyServices />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/projects/mobosell",
        element: <MoboSell />,
      },
      {
        path: "/projects/shovon's-gallery",
        element: <ShovonsGallery />,
      },
      {
        path: "/projects/charity",
        element: <Charity />,
      },
      {
        path: "/projects/lens-bd",
        element: <LensBD />,
      },
      {
        path: "/projects/farebd",
        element: <FareBd />,
      },
      {
        path: "/projects/news71",
        element: <News71 />,
      },
      // {
      //    path: "/projects/thekitchen",
      //    element: <TheKitchen></TheKitchen>
      // },
      // {
      //    path: "/projects/edmy",
      //    element: <Edmy></Edmy>
      // },
    ],
  },
]);
export default router;
