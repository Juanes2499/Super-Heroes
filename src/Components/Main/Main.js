import React, { Component } from "react";
import { Switch, Route, Redirect, } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../Elements/Content/Content.css";
import Home from '../Pages/HomePage/Home';

class Main extends Component {


  //El metodo de redireccionamiento.

  render () {
    return (
      <div className="o-container-main">
        <Switch>
          <Route path="/Home" component={Home}/>
          <Redirect to ="/Home"/>
        </Switch>
      </div>
    );
  }

}
export default Main;
