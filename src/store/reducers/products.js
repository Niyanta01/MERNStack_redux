import { DELETE_PRODUCT, ADD_PRODUCT, FETCH_PRODUCT } from "../actions/productsactions";


//reducer 
//it is a fun which will return inital state of your app by default and it has 2 para by defualt 
//1sr: state= will be blank by default , 2:action

const initalAppState = [
    // initial state of app which holds all the data and then we pass this var into reducer fun as inital state 
    ];

const  productReducer = (state = initalAppState, action) =>{
  // in here we define the actions that we are dispatching and logic of both the functions we defined in 
  //actions and write the logic of those fun in here by if or switch or anything 



  switch (action.type){
    // using product code we identify product and return neew arraywothout taht product

    case DELETE_PRODUCT:
      return state.filter((item) => {
          return item.productCode!== action.productCode;
        // so we return the array which is not same as the array we input with the product code and using action 
        //we return the array of action which is delelte.
      });
    break;
    case ADD_PRODUCT:
      return [...state,
        action.product
      ]
      //this will return new array with new vaiues as well as existing values and with action.product it will
      //identify the values 
    break;
    //to get the data into reducer we add another switch case and return an array for action.data 
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