// Introduction to private and public routes
// if the page is private then user will be redirect to login page 
// if the page is public then nothing required
// if u try to acces a page from url then it redirects to login page

import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ publicPage = false }) => {
  const { user } = useSelector((state) => (state.auth));

  // if the pages is marked as public and user is not authenticated 
  if(publicPage){
    return user ? <Navigate to = "/" /> : <Outlet />;
  }

  // if page is private and user is authenticated 
  return user ? <Outlet /> : <Navigate to = "/login"/> ;
}

export default PrivateRoute
