export const ADD_PRODUCT =" ADD_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT" ;
export const FETCH_PRODUCT = "FETCH_PRODUCT";
//to get the data from server

export const deleteProduct_action = (productCode) =>{
//these are action creators fun which will return const values 
    return{
        type:DELETE_PRODUCT,
        productCode
    }
}
export const addProduct  = (product) =>{
   //in here we are adding the products inside obj and then using this value the reducer will know 
   //that it has to look for that type and add product and then go to reducer fun and execute that case
   //for addproduct

    return {
        type: ADD_PRODUCT,
        product
    }
}

export const fetchProduct = ()=>{


    //this method will ny default return promise instance so we can use then
    // we retrn the fun and we pass a defualt method called dispatch and that works like acions fun as it takes an obj
    //and the same prope
    return(dispatch) =>{
        fetch('http://localhost:4000/products')
        .then((data)=> data.json())
        .then((data)=>{
            // console.log(data);
            dispatch({
                type: FETCH_PRODUCT,
                data    
            });
        });
    }
   

}