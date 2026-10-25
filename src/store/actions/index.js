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

