
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProduct_action, fetchProduct } from '../store/actions/productsactions';

class Product extends Component{

    
    state = { 
         loadImage: true
    }
    
    componentDidMount(){
        console.log("component init");
        console.log(this.props.dispatch);
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
        this.props.dispatch(deleteProduct_action(productCode));
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


function mapStateToProps(store){

    return{
        products:store.products,
        users: store.users
    }
}

export default connect(mapStateToProps)(Product);
