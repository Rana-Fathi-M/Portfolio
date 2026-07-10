import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/LayOut/layout";
// import { NotFound } from "./Components/NotFound/NotFound";
import Home from "./Components/Home/Home";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import Me from "./Components/Me/Me";
import Works from "./Components/Works/Works";
import NotFound from "./Components/NotFound/NotFound";
import LetsTalk from "./Components/LetsTalk/LetsTalk";


const routing = createBrowserRouter([
  {
    path: "/", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "Portfolio", element: <Home /> },
      { path: "me", element: <Me /> },
      { path: "work", element: <Works /> },
      { path: "contact", element: <LetsTalk /> },
      { path: '*', element: <NotFound /> }
    ],
  },
  , {
  basename: "/Portfolio", // <-- This is the magic line that fixes GitHub Pages!
}
]);


function App() {

   const {i18n} = useTranslation();
    useEffect(() => {
    if (i18n.language === "ar") {
      document.body.classList.add("font-zain");
    } else {
      document.body.classList.remove("font-zain");
    }
  }, [i18n.language]);

  return (
    <RouterProvider router={routing} />
  );
}
export default App;