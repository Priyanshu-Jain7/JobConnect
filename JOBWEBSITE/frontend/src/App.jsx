import { Button } from "@/components/ui/button";
import Navbar from "@/components/shared/Navbar";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Home from "@/components/Home";
import Login from "@/components/auth/login";
import SignUp from "@/components/auth/SignUP";

const appRouter= createBrowserRouter([
  {
    path: "/",                      
    element: <Home />, 
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Jobs",
    element: <Jobs />,
  },
]);

function App() {
  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
