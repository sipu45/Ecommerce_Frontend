
const initialState = {
    user : null,
    address : [],
    selectedUserCheckOutAddres : null,
}



export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return { ...state , user: action.payload};
        

        case "USER_ADDRESS":
            return { ...state , address: action.payload};

        case "SELECT_CHECKOUT_ADDRESS":
            return { ...state , selectedUserCheckOutAddres: action.payload};

        case "REMOVE_CHECKOUT_ADDRESS":
            return {...state , selectedUserCheckOutAddres: null}
            

        case "LOG_OUT":
            return { 
                user:null,
                address:null,
            }; 
            
            
        default:
            return state;
    }
};


