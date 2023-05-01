import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard, { dashboardLoader, dashboardAction } from "./pages/Dashboard";
import Main, { mainLoader } from "./layouts/Main";
import { logoutAction } from "./actions/logout";
import { ToastContainer } from "react-toastify";
import Error from "./pages/Error";
import "react-toastify/dist/ReactToastify.css";
import ExpensesPage, { expensesAction, expensesLoader } from "./pages/ExpensesPage";
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      { 
        index: true,
        element:<Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
        action: dashboardAction
      },
      {
        path: "expenses",
        element:<ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction
      },{
        path: "logout",
        action: logoutAction
      }
    ]
  },

]);
function App() {
    return (

      <div className='App'>
        <RouterProvider router={router} />
        <ToastContainer />
    </div>
  )
}

export default App
