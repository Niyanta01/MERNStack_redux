//data for users
const initalAppState = [
    {
        "user_id" :1,
        "username":"user1"
    },
    {
        "user_id" :2,
        "username":"user2"
    },
    {
        "user_id" :3,
        "username":"user3"
    },
    {
        "user_id" :4,
        "username":"user4"
    }
];

//reducer fun for user and it has 2 param state, action and then we return the state with inital value as userdata
const userReducer = (state = initalAppState, action) =>{
    return state; 
};

export default userReducer;