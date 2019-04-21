import { DELETE_PRODUCT, ADD_PRODUCT, FETCH_PRODUCT } from "../actions/productsactions";

const initalAppState = [
    ];

const  productReducer = (state = initalAppState, action) =>{
  switch (action.type){

    case DELETE_PRODUCT:
      return state.filter((item) => {
          return item.productCode!== action.productCode;
      });
    break;
    case ADD_PRODUCT:
      return [...state,
        action.product
      ]
    break;
    case FETCH_PRODUCT:
    return [
      ...action.data
    ]
    break;
    default: 
      return state;
  }
  return state
}

export default productReducer;