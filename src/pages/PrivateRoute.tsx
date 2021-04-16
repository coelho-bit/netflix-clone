import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();

  if(!currentUser) {
    return <Redirect to="/login"/>;
  }

  return (
    <Route {...rest}/>
  );
}

export default PrivateRoute;