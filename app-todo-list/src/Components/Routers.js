import React, { Component } from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Login from './Login';
import  App  from '../App';
import PrivateRoute from './privateRouter'
class Router extends Component {
   render (){ 
    let routes = (
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRoute component={App} path="/list" exact />
        </Switch>
      );
       return(
        <BrowserRouter>
         {routes}
        </BrowserRouter>
           
       )
   }
}
export default Router;