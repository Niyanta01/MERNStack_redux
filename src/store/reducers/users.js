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

const userReducer = (state = initalAppState, action) =>{
    return state; 
};

export default userReducer;