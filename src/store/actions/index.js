import api from "../../api/api"
export const fetchProducts = (queryString) => async(dispatch) =>{
    try{
        dispatch({ type : "IS_FETCHING" });// loading
        const{ data } = await api.get(`/public/products?${queryString}`);
        dispatch({
            type:"FETCH_PRODUCTS", 
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });
        dispatch({type : "IS_SUCCESS" }); // stop the loading
    } catch(error){
        console.log(error);
        dispatch({
            type : "IS_ERROR",
            payload : error ?.response?.data?.message || "Failed to fetch Product"  //optional Chainig
         });

    }
};


export const fetchCategories = () => async(dispatch) =>{
    try{
        dispatch({ type : "CATEGORY_LOADER" });
        const{ data } = await api.get(`/public/categories`);
        dispatch({
            type:"FETCH_CATEGORIES", 
            payload: data.content,
            pageNumber: data.pageNumber,
            pageSize: data.pageSize,
            totalElements: data.totalElements,
            totalPages: data.totalPages,
            lastPage: data.lastPage
        });
        dispatch({type : "IS_ERROR" });
    } catch(error){
        console.log(error);
        dispatch({
            type : "IS_ERROR",
            payload : error ?.response?.data?.message || "Failed to fetch Category"  //optional Chainig
         });

    }
};


export const addToCart = (data , qty = 1 , toast ) =>
         (dispatch , getState) => {
            //find the product 
          
            const {products}=getState().products;
            const getProduct = products.find(
                (item) => item.productId === data.productId
            );

            //Check for Stocks
            const isQuantityEist = getProduct.quantity >= qty;

            //If in Stock->add
            if(isQuantityEist){
                dispatch({type:"ADD_CART" , payload:{...data ,quantity:qty}})
                toast.success(`${data?.productName} added to the cart`);
                localStorage.setItem("cartItems",JSON.stringify(getState().carts.cart));
            }else{
                //error
                toast.error(`out of the stock`);

            }

};


export const increaseCartQunatity =
         (data , toast , currentQuantity , setCurrentQuantity) =>
         (dispatch , getState) => {
            const { products } = getState().products;
            const getProduct = products.find(
                (item) => item.productId === data.productId
            );
            console.log(data);

            const isQuantityExist = getProduct.quantity >= currentQuantity + 1;
            
            
            if(isQuantityExist){
                const newQuantity = currentQuantity + 1;
                setCurrentQuantity(newQuantity); // update quantity on ui

                dispatch({
                    type : "ADD_CART",
                    payload: {...data , quantity : newQuantity + 1 } // updated on redux store 
                });
                localStorage.setItem("cartItems" ,JSON.stringify(getState().carts.cart)); // updated on local Storage
            } else{
                toast.error("Quantity Reached to Limit");
            }
         }


export const decreaseCartQunatity =
         (data , newQuantity) => (dispatch , getState) => {
                dispatch({
                    type:"ADD_CART",
                    payload: {...data , quantity: newQuantity }
                });

                localStorage.setItem("cartItems" ,JSON.stringify(getState().carts.cart)); // updated on local Storage

         }



export const removeFromCart =(data ,toast) => (dispatch , getState) => {
        dispatch({type:"REMOVE_CART", payload:data })
        console.log(data);
        toast.success(`${data.productName} remove from cart`);
        localStorage.setItem("cartItems" ,JSON.stringify(getState().carts.cart)); // updated on local Storage

    }




export const authenticateSignInUser
  = (sendData , toast , reset , navigate , setLoader) => async(dispatch) => {
        try{                    
            setLoader(true);
            const { data } = await api.post("/auth/signin",sendData);  //API CALL TO BACkEND  sendData -> username and password
            dispatch({type: "LOGIN_USER", payload: data});  // update the  authReducer in redux store
            localStorage.setItem("auth",JSON.stringify(data)); // update the local storage in browser
            reset() // reset the form (provide by react-hook-form)
            toast.success("Login Success");
            navigate("/");  // navigate to homepage
        } catch(error){
            console.log(error);
            toast.error(error?.response?.data?.message || "Internal Server error");
        } finally{
            setLoader(false);
        }
}


export const registerNewUser
  = (sendData , toast , reset , navigate , setLoader) => async() => { // if any error happen then add dispatch in the async function 
        try{                    
            setLoader(true);
            const { data } = await api.post("/auth/signup",sendData);  //API CALL TO BACkEND  sendData -> username,password and email
            reset() // reset the form (provide by react-hook-form)
            toast.success( data?.message || "User Register  Successfully"); // backend might send some message to show the user that registration is successfull
            navigate("/login");
        } catch(error){
            console.log(error);
            toast.error(error?.response?.data?.message || error?.response?.data?.password || "Internal Server error");
        } finally{
            setLoader(false);
        }
}


export  const logOutUser =(navigate) => (dispatch) =>{
    dispatch({type:"LOG_OUT"});

    //remove the auth from local storage
    localStorage.removeItem("auth");
    navigate("/login");
}



// CheckOut Flow 
// checkout in cart page -> address page -> payment page -> order summary page -> final payment 
// user is now serious about making a purchase so we will saving the cart in backend

export const addUpdateUserAddress = 
(sendData , toast , addressId , setOpenAddressModal) => async(dispatch , getState) => {

    // get the user from authReducer
    // const { user } = getState().auth;
    // dispatch the btnLoader true to show the loader on the button
    dispatch({type:"BTN_LOADER"});

    try{                    
         const { data } = await api.post("/addresses",sendData);  //API CALL TO BACkEND  
         toast.success( "Address Added Successfully"); 
         dispatch({type:"IS_SUCCESS"}); // stop the loader
        } catch(error){
            console.log(error);
            toast.error(error?.response?.data?.message ||  "Internal Server error");
             dispatch({type:"IS_ERROR", payload:null});

        } finally{
            setOpenAddressModal(false); // close the modal
        }

}


export const getUserAddresses = () => async(dispatch , getState) =>{
    try{
        dispatch({ type : "IS_FETCHING" });
        const{ data } = await api.get(`/addresses`);
        dispatch({type:"USER_ADDRESS", payload: data});
        dispatch({type : "IS_SUCCESS" });
    } catch(error){
        console.log(error);
        dispatch({
            type : "IS_ERROR",
            payload : error ?.response?.data?.message || "Failed to fetch User's  Address"  //optional Chainig
         });

    }
};

export const selectUserChecOutAddress = (address) => {
    return {
        type : "SELECT_CHECKOUT_ADDRESS",
        payload : address,
    }
}