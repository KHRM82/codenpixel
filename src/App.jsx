import React from "react";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home/Home";
import Programs from "./pages/Programs/Programs";
import Instructors from "./pages/Instructors/Instructors";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// Layout component that includes header and footer
const Layout = () => {
  return (
    <div className="min-h-screen bg-darker text-light">
      <Header />
      <main>
        <Outlet /> {/* This is where page content will be rendered */}
      </main>
      <Footer />
    </div>
  );
};

// Create router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "programs",
        element: <Programs />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
