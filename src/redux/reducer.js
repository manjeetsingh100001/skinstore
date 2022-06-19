import { actionTypes } from "./action"


export const loadData = (key) => {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value;
    } catch {
        return null;
    }
};
const cart =  loadData("Cart");
const initState = {
    isLoading: false,
    isError:false,
    error: null,
    cart: cart ,
    
    data: []
}

function Reducer(state=initState,action){
    switch(action.type){
        case actionTypes.GET_REQUEST : {
            return {
                ...state,
                isLoding : true,
            }
        }
        case actionTypes.GET_SUCCESS : {
            return {
                ...state,
                isLoding : false,
                data: action.payload.data
            }
        }
        case actionTypes.GET_ERROR : {
            return {
                ...state,
                isLoding : false,
                isError : true,
                error: action.payload.error
            }
        }
        // case actionTypes.GET_QUREY : {
        //     return {
        //         ...state,
        //         qurey : action.payload
        //     }
        // }
        default : {
            return state
        }
    }
}export default Reducer