export const ADD_PRODUCT =" ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT" ;
export const FETCH_PRODUCT = "FETCH_PRODUCT";

export const deleteProduct_action = (productCode) =>{
    return{
        type:DELETE_PRODUCT,
        productCode
    }
}
export const addProduct  = (product) =>{
    return {
        type: ADD_PRODUCT,
        product
    }
}

export const fetchProduct = ()=>{


    return(dispatch) =>{
        fetch('http://localhost:4000/products')
        .then((data)=> data.json())
        .then((data)=>{
            dispatch({
                type: FETCH_PRODUCT,
                data    
            });
        });
    }
   

}