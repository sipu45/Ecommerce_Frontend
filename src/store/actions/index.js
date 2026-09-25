import api from "../../api/api"
export const fetchProducts = () => async(dispatch) =>{
    try{
        dispatch({ type : "IS_FETCHING" });// loading
        const{ data } = await api.get(`/public/products`);
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
}