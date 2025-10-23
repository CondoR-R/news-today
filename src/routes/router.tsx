import {createBrowserRouter} from "react-router-dom";
import {Layout} from "@/routes/Layout.tsx";
import {HomePage, NewsPage} from "@/pages";

export const router = createBrowserRouter([{
  path: "/",
  element: <Layout />,
  children: [
    {index: true, element: <HomePage />},
    {path: '/news/:news', element: <NewsPage />}
  ],
}])