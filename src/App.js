import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { createRoutesFromElements, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

//Paths -->
//https//example.com/products
//https//example.com/


// React-Router-DOM package > 6.4 preferred way currently
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },       //path: '' --> indexed Routes
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <ProductDetail /> }
    ]
  },

]);

// React-Router-DOM package < 6.4 old way deprecated

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<Products/>}/>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
