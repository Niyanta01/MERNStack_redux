import React, { Component } from 'react';
// import './App.css';
import Product from './products';
import Create from './create';
import Home from './home';
import { Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Navigation from './Navigation';
import Detail from './Detail';
import  PrivateRoute from "./PrivateRoute";

class App extends Component {
  
  //we do not need them here as we are going to define them inside actions creator 
  
  render() {

    
    return(
      <div className="container">
      <Navigation/>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          <PrivateRoute path="/products/:pid" component={Detail}/>
          <PrivateRoute path="/products" render={()=>{
            return <Product/>
            // removed products as we do not have access to it
          }}/>
         
          <PrivateRoute path="/create" render={()=>{
            return <Create />
           }}/>
          <Route component={PageNotFound}/> 
      </Switch>
      
    
      </div>
      );

  }
}

export default App;
