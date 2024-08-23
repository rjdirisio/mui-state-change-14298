import * as React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const TableTest = React.lazy(() => import("./TableTest"));

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <React.Suspense>
          <TableTest />
        </React.Suspense>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
