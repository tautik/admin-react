import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages";

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
        <div className="relative font-[Nunito]">
          <Outlet />
        </div>
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default App;
