import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, ListPage, Single } from "./pages";
import SidebarCmp from "./components/sidebar/SidebarCmp";
import { Navbar } from "./components/navbar";
import New from "./pages/New";
import { productInputs, userInputs } from "./contants/formsource";

const App = () => {
  return (
    // <Provider store={store}>
    <RouterProvider router={routes} />
    // </Provider>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <div className="font-[Nunito] flex">
          <SidebarCmp />
          <div className="w-full">
            <Navbar />
            <Outlet />
          </div>
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "users",
        element: <ListPage />,
      },
      {
        path: "users/userId",
        element: <Single />,
      },
      {
        path: "users/new",
        element: <New inputs={userInputs} title="Add New User" />,
      },
      {
        path: "/products",
        element: <ListPage />,
      },
      {
        path: "products/productId",
        element: <Single />,
      },
      {
        path: "product/new",
        element: <New inputs={productInputs} title="Add New Product" />,
      },
    ],
  },
]);

export default App;
