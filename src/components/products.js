// created new comp and imported few things

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct_action, fetchProduct } from '../store/actions/productsactions';

class Product extends Component{

    
    state = { 
         loadImage: true
    }
    
    componentDidMount(){
        //lifecycle method just like ngOnInit and to decalre ti we do like this
        console.log("component init");
        console.log(this.props.dispatch);
        //since we want to get the data in component we need to pass the fetch prod fun in here at init
        //and for that we have to dispatch an devent to call th fetch prod method
        this.props.dispatch(fetchProduct());
    }

    toggleImage = () => {
        this.setState((prevState)=>{
            return {
                loadImage : !prevState.loadImage
            }
        });
    }

    deleteProducts = (productCode) =>{
        //we have to dispatch the action from actions using this fun and call the delete product fun from action 
        //after inporting ie we are dispatching actios
        this.props.dispatch(deleteProduct_action(productCode));
        //we are passing productcode as the value to deletethe specific products and we also pass it in deleteproducts
        //of actions
        
    }
  
    render(){
      return <div className = "panel panel-success">
            <div className ="panel-heading">Products</div>
            <div className="panel-body">
             <table className="table table-bordered">

                 <thead>
                 <tr>
                     <th>
                       <button className="btn btn-primary"  onClick={this.toggleImage}>
                             {
                                this.state.loadImage ? "hide" : "show"
                            }
                       </button> 
                     </th>
                     <th>Product name</th>
                     <th>Product code</th>
                     <th>Price</th>
                     <th> Rating</th>
                     <th></th>
                 </tr>
                 </thead>
                 <tbody>
                 {
                    this.props.products  && this.props.products.map((item, index) => (
                        // checking if the values are present ornot and then mapping it
                         <tr key={index}>
                             <td>
                                 {
                                    
                                     this.state.loadImage &&
                                     <img src={item.imageUrl} style={{width:"50px"}}/>
                                 }
                                 
                             </td>

                            <td>
                                <Link to={"/products/"+item.productCode}>
                                 {item.productName}
                                </Link>
                               
                            </td>

                            <td>{item.productCode}</td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                            <td><button className="btn btn-danger" onClick={() => this.deleteProducts(item.productCode)}>Remove</button></td>
                         </tr>
                     ))
                 }
                 </tbody>
             </table>
            </div>
        </div>
    
    }
}

//this will map the props of current comp to application state which is store
//this fun will bydefault have store as 1st para and whatever we return from it will automatically get mapped into properties


function mapStateToProps(store){

    return{
        products:store.products,
        users: store.users
    }
// scne stire has multiple data we have to give . to access the specific data
}

export default connect(mapStateToProps)(Product);
//we use this connect method to connect the comp directly to store and connect returns a fun so it has 2 () 
//and then in the 2ndone as it returns a fun we will pass the comp that we want to connect as a para to the return fun pf connect 