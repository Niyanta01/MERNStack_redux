import React, { Component } from 'react';
import Product from './products';
import Create from './create';
import Home from './home';
import { Route, Switch} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Navigation from './Navigation';
import Detail from './Detail';
import  PrivateRoute from "./PrivateRoute";

class App extends Component {
  
  
  render() {

    
    return(
      <div className="container">
      <Navigation/>
      <Switch>
          <Route path="/" component={Home} exact={true}/>
          <PrivateRoute path="/products/:pid" component={Detail}/>
          <PrivateRoute path="/products" render={()=>{
            return <Product/>
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
