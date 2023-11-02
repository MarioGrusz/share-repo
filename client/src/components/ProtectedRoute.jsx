// Example of a protected route using React Router
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {

 const isAuthenticated = !!localStorage.getItem('token');

 return (
   <Route
     {...rest}
     render={props =>
       isAuthenticated ? (
         <Component {...props} />
       ) : (
         <Redirect to="/login" />
       )
     }
   />
 );
}

export default ProtectedRoute
