
const initialState = {
    paymentMethod : null,  // for user select the default payment method
}



export const paymentMethodReducer = (state = initialState, action) => {
        switch(action.type){
            case  "ADD_PAYMENT_METHOD":
                return{
                    ...state,
                    paymentMethod: action.payload,
                };

            default:
                return state;
        }
        
};


