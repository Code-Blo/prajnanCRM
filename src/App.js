 import {
  createBrowserRouter,
  RouterProvider,
  Route,
 } from "react-router-dom";
import Home from "./pages/home/Home";
import Customers from "./pages/customers/Customers";
import Product from "./pages/product/Product";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
// import { userInputs, productInputs } from "./formData";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/users/:userId",
  //   element: <Single />,
  // },
  {
    path: "/product/:productId",
    element: <Single />,
  },
  {
    path: "/users",
    element: <Customers />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  // {
  //   path: "/users/:userId/new",
  //   element: <New inputs={userInputs} title={"Add New User"} />,
  // },
  // {
  //   path: "/product/:productId/new",
  //   element: <New inputs={productInputs} title={"Add New Product"} />,
  // },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
