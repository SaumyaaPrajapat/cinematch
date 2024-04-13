import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FirstPage from "./Firstpage";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  // Get the current page from session storage
  const currentPage = sessionStorage.getItem("currentPage");
  //
  // Define the routes
  const routes = [
    {
      path: "/",
      element: <FirstPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ];

  // Create the router with the specified routes
  const appRouter = createBrowserRouter(routes);

  // Save the current page to session storage when the component mounts
  useEffect(() => {
    sessionStorage.setItem("currentPage", window.location.pathname);
  }, []);

  return (
    <div>
      {/* Use the current page from session storage */}
      <RouterProvider router={appRouter} initialEntries={[currentPage]}>
        {/* Render the router */}
      </RouterProvider>
    </div>
  );
};

export default Body;
