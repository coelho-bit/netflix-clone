import React from "react";
import Home from "./pages/Home/index";
import Users from "./pages/Users/index";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import Login from "./pages/Login/index";
import { Confirmation, Form } from "./pages/Registration/index";
import Movies from "./pages/Movies/index";
import PrivateRoute from "./pages/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthProvider>
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/movies" component={Movies} />
          <Route exact path="/signup" component={Confirmation} />
          <Route exact path="/signup/register" component={Form} />
          <Route exact path="/login" component={Login} />
        </AuthProvider>
      </Switch>
    </Router>
  );
}

export default App;
