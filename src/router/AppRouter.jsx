import { createBrowserRouter } from "react-router-dom"

import Checkout from "../pages/checkout"
import Home from "../pages/home"
import Login from "../pages/login";
import Register from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/", element: <Home />
  },
  {
    path: "/checkout", element: <Checkout />
  },
  {
    path: "/login", element: <Login />
  },
  {
    path: "/register", element: <Register />
  },

]);

export default router;