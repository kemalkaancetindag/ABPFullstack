import React, { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { DepartmentDetail, Departments, Login, UserDetail, Users } from './pages';
import { Layout, Loading } from './components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProtectedRoute } from './utils';
import { CookiesProvider } from 'react-cookie';
import Cookies  from 'universal-cookie';
import { AuthService } from './api/service';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const router = createBrowserRouter([
  {
    path: "/login",
    element:  <Login/>,
  },
  {
    path: "/",
    element: <ProtectedRoute
   
    >
       <Layout/>
    </ProtectedRoute>,
  }, 
]);


const queryClient = new QueryClient();

function App() {
  
  

  return (
    <>
    
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
    <Loading/>
    <ToastContainer/>
    </>
  );
}

export default App;
