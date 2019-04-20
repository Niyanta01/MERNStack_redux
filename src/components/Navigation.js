import React, { Component } from 'react';
import {Link, NavLink}  from 'react-router-dom';
import '../App.css';

class Navigation extends Component{

    render(){
        return(

        
            <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <NavLink className="navbar-brand" to="#">Marlabs</NavLink>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><NavLink to="/" activeClassName="active" exact={true} >Home <span className="sr-only">(current)</span></NavLink></li>
                    <li><NavLink  to="/products" activeClassName="active">Products</NavLink></li>
                    <li><NavLink to="/create" activeClassName="active">Create</NavLink></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><NavLink to="#">logout</NavLink></li>
                </ul>
            </div>
        </div>
        </nav>
    
    )
}

}

export default Navigation;