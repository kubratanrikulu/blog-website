import About from "/src/pages/About/About.jsx";
import Homepage from "../pages/Homepage/homepage";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
const routesPaths = [
  {
    path: "/",
    element: <Homepage/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/blog",
    element: <Blog/>
  },
  
];

export default routesPaths
