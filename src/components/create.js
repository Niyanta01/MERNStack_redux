import React , { Component } from 'react';
import PanelBox from './PanelBox';
import { withRouter } from 'react-router-dom';
import { addProduct } from '../store/actions/productsactions';
import { connect } from 'react-redux';
import  serializeForm  from 'form-serialize';

class Create extends Component {

    state = {
        products: {
            productName:"",
            productCode:"",
            price:"",
            rating:""
        }
    }

    createProducts = (event) =>{
        event.preventDefault();
        
        //this.props.dispatch(addProduct(this.state.products));
        
        //we have to dispatch the action from actions using this fun and call the add product fun from action 
        //after inporting ie we are dispatching actios and from there for create products we have internal state
        //for comp as well to manage the data coming from IP and then in the addproducts fun of acrions also 
        //we have to add products inside the obj so that obj wil have 2 prop one for type and other products for data
        
        //this.props.history.push("/products");

        console.log(serializeForm(event.target, {hash:true}));
        //for serializinf form we use this method and then as we are validating form we pass onsubmit 
        //event in the form tag and not onclick event.



        
    }

  
    productsChangeHandler = (event) =>{
        this.setState((prevState)=>{
            return {
               
                products :{

                    ...prevState.products,
                    [event.target.name] : event.target.value
                }
                
            }
        });
       
        event.persist();
    }

    render(){

        const content = (
        <form onSubmit={this.createProducts}>
            {
                JSON.stringify(this.state)
            }
            <div className="form-group">
                <label className="control-label">product name</label>
                <input type="text" value={this.state.products.productName} 
                     onChange={this.productsChangeHandler}   placeholder="product name" name="productName" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">product code</label>
                <input type="text" value={this.state.products.productCode} 
                 onChange={this.productsChangeHandler} placeholder="productCode" name="productCode" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">price</label>
                <input type="text"  value={this.state.products.price} 
                 onChange={this.productsChangeHandler} placeholder="price" name="price" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="control-label">rating</label>
                <input type="text" value={this.state.products.rating} 
                 onChange={this.productsChangeHandler} placeholder="rating" name="rating" className="form-control"/> 
            </div>

            <button className="btn btn-success" >Create</button>
        </form>
        )
        
        return <PanelBox heading="Products" content= {content} />

    }
}

export default connect(null)(withRouter(Create)); 
