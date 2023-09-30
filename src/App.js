
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router-dom";
import Navbar from "./components/pages/navbar"
import Footer from "./components/pages/footer"
import Home from "./components/pages/home"


import { ThemeProvider} from "./components/pages/ThemeContext"




const Layout = () => {
  return (
    <>
      <Navbar  />
      <Outlet />
      <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />


      }
     
    ]
  }
 
]);

function App() {
  // const { isDarkMode } = useTheme();
  
  return (
    <ThemeProvider>
      <div  >
      <RouterProvider router={router} />
    </div>
    </ThemeProvider >
  );
}

export default App;
