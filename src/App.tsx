import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import SinglePage from "./pages/singlePage/SinglePage";
import Layout from "./layout/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element : <Layout/>,
    children :[
      {
        element : <Home />,
        path : "/"
      },
      {
        element : <SinglePage />,
        path : "/details/:id"
      }
    ]
  }

])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
