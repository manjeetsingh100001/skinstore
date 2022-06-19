import axios from 'axios';
export const actionTypes = {
    GET_REQUEST: 'GET_REQUEST',
    GET_SUCCESS: 'GET_SUCCESS',
    GET_ERROR: 'GET_ERROR',
    // GET_QUREY: 'GET_QUERY'
}
export const getRequest = ()=>({
    type : actionTypes.GET_REQUEST,
    payload: {
        isLoading : true,
    }
})
export const getSuccess = (res)=>({
    type : actionTypes.GET_SUCCESS,
    payload: {
        isLoading : false,
        data : res
    }
})
export const getError = (err)=>({
    type : actionTypes.GET_ERROR,
    payload: {
        isLoading : false,
        isError : true,
        error : err
    }
})
// export const getQuery = (params) =>({
//     type : actionTypes.GET_QUREY,
//     payload : params
// })
export const getData = (config)=>(dispatch)=>{
    dispatch(getRequest());
    axios(config)
    .then((res)=>{
        console.log(res.data,"action")
        dispatch(getSuccess(res.data));
    })
    .catch((err)=>{
        dispatch(getError(err))
    })
}