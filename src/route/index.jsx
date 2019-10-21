import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import About from '../container/about';
import Login from '../container/login';



const AppRouter=()=> {
  return (
    <Router>
      <Header />
      <Switch>        
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default AppRouter;